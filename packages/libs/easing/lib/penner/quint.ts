import { EasingDeclarator } from "../utils";
import { makeEaseInOut, makeEaseOut } from "./utils";

export const easeInQuint: EasingDeclarator = () => (t: number): number => t * t * t * t * t;

export const easeOutQuint: EasingDeclarator = makeEaseOut(easeInQuint);

export const easeInOutQuint: EasingDeclarator = makeEaseInOut(easeInQuint);