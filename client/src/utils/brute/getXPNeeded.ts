import factorial from './factorial.js';

const getXPNeeded = (level: number) => Math.round(Math.log(factorial(level)))
  - Math.round(Math.log(factorial(level - 1)));

export default getXPNeeded;
