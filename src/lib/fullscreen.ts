import type { Action } from './types';

export function fullscreen(node: HTMLElement): ReturnType<Action<any>> {
	const click = () => {
		if (document.fullscreenElement === node) {
			document.exitFullscreen();
		} else {
			node.requestFullscreen();
		}
	};

	node.addEventListener('click', click);

	return {
		update() {},
		destroy() {
			node.removeEventListener('click', click);
		}
	};
}
