import { EasingDeclarator } from "../utils";
import { makeEaseInOut, makeEaseOut } from "./utils";

export const easeInQuart: EasingDeclarator = () => (t: number): number => t * t * t * t;

export const easeOutQuart: EasingDeclarator = makeEaseOut(easeInQuart);

export const easeInOutQuart: EasingDeclarator = makeEaseInOut(easeInQuart);