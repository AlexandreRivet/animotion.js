export const easeInQuart = (t: number): number => t * t * t * t;

export const easeOutQuart = (t: number): number => 1 - (1 - t) ** 4;

export const easeInOutQuart = (t: number): number => t < 0.5 ? 8 * t * t * t * t : 1 - ((-2 * t + 2) ** 4) * 0.5;