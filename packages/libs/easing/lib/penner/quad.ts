import { EasingFunction } from "../utils";

export const easeInQuad: EasingFunction = (t: number): number => t * t;

export const easeOutQuad: EasingFunction = (t: number): number => 1 - (1 - t) * (1 - t);

export const easeInOutQuad: EasingFunction = (t: number): number => (
  t < 0.5
    ? 2 * t * t
    : 1 - ((-2 * t + 2) ** 2) * 0.5
);
