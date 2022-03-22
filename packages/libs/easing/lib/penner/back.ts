import { EasingFunction } from "../utils";

const c1 = 1.70158;
const c2 = c1 * 1.525;
const c3 = c1 + 1;

export const easeInBack: EasingFunction = (t: number): number => c3 * t * t * t - c1 * t * t;

export const easeOutBack: EasingFunction = (t: number): number => 1 + c3 * (t - 1) ** 3 + c1 * (t - 1) ** 2;

export const easeInOutBack: EasingFunction = (t: number): number => (
  t < 0.5
    ? ((2 * t) ** 2) * ((c2 + 1) * 2 * t - c2) * 0.5
    : (((2 * t - 2) ** 2) * ((c2 + 1) * (t * 2 - 2) + c2) + 2) * 0.5
);
