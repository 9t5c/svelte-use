/**
 * Can be made globally available by placing this
 * inside `global.d.ts` and removing `export` keyword
 */
export type Action<T> = (
	node: HTMLElement,
	parameters: T
) => {
	update?: (parameters: T) => void;
	destroy?: () => void;
};
