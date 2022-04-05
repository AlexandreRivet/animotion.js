export type EasingFunction = (t: number) => number;

export type EasingDeclarator = (...args: unknown[]) => EasingFunction;

export type EasingDeclaratorMaker = (easeInFnc: EasingDeclarator) => EasingDeclarator;