import { parseEasing } from "../lib";
import { easeInOutElastic, easeInSine, easeOutCirc, linear } from "../lib";

describe('Easing', () => {
  describe('parseEasing', () => {
    it('should return penner functions', () => {
      expect(parseEasing('easeInSine')).toBe(easeInSine);
      expect(parseEasing('easeOutCirc')).toBe(easeOutCirc);
      expect(parseEasing('easeInOutElastic')).toBe(easeInOutElastic);
    });

    it('should return cubicBezier', () => {
      expect(parseEasing('cubicBezier(0, 0, 1, 1)')).toBe(linear);
    });

    it('should return steps', () => {
      expect(parseEasing('steps(5)')).toBeDefined();
      expect(parseEasing('steps(5, jump-none)')).toBeDefined();
    });

    it('should throw an error on unknown easing', () => {
      expect(() => parseEasing('randomEasing')).toThrow('Unknown easing');
      expect(() => parseEasing('cubicBezie')).toThrow('Unknown easing');
      expect(() => parseEasing('easInOutBounce')).toThrow('Unknown easing');
    });

    it('should throw an error on wrong easing definition', () => {
      expect(() => parseEasing('(0.1, 0.2)')).toThrow('Easing parsing failed');
      expect(() => parseEasing('easeInOut()')).toThrow('Easing parsing failed');
    });
  })
});
