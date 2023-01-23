export const getRandomNumbers = (amount: string, total: string) => {
  const set = new Set();
  while (set.size < +amount) {
    set.add(Math.floor(Math.random() * +total) + 1);
  }
  return Array.from(set) as number[];
};
