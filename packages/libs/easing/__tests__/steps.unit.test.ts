import {
  steps
} from '../lib';

describe('Easing', () => {
  describe('Steps', () => {
    it('should return right values without direction', () => {
      const step = steps(5);
      expect(step(0)).toBe(0);
      expect(step(0.25)).toBe(0.25);
      expect(step(0.5)).toBe(0.5);
      expect(step(0.75)).toBe(0.75);
      expect(step(1)).toBe(1);
    });

    it('should return right values with jump-start or start direction', () => {
      let step = steps(2, 'jump-start');
      expect(step(0)).toBe(0);
      expect(step(0.25)).toBe(0.5);
      expect(step(0.5)).toBe(0.5);
      expect(step(0.75)).toBe(1);
      expect(step(1)).toBe(1);

      step = steps(2, 'start');
      expect(step(0)).toBe(0);
      expect(step(0.25)).toBe(0.5);
      expect(step(0.5)).toBe(0.5);
      expect(step(0.75)).toBe(1);
      expect(step(1)).toBe(1);
    });

    it('should return right values with jump-end or end direction', () => {
      let step = steps(4, 'jump-end');
      expect(step(0)).toBe(0);
      expect(step(0.25)).toBe(0.25);
      expect(step(0.5)).toBe(0.5);
      expect(step(0.75)).toBe(0.75);
      expect(step(1)).toBe(1);

      step = steps(4, 'end');
      expect(step(0)).toBe(0);
      expect(step(0.25)).toBe(0.25);
      expect(step(0.5)).toBe(0.5);
      expect(step(0.75)).toBe(0.75);
      expect(step(1)).toBe(1);
    });

    it('should return right values with jump-both direction', () => {
      let step = steps(3, 'jump-both');
      expect(step(0)).toBe(0);
      expect(step(0.25)).toBe(0.25);
      expect(step(0.5)).toBe(0.5);
      expect(step(0.75)).toBe(0.75);
      expect(step(1)).toBe(1);
    });
  });
});
