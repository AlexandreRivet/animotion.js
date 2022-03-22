import { EasingFunction } from "../utils";

export const easeInCirc: EasingFunction = (t: number): number => 1 - Math.sqrt(1 - t ** 2);

export const easeOutCirc: EasingFunction = (t: number): number => Math.sqrt(1 - (t - 1) ** 2);

export const easeInOutCirc: EasingFunction = (t: number): number => (
  t < 0.5
    ? (1 - Math.sqrt(1 - (2 * t) ** 2)) * 0.5
    : (Math.sqrt(1 - (-2 * t + 2) ** 2) + 1) * 0.5
);
