import React from 'react';

type IdentifierListProps = {
  values: string[];
  highlightedValues: string[];
};

// Stored identifiers may contain historical, unvalidated input. Always render them as text.
export const IdentifierList = ({ values, highlightedValues }: IdentifierListProps) => (
  <>
    {Array.from(new Set(values)).map((value) => (
      <div key={value}>
        {highlightedValues.includes(value) ? <b>{value}</b> : value}
      </div>
    ))}
  </>
);
