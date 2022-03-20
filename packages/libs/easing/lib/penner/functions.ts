import { EasingFunction } from '../utils';

import { easeInBack, easeOutBack, easeInOutBack } from './back';
import { easeInBounce, easeOutBounce, easeInOutBounce } from './bounce';
import { easeInCirc, easeOutCirc, easeInOutCirc } from './circ';
import { easeInCubic, easeOutCubic, easeInOutCubic } from './cubic';
import { easeInElastic, easeOutElastic, easeInOutElastic } from './elastic';
import { easeInExpo, easeOutExpo, easeInOutExpo } from './expo';
import { easeInQuad, easeOutQuad, easeInOutQuad } from './quad';
import { easeInQuart, easeOutQuart, easeInOutQuart } from './quart';
import { easeInQuint, easeOutQuint, easeInOutQuint } from './quint';
import { easeInSine, easeOutSine, easeInOutSine } from './sine';


export const functions: Record<string, EasingFunction> = {
  linear: t => t,
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
};