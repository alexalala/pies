<template>
	<div>
		<h1>Pie Master</h1>
		<p>You are the chosen one, the master of the pies. Here are the current selections: </p>

		<table>
			<tr v-for="selection in selectionsData">
				<td>{{ selection.name }}</td><td class="highlighted">{{ selection.pie }}</td>
			</tr>
		</table>
	</div>
</template>

<script>
import { store } from '../store';

export default {
	name: 'PieMaster',
	data() {
		return {
			selectionsData: []
		};
	},
	methods: {
		getSelections(){
			// prepare and send the read request
			var xhr = new XMLHttpRequest();

			// The server URL can be changed in the store
			xhr.open('GET', this.$store.getters.serverURL+'/getSelections.php', true);

			var setSelectionsFunc = this.setSelections;

			xhr.onload = function () {
			  	var response = xhr.responseText;
			  	var parsed = JSON.parse(response);

			  	// The parsed json needs to be put into an array so that the for loop will work
			  	var tempSelections = [];

			  	parsed.forEach (function(selection) {
			  		tempSelections.push({name: selection.name, pie: selection.pie});
			  	});

			  	// sort names for readability
			  	tempSelections.sort((a, b) => {
			  		if (a.name < b.name){
			  			return -1;
			  		} else if (a.name > b.name){
			  			return 1;
			  		} else {
			  			return 0;
			  		}
			  	});

			  	setSelectionsFunc(tempSelections);
			}

			xhr.addEventListener('error', function(e){
				console.log('Hmmm, an error occurred. Status: '+e.originalTarget.status);
			});

			xhr.send('');
		},
		setSelections(newSelections){
			this.selectionsData = newSelections;
		}
	},
	beforeMount(){
		// run on page load
		this.getSelections();
	}
};
</script>
