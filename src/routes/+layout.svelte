<script lang="ts">
	import '../app.css';

	const routes = [
		{
			title: 'hover',
			url: '/hover'
		},
		{
			title: 'copy',
			url: '/copy'
		},
		{
			title: 'fullscreen',
			url: '/fullscreen'
		},
		{
			title: 'clickOutside',
			url: '/clickOutside'
		}
	];
</script>

<header class="h-14 flex items-center border-b">
	<div class="max-w-7xl mx-auto flex-1">Svelte USE</div>
</header>

<div class="max-w-7xl mt-2 mx-auto">
	<section class="flex">
		<aside class="w-64">
			<ul>
				{#each routes as route}
					<li>
						<a
							class="pl-4 py-[2px] block border-l border-l-stone-100 hover:border-l-stone-400 first-letter:uppercase"
							href={route.url}
						>
							{route.title}</a
						>
					</li>
				{/each}
			</ul>
		</aside>

		<div class="flex-1">
			<slot />
		</div>
	</section>
</div>
