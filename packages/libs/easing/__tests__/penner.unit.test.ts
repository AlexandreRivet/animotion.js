import {
  easeInSine,
  easeOutSine,
  easeInOutSine,
  easeInQuad,
  easeOutQuad,
  easeInOutQuad,
  easeInCubic,
  easeOutCubic,
  easeInOutCubic,
  easeInQuart,
  easeOutQuart,
  easeInOutQuart,
} from '../lib';

describe('Easing', () => {
  describe('Penner', () => {
    describe('Sine', () => {
      it('easeIn', () => {
        expect(easeInSine(0)).toBeCloseTo(0, 3);
        expect(easeInSine(0.25)).toBeCloseTo(0.0761, 3);
        expect(easeInSine(0.5)).toBeCloseTo(0.2929, 3);
        expect(easeInSine(0.75)).toBeCloseTo(0.6173, 3);
        expect(easeInSine(1)).toBeCloseTo(1, 3);
      });

      it('easeOut', () => {
        expect(easeOutSine(0)).toBeCloseTo(0, 3);
        expect(easeOutSine(0.25)).toBeCloseTo(0.3827, 3);
        expect(easeOutSine(0.5)).toBeCloseTo(0.7071, 3);
        expect(easeOutSine(0.75)).toBeCloseTo(0.9239, 3);
        expect(easeOutSine(1)).toBeCloseTo(1, 3);
      });

      it('easeInOut', () => {
        expect(easeInOutSine(0)).toBeCloseTo(0, 3);
        expect(easeInOutSine(0.25)).toBeCloseTo(0.1464, 3);
        expect(easeInOutSine(0.5)).toBeCloseTo(0.5);
        expect(easeInOutSine(0.75)).toBeCloseTo(0.8536, 3);
        expect(easeInOutSine(1)).toBeCloseTo(1, 3);
      });
    });

    describe('Quad', () => {
      it('easeIn', () => {
        expect(easeInQuad(0)).toBeCloseTo(0, 3);
        expect(easeInQuad(0.25)).toBeCloseTo(0.0625, 3);
        expect(easeInQuad(0.5)).toBeCloseTo(0.25, 3);
        expect(easeInQuad(0.75)).toBeCloseTo(0.5625, 3);
        expect(easeInQuad(1)).toBeCloseTo(1, 3);
      });

      it('easeOut', () => {
        expect(easeOutQuad(0)).toBeCloseTo(0, 3);
        expect(easeOutQuad(0.25)).toBeCloseTo(0.4375, 3);
        expect(easeOutQuad(0.5)).toBeCloseTo(0.75, 3);
        expect(easeOutQuad(0.75)).toBeCloseTo(0.9375, 3);
        expect(easeOutQuad(1)).toBeCloseTo(1, 3);
      });

      it('easeInOut', () => {
        expect(easeInOutQuad(0)).toBeCloseTo(0, 3);
        expect(easeInOutQuad(0.25)).toBeCloseTo(0.125, 3);
        expect(easeInOutQuad(0.5)).toBeCloseTo(0.5);
        expect(easeInOutQuad(0.75)).toBeCloseTo(0.875, 3);
        expect(easeInOutQuad(1)).toBeCloseTo(1, 3);
      });
    });

    describe('Cubic', () => {
      it('easeIn', () => {
        expect(easeInCubic(0)).toBeCloseTo(0, 3);
        expect(easeInCubic(0.25)).toBeCloseTo(0.0156, 3);
        expect(easeInCubic(0.5)).toBeCloseTo(0.125, 3);
        expect(easeInCubic(0.75)).toBeCloseTo(0.4219, 3);
        expect(easeInCubic(1)).toBeCloseTo(1, 3);
      });

      it('easeOut', () => {
        expect(easeOutCubic(0)).toBeCloseTo(0, 3);
        expect(easeOutCubic(0.25)).toBeCloseTo(0.5781, 3);
        expect(easeOutCubic(0.5)).toBeCloseTo(0.875, 3);
        expect(easeOutCubic(0.75)).toBeCloseTo(0.9844, 3);
        expect(easeOutCubic(1)).toBeCloseTo(1, 3);
      });

      it('easeInOut', () => {
        expect(easeInOutCubic(0)).toBeCloseTo(0, 3);
        expect(easeInOutCubic(0.25)).toBeCloseTo(0.0625, 3);
        expect(easeInOutCubic(0.5)).toBeCloseTo(0.5);
        expect(easeInOutCubic(0.75)).toBeCloseTo(0.9375, 3);
        expect(easeInOutCubic(1)).toBeCloseTo(1, 3);
      });
    });

    describe('Quart', () => {
      it('easeIn', () => {
        expect(easeInQuart(0)).toBeCloseTo(0, 3);
        expect(easeInQuart(0.25)).toBeCloseTo(0.0039, 3);
        expect(easeInQuart(0.5)).toBeCloseTo(0.0625, 3);
        expect(easeInQuart(0.75)).toBeCloseTo(0.3164, 3);
        expect(easeInQuart(1)).toBeCloseTo(1, 3);
      });

      it('easeOut', () => {
        expect(easeOutQuart(0)).toBeCloseTo(0, 3);
        expect(easeOutQuart(0.25)).toBeCloseTo(0.6836, 3);
        expect(easeOutQuart(0.5)).toBeCloseTo(0.9375, 3);
        expect(easeOutQuart(0.75)).toBeCloseTo(0.9961, 3);
        expect(easeOutQuart(1)).toBeCloseTo(1, 3);
      });

      it('easeInOut', () => {
        expect(easeInOutQuart(0)).toBeCloseTo(0, 3);
        expect(easeInOutQuart(0.25)).toBeCloseTo(0.0313, 3);
        expect(easeInOutQuart(0.5)).toBeCloseTo(0.5);
        expect(easeInOutQuart(0.75)).toBeCloseTo(0.9688, 3);
        expect(easeInOutQuart(1)).toBeCloseTo(1, 3);
      });
    });
  });
});
