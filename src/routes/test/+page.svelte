<svelte:head>
	<title>Test</title>
	<meta name="description" content="About this app" />
</svelte:head>

<script lang="ts">
import { goto } from '$app/navigation';
import LibAuth from '$lib/LibAuth';
/**
 * start proc
 * @param
 *
 * @return
 */ 
const startProc = async function () {
	try {
		const validLogin: boolean = await LibAuth.validLogin();
//console.log("#test1=" + Date.now() );
//console.log("#validLogin=" + validLogin);
		if(!validLogin) {
			goto("/login");
		}
	} catch (e) {
      console.error(e);
    }	
}
console.log("#start: /test");
if(typeof(window) !== "undefined"){
	console.log("typeof=", typeof(window));
	startProc();
}
//
const test1 = async function () {
	try {
console.log("#test1=" + Date.now() );
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
