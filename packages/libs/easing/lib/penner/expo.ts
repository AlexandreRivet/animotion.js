import { EasingDeclarator } from "../utils";
import { makeEaseInOut, makeEaseOut } from "./utils";

export const easeInExpo: EasingDeclarator = () => (t: number): number => t === 0 ? 0 : 2 ** (10 * (t - 1));

export const easeOutExpo: EasingDeclarator = makeEaseOut(easeInExpo);

export const easeInOutExpo: EasingDeclarator = makeEaseInOut(easeInExpo);
