import { EasingDeclarator } from "../utils";
import { makeEaseInOut, makeEaseOut } from "./utils";

export const easeInCirc: EasingDeclarator = () => (t: number): number => 1 - Math.sqrt(1 - t ** 2);

export const easeOutCirc: EasingDeclarator = makeEaseOut(easeInCirc);

export const easeInOutCirc: EasingDeclarator = makeEaseInOut(easeInCirc);