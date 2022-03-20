export const easeInExpo = (t: number): number => t === 0 ? 0 : 2 ** (10 * (t - 1));

export const easeOutExpo = (t: number): number => t === 1 ? 1 : 1 - 2 ** (-10 * t);

export const easeInOutExpo = (t: number): number => (
  t === 0
    ? 0
    : t === 1
      ? 1
      : t < 0.5
        ? 2 ** (10 * (2 * t - 1)) * 0.5
        : (2 - 2 ** (-2 * t + 1)) * 0.5
)