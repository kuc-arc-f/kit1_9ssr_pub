<svelte:head>
	<title>Test</title>
	<meta name="description" content="About this app" />
</svelte:head>

<script lang="ts">
//import LibDbSession from '$lib/LibDbSession';
//
const test1 = async function () {
	try {
	} catch (e) {
      console.error(e);
    }
}
</script>

<!-- MarkUp -->
<div class="text-column">
	<h1>Test</h1>
	<hr />
	<button on:click={test1} class="btn btn-primary my-2">test1
	</button>

</div>
