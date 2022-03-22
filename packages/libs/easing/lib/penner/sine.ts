import { EasingFunction } from "../utils";

export const easeInSine: EasingFunction = (t: number): number => 1 - Math.cos(t * Math.PI * 0.5);

export const easeOutSine: EasingFunction = (t: number): number => Math.sin(t * Math.PI * 0.5);

export const easeInOutSine: EasingFunction = (t: number): number => -(Math.cos(Math.PI * t) - 1) * 0.5;
