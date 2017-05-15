<template>
	<div id="landing">
		<h1>Welcome to the {{ msg }}!</h1>

		<p>Can I take your name please?</p>

		<select>
			<option :value="person.name" v-for="person in people" @input="updatePerson">{{ person.name }}</option>
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
			store
		}
	},
	methods: {
		getSelectedUserPicture() {
			const person = this.$data.privateState.selection;
			return peopleImages[person] || peopleImages.default;
		},
		getCurrentPieSelection() {
			const pieChoice = this.$data.privateState.selection;
			return currentPie[pieChoice] || currentPie.default;
		},
		onDone() {
			this.$store.commit('applyPieSelection');
			// now we are done we should redirect to the next step
			this.$router.push('stickortwist');
		},
		updatePerson(event) {
			this.$store.dispatch('updatePerson', event.target.person.name);
		}
	},
	computed: {
		people: {
			get() {
				return this.$store.getters.people;
			},
			set(person) {
				this.$store.dispatch('updatePerson', person);
			}
		},
	}
};
</script>
