import { EasingFunction } from "../utils";

export const easeInQuint: EasingFunction = (t: number): number => t * t * t * t * t;

export const easeOutQuint: EasingFunction = (t: number): number => 1 - (1 - t) ** 5;

export const easeInOutQuint: EasingFunction = (t: number): number => (
  t < 0.5
    ? 16 * t * t * t * t * t
    : 1 - ((-2 * t + 2) ** 5) * 0.5
);
