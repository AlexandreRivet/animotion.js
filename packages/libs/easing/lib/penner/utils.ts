import { EasingDeclarator, EasingDeclaratorMaker, EasingFunction } from "../utils";

export const makeEaseOut: EasingDeclaratorMaker = (easeIn: EasingDeclarator): EasingDeclarator => (
  (...args: unknown[]): EasingFunction => (
    (t: number) => (
      1 - easeIn(...args)(1 - t)
    )
  )
);

export const makeEaseInOut: EasingDeclaratorMaker = (easeIn: EasingDeclarator): EasingDeclarator => (
  (...args: unknown[]): EasingFunction => (
    (t: number) => (
      t < 0.5
        ? easeIn(...args)(t * 2) * 0.5
        : 1 - easeIn(...args)(t * -2 + 2) * 0.5
    )
  )
);