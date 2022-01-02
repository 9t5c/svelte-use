<script lang="ts">
	import { copy } from '$lib';

	let text = '';
</script>

<input bind:value={text} />
<button use:copy={text}>click copy</button>
