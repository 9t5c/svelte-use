<script lang="ts">
	import { clickOutside } from '$lib';

	let el: HTMLDivElement;

	const onClick = (e: Event) => {
		console.log(e);
	};
</script>

<div use:clickOutside on:outclick={() => console.log('click outside')}>
	<div class="bg-blue-200">blue</div>
	<div class="bg-red-200">red</div>
</div>
