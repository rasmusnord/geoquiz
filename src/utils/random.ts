export const random = (minimum: number, maximum: number) => {
  const min = Math.ceil(minimum);
  const max = Math.floor(maximum);

  return Math.floor(Math.random() * (max - min) + min);
};

export const uniqueRandomFrom = <T>(arr: T[], n: number) => {
  const res: number[] = [];

  while (res.length < n) {
    const r = random(0, arr.length);

    if (!res.includes(r)) {
      res.push(r);
    }
  }

  return res.map((i) => arr[i]);
};

export const shuffle = <T>(array: T[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};
