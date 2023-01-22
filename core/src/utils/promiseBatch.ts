const promiseBatch = async <A, B>(task: (a: A) => B, items: A[], batchSize: number) => {
  let position = 0;
  let results: B[] = [];
  while (position < items.length) {
    const itemsForBatch = items.slice(position, position + batchSize);
    // eslint-disable-next-line no-await-in-loop
    results = [...results, ...await Promise.all(itemsForBatch.map((item) => task(item)))];
    position += batchSize;
  }
  return results;
};

export default promiseBatch;