export const easeInQuad = (t: number): number => t * t;

export const easeOutQuad = (t: number): number => 1 - (1 - t) * (1 - t);

export const easeInOutQuad = (t: number): number => t < 0.5 ? 2 * t * t : 1 - ((-2 * t + 2) ** 2) * 0.5;