import { EasingDeclarator } from "../utils";
import { makeEaseInOut, makeEaseOut } from "./utils";

const c1 = 1.70158;
const c2 = c1 * 1.525;
const c3 = c1 + 1;

export const easeInBack: EasingDeclarator = () => (t: number): number => c3 * t * t * t - c1 * t * t;

export const easeOutBack: EasingDeclarator = makeEaseOut(easeInBack);

export const easeInOutBack: EasingDeclarator = makeEaseInOut(easeInBack);