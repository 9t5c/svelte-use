declare namespace svelte.JSX {
	interface HTMLProps<T extends EventTarget> {
		onusecopy?: (event: CustomEvent<string>) => void;
		onusecopyerror?: (event: CustomEvent<string>) => void;
		onoutclick?: (event: CustomEvent) => void;
	}
}
