const shuffle = <T>(array: Array<T>) => {
  const shuffledArray = [...array];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const iItem = shuffledArray[i];
    const jItem = shuffledArray[j];

    if (typeof iItem === 'undefined' || typeof jItem === 'undefined') {
      throw new Error('Item not found while shuffling array');
    }

    shuffledArray[i] = jItem;
    shuffledArray[j] = iItem;
  }

  return shuffledArray;
};

export default shuffle;
