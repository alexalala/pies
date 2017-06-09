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

		<img class="user" v-if="selected" :src="'./src/assets/people/' + selected + '.jpg'">
		
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
			selected: ''
		}
	},
	methods: {
		onDone() {
			//go to stick or twist page
			this.$router.push('stickortwist');
		},
		updatePerson() {
			//finds the object of the selected person in the people object and sets it to selected person in store
			this.$store.commit('applyPersonSelection', this.selected);
		}
	},
	computed: {
		people() {
			//gets array of people objects
			return this.$store.getters.people;
		}
	}
};
</script>
