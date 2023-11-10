/**
 * Format a large number to a string with a suffix
 */
const formatLargeNumber = (number: number) => {
  if (number < 10000) {
    return number.toString();
  }

  const numberString = number.toString();
  const numberLength = numberString.length;

  if (numberLength < 7) {
    return `${numberString.slice(0, numberLength - 3)}k`;
  }
  if (numberLength < 10) {
    return `${numberString.slice(0, numberLength - 6)}M`;
  }
  if (numberLength < 13) {
    return `${numberString.slice(0, numberLength - 9)}B`;
  }

  return numberString;
};

export default formatLargeNumber;