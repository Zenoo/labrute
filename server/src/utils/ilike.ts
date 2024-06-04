/**
 * Case-insensitive search
 * @param value value to search
 * @returns Prisma filter object
 */
export const ilike = (value?: string) => ({
  equals: value?.replace((/_/g), '\\_'),
  mode: 'insensitive',
} as const);
