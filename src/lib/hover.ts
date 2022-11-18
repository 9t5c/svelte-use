import type { Action } from './types';

type Hover = {
	(node: HTMLElement): ReturnType<Action<any>>;
};

export const hover: Hover = (node) => {
	const handleMouseOver = () => {
		node.dispatchEvent(new CustomEvent('hover', { detail: true }));
	};
	const handleMouseOut = () => {
		node.dispatchEvent(new CustomEvent('hover', { detail: false }));
	};

	node.addEventListener('mouseover', handleMouseOver);
	node.addEventListener('mouseout', handleMouseOut);

	return {
		destroy() {
			node.removeEventListener('mouseover', handleMouseOver);
			node.removeEventListener('mouseout', handleMouseOut);
		}
	};
};
