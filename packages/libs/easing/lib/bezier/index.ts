/**
 * All functions are inspired from https://github.com/gre/bezier-easing
 */

import { linear } from "../penner";
import { EasingFunction } from "../utils";

const newtonIterations = 4;
const newtonMinSlope = 0.001;
const subdivisionPrecision = 0.0000001;
const subdivisionMaxIterations = 10;

const kSplineTableSize = 11;
const kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);

const a = (a1: number, a2: number): number => 1 - 3 * a2 + 3 * a1;
const b = (a1: number, a2: number): number => 3 * a2 - 6 * a1;
const c = (a1: number): number => 3 * a1;

const calcBezier = (t: number, a1: number, a2: number): number => (
  ((a(a1, a2) * t + b(a1, a2)) * t + c(a1)) * t
);

const getSlope = (t: number, a1: number, a2: number): number => (
  3 * a(a1, a2) * t * t + 2 * b(a1, a2) * t + c(a1)
);

const binarySubdivide = (x: number, a: number, b: number, x1: number, x2: number): number => {
  return 0;
};

const newtonRaphsonIterate = (x: number, guessForT: number, x1: number, x2: number): number => {
  return 0;
};

export const bezier = (x1: number = 0, y1: number = 0, x2: number = 0, y2: number = 0): EasingFunction => {
  if (x1 < 0 || x1 > 1 || x2 < 0 || x2 > 1) {
    throw new Error('values must be between')
  }

  if (x1 === y1 && x2 === y2) {
    return linear;
  }

  const sampleValues: Array<number> = new Array(kSplineTableSize);
  for (let i = 0; i < kSplineTableSize; i += 1) {
    sampleValues[i] = calcBezier(i * kSampleStepSize, x1, x2);
  }

  const estimateT = (x: number): number => {
    let intervalStart = 0;
    let currentSample = 1;
    let lastSample = kSplineTableSize - 1;

    for (; currentSample != lastSample && sampleValues[currentSample] <= x; currentSample += 1) {
      intervalStart += kSampleStepSize;
    }
    currentSample -= 1;

    const dist = (x - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
    const guessForT = intervalStart + dist * kSampleStepSize;

    const initialSlope = getSlope(guessForT, x1, x2);
    if (initialSlope >= newtonMinSlope) {
      return newtonRaphsonIterate(x, guessForT, x1, x2);
    } else if (initialSlope === 0) {
      return guessForT;
    }
    return binarySubdivide(x, intervalStart, intervalStart + kSampleStepSize, x1, x2);;
  };

  return (t: number): number => (
    (t === 0 || t === 1)
      ? t
      : calcBezier(estimateT(t), y1, y2)
  );
};
