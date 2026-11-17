import { ExpectedError, isUuid } from '@labrute/core';
import type { AdminGridQuery } from '@labrute/core';

type ColumnKind = 'text' | 'nullableText' | 'number' | 'date' | 'nullableDate'
  | 'id' | 'userId' | readonly string[];
type Columns = Record<string, ColumnKind>;

const invalid = () => new ExpectedError('Invalid grid filter or sort');
const day = 24 * 60 * 60 * 1000;
const minInt = -(2 ** 31);
const maxInt = 2 ** 31 - 1;
const noMatches = { OR: [] };

const parse = (raw: unknown): AdminGridQuery => {
  if (raw === undefined) {
    return {};
  }

  const value: unknown = typeof raw === 'string' && raw.length <= 8192 ? JSON.parse(raw) : raw;

  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    throw invalid();
  }

  return value as AdminGridQuery;
};

const readValue = (value: unknown): string => {
  if (typeof value !== 'string' || !value.trim()
    || value.length > 255 || value.includes('\0')) {
    throw invalid();
  }

  return value.trim();
};

const readList = (value: unknown) => {
  if (!Array.isArray(value) || value.length === 0 || value.length > 50) {
    throw invalid();
  }

  return [...new Set(value.map(readValue))];
};

const isInt = (value: number) => Number.isInteger(value) && value >= minInt && value <= maxInt;

const readNumber = (value: string) => {
  const number = Number(value);

  if (!Number.isFinite(number)) {
    throw invalid();
  }

  return number;
};

const filterWhere = (field: string, kind: ColumnKind, operator: string, rawValue: unknown) => {
  const onField = (filter: unknown) => ({ [field]: filter });
  const literal = (value: string) => value.replace(/[\\%_]/g, (character) => '\\' + character);
  const insensitive = { mode: 'insensitive' as const };
  const text = kind === 'text' || kind === 'nullableText';
  const nullable = kind === 'nullableText' || kind === 'nullableDate';
  const uuid = kind === 'id' || kind === 'userId';

  if (operator === 'isEmpty' || operator === 'isNotEmpty') {
    if (Array.isArray(kind)) {
      throw invalid();
    }

    if (text) {
      if (operator === 'isNotEmpty') {
        return onField({ not: '' });
      }

      return nullable ? { OR: [onField(''), onField(null)] } : onField('');
    }

    if (nullable) {
      return onField(operator === 'isEmpty' ? null : { not: null });
    }

    return operator === 'isEmpty' ? noMatches : {};
  }

  const ids = (values: string[]) => values
    .map((value) => kind === 'userId' ? value.replace(/^USER-/i, '') : value)
    .filter(isUuid)
    .map((value) => value.toLowerCase());

  if (operator === 'isAnyOf') {
    const values = readList(rawValue);

    if (uuid) {
      return onField({ in: ids(values) });
    }

    if (text) {
      return {
        OR: values.map((value) => onField({
          equals: literal(value),
          ...insensitive,
        })),
      };
    }

    if (kind === 'number') {
      return onField({ in: values.map(readNumber).filter(isInt) });
    }

    if (Array.isArray(kind) && values.every((value) => kind.includes(value))) {
      return onField({ in: values });
    }

    throw invalid();
  }

  const value = readValue(rawValue);

  if (uuid) {
    switch (operator) {
      case 'equals': return onField({ in: ids([value]) });
      case 'doesNotEqual': return onField({ notIn: ids([value]) });
      default: throw invalid();
    }
  }

  if (text) {
    const pattern = literal(value);

    if (operator === 'doesNotContain' || operator === 'doesNotEqual') {
      const name = operator === 'doesNotContain' ? 'contains' : 'equals';

      const negated = onField({
        not: { [name]: pattern },
        ...insensitive,
      });

      return nullable ? { OR: [negated, onField(null)] } : negated;
    }

    switch (operator) {
      case 'contains':
      case 'equals':
      case 'startsWith':
      case 'endsWith':
        return onField({
          [operator]: pattern,
          ...insensitive,
        });
      default: throw invalid();
    }
  }

  if (kind === 'number') {
    const number = readNumber(value);

    const atLeast = (bound: number) => {
      if (bound > maxInt) {
        return noMatches;
      }

      if (bound <= minInt) {
        return {};
      }

      return onField({ gte: bound });
    };

    const atMost = (bound: number) => {
      if (bound < minInt) {
        return noMatches;
      }

      if (bound >= maxInt) {
        return {};
      }

      return onField({ lte: bound });
    };

    switch (operator) {
      case '>': return atLeast(Math.floor(number) + 1);
      case '>=': return atLeast(Math.ceil(number));
      case '<': return atMost(Math.ceil(number) - 1);
      case '<=': return atMost(Math.floor(number));
      case '=': return isInt(number) ? onField(number) : noMatches;
      case '!=': return isInt(number) ? onField({ not: number }) : {};
      default: throw invalid();
    }
  }

  if ((kind === 'date' || kind === 'nullableDate') && /^\d{4}-\d{2}-\d{2}$/.test(value)) {
    const date = new Date(value + 'T00:00:00Z');

    if (Number.isFinite(date.getTime()) && date.toISOString().startsWith(value)) {
      const tomorrow = new Date(date.getTime() + day);

      switch (operator) {
        case 'is': return onField({
          gte: date,
          lt: tomorrow,
        });
        case 'not': return { OR: [onField({ lt: date }), onField({ gte: tomorrow })] };
        case 'before': return onField({ lt: date });
        case 'onOrBefore': return onField({ lt: tomorrow });
        case 'after': return onField({ gte: tomorrow });
        case 'onOrAfter': return onField({ gte: date });
        default: break;
      }
    }
  }

  if (Array.isArray(kind) && kind.includes(value)) {
    if (operator === 'is') {
      return onField(value);
    }

    if (operator === 'not') {
      return onField({ not: value });
    }
  }

  throw invalid();
};

export const adminGridQuery = (raw: unknown, columns: Columns) => {
  const { sort, filter } = parse(raw);

  const column = (field: unknown) => {
    const kind = typeof field === 'string' && Object.prototype.hasOwnProperty.call(columns, field)
      ? columns[field]
      : undefined;

    if (!kind) {
      throw invalid();
    }

    return kind;
  };

  if (sort) {
    column(sort.field);

    if (sort.direction !== 'asc' && sort.direction !== 'desc') {
      throw invalid();
    }
  }

  let where = {};

  if (filter) {
    const kind = column(filter.field);

    if (typeof filter.operator !== 'string') {
      throw invalid();
    }

    where = filterWhere(filter.field, kind, filter.operator, filter.value);
  }

  return {
    sort,
    filter,
    where,
    orderBy: sort ? [
      { [sort.field]: sort.direction },
      ...(sort.field === 'id' ? [] : [{ id: 'desc' as const }]),
    ] : undefined,
  };
};
