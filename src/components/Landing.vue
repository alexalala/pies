<template>
	<div id="landing">
		<h1>Welcome to the {{ title }}!</h1>

		<p>Can I take your name please?</p>

		<select v-model="selected" @change="updatePerson">
			<option :value="person.name" v-for="person in people">{{ person.name }}</option>
		</select>


		<button @click="onDone()">
			Next
		</button>
		<br>

		<p class="warningText" v-show="warningText">{{ warningText }}</p>

		<img class="user" v-if="selected" :src="personImage">
		
		<p v-if="selected">Welcome {{ selected }}!</p>
	</div>
</template>

<script>
import { store } from '../store';

export default {
	name: 'landing',
	data() {
		return {
			//sets the title
			title: 'Neontribe Pie Selector',
			//when person is selected in dropdown, name is set here
			selected: '',
			// stores warning text to be displayed when name not chosen
			warningText: ''
		}
	},
	methods: {
		onDone() {
			if (this.$store.getters.selectedPerson != ""){
				//go to stick or twist page
				this.$router.push('stickortwist');
			} else {
				// warn against not selecting a name
				this.warningText = 'You must select a name!';
			}
		},
		updatePerson() {
			// reset warning text
			this.warningText = '';
			//finds the object of the selected person in the people object and sets it to selected person in store
			this.$store.commit('applyPersonSelection', this.selected);
		}
	},
	computed: {
		people() {
			//gets array of people objects
			return this.$store.getters.people;
		},
		personImage() {
			return this.$store.getters.selectedPersonImage;
		}
	}
};
</script>
