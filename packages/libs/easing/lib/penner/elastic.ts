const c1 = (2 * Math.PI) / 3;
const c2 = 10.75;
const c3 = c2 - 10;
const c4 = (2 * Math.PI) / 4.5;
const c5 = 11.125;

export const easeInElastic = (t: number): number => (
  t === 0
    ? 0
    : t === 1
      ? 1
      : -(2 ** (10 * (t - 1))) * Math.sin((t * 10 - c2) * c1)
);

export const easeOutElastic = (t: number): number => (
  t === 0
    ? 0
    : t === 1
      ? 1
      : (2 ** (-10 * t)) * Math.sin((t * 10 - c3) * c1) + 1
);

export const easeInOutElastic = (t: number): number => (
  t === 0
    ? 0
    : t === 1
      ? 1
      : t < 0.5
        ? -(2 ** (10 * (2 * t - 1))) * Math.sin((20 * t - c5) * c4) * 0.5
        : (2 ** (-10 * (2 * t - 1))) * Math.sin((20 * t * c5) * c4) * 0.5 + 1
);