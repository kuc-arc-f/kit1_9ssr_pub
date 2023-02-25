<svelte:head>
	<title>Test</title>
	<meta name="description" content="About this app" />
</svelte:head>

<script lang="ts">
import { count } from './stores';
import { chatData } from './stores';
import { arrData } from './stores';
import { showData } from './stores';
//
import AddStore from './AddStore.svelte';
import ShowStore from './ShowStore.svelte';
//type
type IChatItem = {
	name : string,
}
//
export let chatDataValue: IChatItem = {name: ""}, arrDataValue: any[]= [],
showDataValue = {};
//
chatData.subscribe(value => {
	chatDataValue = value;
	console.log(chatDataValue.name);
});
arrData.subscribe(value => {
	arrDataValue = value;
	console.log(arrDataValue);
});
const setShowIetm = function(id: number) {
console.log("setShowIetm=", id);
	if(arrDataValue.length > 0) {
		const rows = arrDataValue.filter(item => (item.id === id));
//console.log(arrDataValue[id]);
//console.log(rows[0]);
		const obj = {name: rows[0].name};
console.log(obj);
		showData.update(value => obj);
	}
}
</script>

<!-- MarkUp -->
<div class="text-column">
	<h1>Store2</h1>
	<hr />
	<h1>The count is {chatDataValue.name}</h1>
	<AddStore />
	<hr />
	{#each arrDataValue as item}
	<div>
		<h3>{item.name}</h3>
		<p>ID: {item.id}</p>
		<button on:click={setShowIetm(item.id)} class="btn btn-primary my-2">Show
		</button>
		<hr />
	</div>
	{/each}	
	<hr />
	<ShowStore />
</div>
