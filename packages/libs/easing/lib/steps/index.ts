import { EasingFunction } from "../utils";

export const steps = (steps: number, direction: string = 'jump-none'): EasingFunction => {
  const isStart = direction === 'jump-both' || direction === 'jump-start' || direction === 'start';
  const isEnd = direction === 'jump-both' || direction === 'jump-end' || direction === 'end';
  const stepsForDirection = steps + (isStart ? 1 : 0) + (isEnd ? 1 : 0);
  const invStepsForDirection = 1 / (stepsForDirection - 1);
  const roundMethod = isStart ? Math.ceil : Math.floor;

  return (t: number) => {
    if (t === 0 || t === 1) return t;
    return roundMethod(t * steps) * invStepsForDirection;
  };
}
