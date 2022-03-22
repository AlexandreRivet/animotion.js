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
  easeInQuint,
  easeOutQuint,
  easeInOutQuint,
  easeInExpo,
  easeOutExpo,
  easeInOutExpo,
  easeInCirc,
  easeOutCirc,
  easeInOutCirc,
  easeInBack,
  easeOutBack,
  easeInOutBack,
  easeInElastic,
  easeOutElastic,
  easeInOutElastic,
  easeInBounce,
  easeOutBounce,
  easeInOutBounce,
  linear,
} from '../lib';

describe('Easing', () => {
  it('linear', () => {
    expect(linear(0)).toBe(0);
    expect(linear(0.25)).toBe(0.25);
    expect(linear(0.5)).toBe(0.5);
    expect(linear(0.75)).toBe(0.75);
    expect(linear(1)).toBe(1);
  });

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
        expect(easeInOutSine(0.5)).toBeCloseTo(0.5, 3);
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
        expect(easeInOutQuad(0.5)).toBeCloseTo(0.5, 3);
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
        expect(easeInOutCubic(0.5)).toBeCloseTo(0.5, 3);
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
        expect(easeInOutQuart(0.5)).toBeCloseTo(0.5, 3);
        expect(easeInOutQuart(0.75)).toBeCloseTo(0.9688, 3);
        expect(easeInOutQuart(1)).toBeCloseTo(1, 3);
      });
    });

    describe('Quint', () => {
      it('easeIn', () => {
        expect(easeInQuint(0)).toBeCloseTo(0, 3);
        expect(easeInQuint(0.25)).toBeCloseTo(0.0010, 3);
        expect(easeInQuint(0.5)).toBeCloseTo(0.0312, 3);
        expect(easeInQuint(0.75)).toBeCloseTo(0.2373, 3);
        expect(easeInQuint(1)).toBeCloseTo(1, 3);
      });

      it('easeOut', () => {
        expect(easeOutQuint(0)).toBeCloseTo(0, 3);
        expect(easeOutQuint(0.25)).toBeCloseTo(0.7627, 3);
        expect(easeOutQuint(0.5)).toBeCloseTo(0.9688, 3);
        expect(easeOutQuint(0.75)).toBeCloseTo(0.9990, 3);
        expect(easeOutQuint(1)).toBeCloseTo(1, 3);
      });

      it('easeInOut', () => {
        expect(easeInOutQuint(0)).toBeCloseTo(0, 3);
        expect(easeInOutQuint(0.25)).toBeCloseTo(0.0156, 3);
        expect(easeInOutQuint(0.5)).toBeCloseTo(0.5, 3);
        expect(easeInOutQuint(0.75)).toBeCloseTo(0.9844, 3);
        expect(easeInOutQuint(1)).toBeCloseTo(1, 3);
      });
    });

    describe('Expo', () => {
      it('easeIn', () => {
        expect(easeInExpo(0)).toBeCloseTo(0, 3);
        expect(easeInExpo(0.25)).toBeCloseTo(0.0055, 3);
        expect(easeInExpo(0.5)).toBeCloseTo(0.0312, 3);
        expect(easeInExpo(0.75)).toBeCloseTo(0.1768, 3);
        expect(easeInExpo(1)).toBeCloseTo(1, 3);
      });

      it('easeOut', () => {
        expect(easeOutExpo(0)).toBeCloseTo(0, 3);
        expect(easeOutExpo(0.25)).toBeCloseTo(0.8232, 3);
        expect(easeOutExpo(0.5)).toBeCloseTo(0.9688, 3);
        expect(easeOutExpo(0.75)).toBeCloseTo(0.9945, 3);
        expect(easeOutExpo(1)).toBeCloseTo(1, 3);
      });

      it('easeInOut', () => {
        expect(easeInOutExpo(0)).toBeCloseTo(0, 3);
        expect(easeInOutExpo(0.25)).toBeCloseTo(0.0156, 3);
        expect(easeInOutExpo(0.5)).toBeCloseTo(0.5, 3);
        expect(easeInOutExpo(0.75)).toBeCloseTo(0.6464, 3);
        expect(easeInOutExpo(1)).toBeCloseTo(1, 3);
      });
    });

    describe('Circ', () => {
      it('easeIn', () => {
        expect(easeInCirc(0)).toBeCloseTo(0, 3);
        expect(easeInCirc(0.25)).toBeCloseTo(0.0318, 3);
        expect(easeInCirc(0.5)).toBeCloseTo(0.1340, 3);
        expect(easeInCirc(0.75)).toBeCloseTo(0.3386, 3);
        expect(easeInCirc(1)).toBeCloseTo(1, 3);
      });

      it('easeOut', () => {
        expect(easeOutCirc(0)).toBeCloseTo(0, 3);
        expect(easeOutCirc(0.25)).toBeCloseTo(0.6614, 3);
        expect(easeOutCirc(0.5)).toBeCloseTo(0.8660, 3);
        expect(easeOutCirc(0.75)).toBeCloseTo(0.9682, 3);
        expect(easeOutCirc(1)).toBeCloseTo(1, 3);
      });

      it('easeInOut', () => {
        expect(easeInOutCirc(0)).toBeCloseTo(0, 3);
        expect(easeInOutCirc(0.25)).toBeCloseTo(0.0670, 3);
        expect(easeInOutCirc(0.5)).toBeCloseTo(0.5, 3);
        expect(easeInOutCirc(0.75)).toBeCloseTo(0.9330, 3);
        expect(easeInOutCirc(1)).toBeCloseTo(1, 3);
      });
    });

    describe('Back', () => {
      it('easeIn', () => {
        expect(easeInBack(0)).toBeCloseTo(0, 3);
        expect(easeInBack(0.25)).toBeCloseTo(-0.0641, 3);
        expect(easeInBack(0.5)).toBeCloseTo(-0.0877, 3);
        expect(easeInBack(0.75)).toBeCloseTo(0.1826, 3);
        expect(easeInBack(1)).toBeCloseTo(1, 3);
      });

      it('easeOut', () => {
        expect(easeOutBack(0)).toBeCloseTo(0, 3);
        expect(easeOutBack(0.25)).toBeCloseTo(0.8174, 3);
        expect(easeOutBack(0.5)).toBeCloseTo(1.0877, 3);
        expect(easeOutBack(0.75)).toBeCloseTo(1.0641, 3);
        expect(easeOutBack(1)).toBeCloseTo(1, 3);
      });

      it('easeInOut', () => {
        expect(easeInOutBack(0)).toBeCloseTo(0, 3);
        expect(easeInOutBack(0.25)).toBeCloseTo(-0.0997, 3);
        expect(easeInOutBack(0.5)).toBeCloseTo(0.5, 3);
        expect(easeInOutBack(0.75)).toBeCloseTo(1.0997, 3);
        expect(easeInOutBack(1)).toBeCloseTo(1, 3);
      });
    });

    describe('Elastic', () => {
      it('easeIn', () => {
        expect(easeInElastic(0)).toBeCloseTo(0, 3);
        expect(easeInElastic(0.25)).toBeCloseTo(-0.0055, 3);
        expect(easeInElastic(0.5)).toBeCloseTo(-0.0156, 3);
        expect(easeInElastic(0.75)).toBeCloseTo(0.0884, 3);
        expect(easeInElastic(1)).toBeCloseTo(1, 3);
      });

      it('easeOut', () => {
        expect(easeOutElastic(0)).toBeCloseTo(0, 3);
        expect(easeOutElastic(0.25)).toBeCloseTo(0.9116, 3);
        expect(easeOutElastic(0.5)).toBeCloseTo(1.0156, 3);
        expect(easeOutElastic(0.75)).toBeCloseTo(1.0055, 3);
        expect(easeOutElastic(1)).toBeCloseTo(1, 3);
      });

      it('easeInOut', () => {
        expect(easeInOutElastic(0)).toBeCloseTo(0, 3);
        expect(easeInOutElastic(0.25)).toBeCloseTo(0.0120, 3);
        expect(easeInOutElastic(0.5)).toBeCloseTo(0.5076, 3);
        expect(easeInOutElastic(0.75)).toBeCloseTo(1.0078, 3);
        expect(easeInOutElastic(1)).toBeCloseTo(1, 3);
      });
    });

    describe('Bounce', () => {
      it('easeIn', () => {
        expect(easeInBounce(0)).toBeCloseTo(0, 3);
        expect(easeInBounce(0.25)).toBeCloseTo(0.0273, 3);
        expect(easeInBounce(0.5)).toBeCloseTo(0.2344, 3);
        expect(easeInBounce(0.75)).toBeCloseTo(0.5273, 3);
        expect(easeInBounce(1)).toBeCloseTo(1, 3);
      });

      it('easeOut', () => {
        expect(easeOutBounce(0)).toBeCloseTo(0, 3);
        expect(easeOutBounce(0.25)).toBeCloseTo(0.4727, 3);
        expect(easeOutBounce(0.5)).toBeCloseTo(0.7656, 3);
        expect(easeOutBounce(0.75)).toBeCloseTo(0.9727, 3);
        expect(easeOutBounce(1)).toBeCloseTo(1, 3);
      });

      it('easeInOut', () => {
        expect(easeInOutBounce(0)).toBeCloseTo(0, 3);
        expect(easeInOutBounce(0.25)).toBeCloseTo(0.1172, 3);
        expect(easeInOutBounce(0.5)).toBeCloseTo(0.5, 3);
        expect(easeInOutBounce(0.75)).toBeCloseTo(0.8828, 3);
        expect(easeInOutBounce(1)).toBeCloseTo(1, 3);
      });
    });
  });
});
