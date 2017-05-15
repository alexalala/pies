<template>
	<div id="landing">
		<h1>Welcome to the {{ msg }}!</h1>

		<p>Can I take your name please?</p>

		<select v-model="selected" @change="updatePerson">
			<option :value="person.name" v-for="person in people">{{ person.name }}</option>
		</select>
		<button @click="onDone()">
			Next
		</button>
	</div>
</template>

<script>
import { store } from '../store';
import { mapState } from 'vuex';

export default {
	name: 'landing',
	data() {
		return {
			msg: 'Neontribe Pie Selector',
			store,
			selected: ''
		}
	},
	methods: {
		onDone() {
			console.log(this.$store.getters.selectedPerson);
			console.log(this.selected);
			// now we are done we should redirect to the next step
			this.$router.push('stickortwist');
		},
		updatePerson() {

			this.$store.commit('applyPersonSelection', this.selected);
		}
	},
	computed: {
		people: {
			get() {
				return this.$store.getters.people;
			}
		},
		personIsSelected: {
			get() {
				return this.$store.getters.selectedPerson;
			}
		}
	}
};
</script>
