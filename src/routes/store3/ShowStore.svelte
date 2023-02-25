<script lang="ts">
import { chatData } from './stores';
import { showData } from './stores';
import { arrData } from './stores';
//type
type IChatItem = {
	name : string,
}
export let chatDataValue: IChatItem = {name: ""}, arrDataValue: any[]= [];

chatData.subscribe(value => {
	chatDataValue = value;
	console.log(chatDataValue.name);
});
//showData
showData.subscribe(value => {
	//@ts-ignore
	chatDataValue = value;
	console.log(chatDataValue.name);
});
arrData.subscribe(value => {
	arrDataValue = value;
	console.log(arrDataValue);
});
</script>

<!--MarkUp  -->
<div>
	<h3>ShowStore</h3>
	<p>name : {chatDataValue.name}
	</p>
</div>
