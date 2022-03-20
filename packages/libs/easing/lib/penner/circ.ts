export const easeInCirc = (t: number): number => 1 - Math.sqrt(1 - t ** 2);

export const easeOutCirc = (t: number): number => Math.sqrt(1 - (t - 1) ** 2);

export const easeInOutCirc = (t: number): number => (
  t < 0.5
    ? (1 - Math.sqrt(1 - (2 * t) ** 2)) * 0.5
    : (Math.sqrt(1 - (-2 * t + 2) ** 2) + 1) * 0.5
);