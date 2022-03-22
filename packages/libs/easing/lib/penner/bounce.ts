import { EasingFunction } from "../utils";

const n1 = 7.5625;
const d1 = 2.75;
const invd1 = 1 / d1;

export const easeOutBounce: EasingFunction = (t: number): number => {
  if (t < invd1) {
    return n1 * t * t;
  } else if (t < 2 * invd1) {
    t -= 1.5 * invd1;
    return n1 * t * t + 0.75;
  } else if (t < 2.5 * invd1) {
    t -= 2.25 * invd1;
    return n1 * t * t + 0.9375;
  }
  t -= 2.625 * invd1;
  return n1 * t * t + 0.984375;
}

export const easeInBounce: EasingFunction = (t: number): number => 1 - easeOutBounce(1 - t);

export const easeInOutBounce: EasingFunction = (t: number): number => (
  t < 0.5
    ? (1 - easeOutBounce(1 - 2 * t)) * 0.5
    : (1 + easeOutBounce(2 * t - 1)) * 0.5
);
