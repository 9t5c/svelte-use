import type { Action } from './types';

type ClickOutside = {
	(node: HTMLElement): ReturnType<Action<any>>;
};

export const clickOutside: ClickOutside = (node) => {
	const click = (event: MouseEvent) => {
		if (event.target instanceof Element && !node.contains(event.target)) {
			node.dispatchEvent(new CustomEvent('outclick'));
		}
	};

	document.addEventListener('click', click, true);

	return {
		destroy() {
			document.removeEventListener('click', click, true);
		}
	};
};
