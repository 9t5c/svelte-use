<script lang="ts">
	import { hover } from '$lib/hover';

	let isHover: boolean = false;
</script>

<div use:hover on:hover={({ detail }) => (isHover = detail)}>
	{isHover ? 'hovered' : 'no hover'}
</div>
