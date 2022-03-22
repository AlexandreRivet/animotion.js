import { bezier } from "../lib";
import { linear } from "../lib";

describe('Easing', () => {
  describe('Bezier', () => {
    it('should return linear if same value are sent', () => {
      expect(bezier(0.25, 0.25, 0.75, 0.75)).toBe(linear);
      expect(bezier(0.5, 0.5, 0.5, 0.5)).toBe(linear);
    });

    it('should throw an error if numbers are not between 0 & 1', () => {
      expect(() => bezier(-0.5, 0, 0, 1)).toThrow('Values must be between 0 and 1');
      expect(() => bezier(0.5, 0, -1, 1)).toThrow('Values must be between 0 and 1');
    });

    it('should return right values', () => {
      let b = bezier(0.59, 0.1, 0.42, 0.86);
      expect(b(0)).toBe(0);
      expect(b(0.25)).toBeCloseTo(0.1078, 3);
      expect(b(0.5)).toBeCloseTo(0.4771, 3);
      expect(b(0.75)).toBeCloseTo(0.8708, 3);
      expect(b(1)).toBe(1);

      b = bezier(0.05, 0.7, 0.2, 0.95);
      expect(b(0)).toBe(0);
      expect(b(0.25)).toBeCloseTo(0.7751, 3);
      expect(b(0.5)).toBeCloseTo(0.9167, 3);
      expect(b(0.75)).toBeCloseTo(0.9746, 3);
      expect(b(1)).toBe(1);

      b = bezier(1, 0, 0, 1);
      expect(b(0)).toBe(0);
      expect(b(0.25)).toBeCloseTo(0.0297, 3);
      expect(b(0.5)).toBeCloseTo(0.5, 3);
      expect(b(0.75)).toBeCloseTo(0.9703, 3);
      expect(b(1)).toBe(1);

      b = bezier(0.75, 0.35, 0.75, 0.35);
      expect(b(0)).toBe(0);
      expect(b(0.25)).toBeCloseTo(0.1177, 3);
      expect(b(0.5)).toBeCloseTo(0.2478, 3);
      expect(b(0.75)).toBeCloseTo(0.4598, 3);
      expect(b(1)).toBe(1);

      b = bezier(0, 1, 1, 0);
      expect(b(0.000001)).toBeCloseTo(0);
      expect(b(0.999999)).toBeCloseTo(1);
    });
  })
});
