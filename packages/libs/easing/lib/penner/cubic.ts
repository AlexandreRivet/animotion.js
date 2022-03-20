export const easeInCubic = (t: number): number => t * t * t;

export const easeOutCubic = (t: number): number => 1 - (1 - t) ** 3;

export const easeInOutCubic = (t: number): number => t < 0.5 ? 4 * t * t * t : 1 - ((-2 * t + 2) ** 3) * 0.5;