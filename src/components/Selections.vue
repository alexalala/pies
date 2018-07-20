<template>
	<div>
		<h1>Selections:</h1>
		<p>You have selected <span class="highlighted">{{ pie.name }}</span> - <span v-html="pie.desc">{{ pie.desc }}</span></p>
		<p>Sounds delicious!</p>
		<button @click="saveSelections()">Save selection</button>
		<p>{{ successText }}</p>
	</div>
</template>

<script>
import { store } from '../store';

export default {
	name: 'Selections',

	data() {
		return {
			// stores success text to be displayed on selection send
			successText: ''
		}
	},
	methods: {
		saveSelections(){

			var personName = this.$store.getters.selectedPerson.name;
			var pieName = this.$store.getters.selectedPie.name;

			// format the request data into an acceptable format
			var tempSelection = {
				name: personName,
				pie: pieName
			};

			// prepare and send the write request
			var xhr = new XMLHttpRequest();

			// TODO: This URL needs to be changed in production, should probably really be in some config file.
			xhr.open('POST', 'http://localhost:80/writeSelections.php', true);
			xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");

			var changeSuccessTextFunc = this.changeSuccessText;

			xhr.onload = function () {
			  	if (xhr.status == 200) {
			    	changeSuccessTextFunc("Your selection has been saved, "+personName+"!");
			  	} else if (xhr.status == 404) {
			  		changeSuccessTextFunc("Whoops, did someone forget to start up the backend server? HTTP response: 404");
				} else {
			  		changeSuccessTextFunc("Hmmm, this shouldn't happen. HTTP response: "+xhr.status.toString());
				}
			}

			xhr.addEventListener("error", function(e){
				changeSuccessTextFunc("Hmmm, an error occurred. Status: "+e.originalTarget.status+". Maybe check the server's running?");
			});

			xhr.send("json="+(JSON.stringify(tempSelection)));

			




		},
		changeSuccessText(newText){
			this.successText = newText;
		}
	},
	computed: {
		pie() {
			return this.$store.getters.selectedPie;
		}
	}
};
</script>
