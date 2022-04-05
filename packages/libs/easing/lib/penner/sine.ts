import { EasingDeclarator } from "../utils";
import { makeEaseInOut, makeEaseOut } from "./utils";

export const easeInSine: EasingDeclarator = () => (t: number): number => 1 - Math.cos(t * Math.PI * 0.5);

export const easeOutSine: EasingDeclarator = makeEaseOut(easeInSine);

export const easeInOutSine: EasingDeclarator = makeEaseInOut(easeInSine);
