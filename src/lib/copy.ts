import type { Action } from './types';

type Copy = {
	(node: HTMLElement, text: string): ReturnType<Action<string>>;
};

export const copy: Copy = (node, text) => {
	const click = async () => {
		if (navigator.clipboard) {
			try {
				await navigator.clipboard.writeText(text);
				node.dispatchEvent(new CustomEvent('usecopy', { detail: text }));
			} catch (e) {
				node.dispatchEvent(
					new CustomEvent('usecopyerror', { detail: 'your browser no support Clipboard API' })
				);
			}
		} else {
			const isRTL = document.documentElement.getAttribute('dir') === 'rtl';
			const fakeElement: HTMLTextAreaElement = document.createElement('textarea');
			fakeElement.style.fontSize = '12pt'; // prevent zooming on iOS
			fakeElement.style.position = 'absolute';
			fakeElement.style[isRTL ? 'right' : 'left'] = '-100vw';
			fakeElement.style.top = '-100vh';
			fakeElement.style.opacity = '0';
			fakeElement.setAttribute('readonly', '');
			fakeElement.value = text;
			document.body.appendChild(fakeElement);
			fakeElement.select();
			fakeElement.setSelectionRange(0, text.length);
			document.execCommand('copy');

			node.dispatchEvent(new CustomEvent('usecopy', { detail: text }));
			document.body.removeChild(fakeElement);
		}
	};

	node.addEventListener('click', click, true);

	return {
		update(newText: string) {
			text = newText;
		},
		destroy() {
			node.removeEventListener('click', click, true);
		}
	};
};
