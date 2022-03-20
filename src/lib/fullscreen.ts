import type { Action } from './types';

type Fullscreen = {
	(node: HTMLElement): ReturnType<Action<any>>;
};

export const fullscreen: Fullscreen = (node) => {
	const click = () => {
		if (document.fullscreenElement === node) {
			document.exitFullscreen();
		} else {
			node.requestFullscreen();
		}
	};

	node.addEventListener('click', click);

	return {
		destroy() {
			node.removeEventListener('click', click);
		}
	};
};
