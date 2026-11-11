import React from 'react';

type IdentifierListProps = {
  values: string[];
  highlightedValues: string[] | ReadonlySet<string>;
};

// Stored identifiers may contain historical, unvalidated input. Always render them as text.
export const IdentifierList = ({ values, highlightedValues }: IdentifierListProps) => {
  const highlighted = Array.isArray(highlightedValues)
    ? new Set(highlightedValues) : highlightedValues;
  return (
    <>
      {Array.from(new Set(values)).map((value) => (
        <div key={value}>
          {highlighted.has(value) ? <b>{value}</b> : value}
        </div>
      ))}
    </>
  );
};
