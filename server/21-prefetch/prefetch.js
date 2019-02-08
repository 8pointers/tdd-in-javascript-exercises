const observableQueue = () => {
  const queue = [];
  const observers = [];
  return {
    queue,
    enqueue: elements => {
      queue.push(elements);
      observers.forEach(observer => observer());
    },
    dequeue: (n, listener) => {},
    observe: listener => observers.push(listener)
  };
};

const prefetch = (rngTransport, lowWatermark, batchSize) => {
  const queue = observableQueue();
  let inFlightNumbers = 0;
  queue.observe(() => {
    if (queue.queue.length + inFlightNumbers <= lowWatermark) {
      inFlightNumbers += batchSize;
      rngTransport(batchSize).then(
        numbers => {
          inFlightNumbers -= batchSize;
          queue.enqueue(numbers);
        },
        () => (inFlightNumbers -= batchSize)
      );
    }
  });
  return n => new Promise(resolve => queue.dequeue(n, resolve));
};

module.exports = prefetch;
