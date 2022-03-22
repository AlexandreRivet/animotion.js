import { bezier } from '../bezier';
import { functions, linear } from '../penner';
import { steps } from '../steps';
import { EasingFunction } from './utils';

export const parseEasing = (easing: string): EasingFunction => {
  const parsing = /^([a-zA-Z]+)(\((.+)\))*$/.exec(easing);
  if (!parsing || !parsing[1]) {
    throw new Error('Easing parsing failed');
  }

  const name = parsing[1];
  const parameters = (parsing[3] ?? '').split(',')
    .map((param) => {
        const trimmed = param.trim();
        const float = parseFloat(trimmed);
        return Number.isNaN(float) ? trimmed : float;
    });
	switch(name) {
		case 'cubicBezier': return bezier.apply(null, parameters as [number, number, number, number]);
    case 'steps': return steps.apply(null, parameters as [number, string]);
		default: {
      if (!functions[name]) {
        throw new Error('Unknown easing');
      }
      return functions[name];
    }
	}
};
