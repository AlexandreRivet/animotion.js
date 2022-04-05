import { EasingDeclarator } from "../utils";
import { makeEaseInOut, makeEaseOut } from "./utils";

export const easeInQuad: EasingDeclarator = () => (t: number): number => t * t;

export const easeOutQuad: EasingDeclarator = makeEaseOut(easeInQuad);

export const easeInOutQuad: EasingDeclarator = makeEaseInOut(easeInQuad);
