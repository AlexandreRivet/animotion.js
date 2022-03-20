import { functions } from './penner';
import { EasingFunction } from './utils';

export const parseEasing = (easing: string): EasingFunction => {
  const name = easing.split('(')[0];
	switch(name) {
		case 'cubicBezier': return t => t;
		default: functions[name];
	}
};