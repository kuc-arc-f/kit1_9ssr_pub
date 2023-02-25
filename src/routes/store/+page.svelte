<svelte:head>
	<title>Test</title>
	<meta name="description" content="About this app" />
</svelte:head>

<script lang="ts">
import { count } from './stores';
import Decrementer from './Decrementer.svelte';
import Incrementer from './Incrementer.svelte';
import Resetter from './Resetter.svelte';
//
export let countValue = 0;
count.subscribe(value => {
	countValue = value;
});
</script>

<!-- MarkUp -->
<div class="text-column">
	<h1>Test</h1>
	<hr />
	<h1>The count is {countValue}</h1>
	<Decrementer />
	<Incrementer />
	<Resetter />
	<hr />

</div>
