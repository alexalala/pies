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
		<img class="user"
		<p v-if="selected">Welcome {{ selected }}!</p>
	</div>
</template>

<script>
import { store } from '../store';
import { mapMutations } from 'vuex'

export default {
	name: 'landing',
	data() {
		return {
			msg: 'Neontribe Pie Selector',
			selected: ''
		}
	},
	methods: {
		onDone() {
			this.$router.push('stickortwist');
		},
		updatePerson() {
			this.$store.commit('applyPersonSelection', this.selected);
		}
	},
	computed: {
		people() {
			return this.$store.getters.people;
		},
		personIsSelected() {
			return this.$store.getters.selectedPerson;
		},
		personsPie() {
			return this.$store.getters.personsPie;
		}
	}
};
</script>
