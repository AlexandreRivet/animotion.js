import { EasingDeclarator } from "../utils";
import { makeEaseInOut, makeEaseOut } from "./utils";

export const easeInCubic: EasingDeclarator = () => (t: number): number => t * t * t;

export const easeOutCubic: EasingDeclarator = makeEaseOut(easeInCubic);

export const easeInOutCubic: EasingDeclarator = makeEaseInOut(easeInCubic);
