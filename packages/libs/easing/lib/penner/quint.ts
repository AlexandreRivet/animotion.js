export const easeInQuint = (t: number): number => t * t * t * t * t;

export const easeOutQuint = (t: number): number => 1 - (1 - t) ** 5;

export const easeInOutQuint = (t: number): number => t < 0.5 ? 16 * t * t * t * t * t : 1 - ((-2 * t + 2) ** 5) * 0.5;