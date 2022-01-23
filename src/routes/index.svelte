<script lang="ts">
	import { fullscreen } from '$lib';

	let el: HTMLDivElement;

	const onFullscreenChange = () => {
		console.log(document.fullscreenElement === el);
	};
</script>

<div
	bind:this={el}
	class="h-10 w-10 bg-red-100"
	use:fullscreen
	on:fullscreenchange={onFullscreenChange}
>
	<div class="bg-blue-50" on:click|stopPropagation>hello</div>
</div>
