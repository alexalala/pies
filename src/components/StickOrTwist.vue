<template>
	<div>
		<h1>It's Decision Time, {{ person.name }}.</h1>
		<p>So here is where the really big decisions are made...</p>

		<!-- if pie is selected -->
		<div v-if="person.pie">
			<p>Your current choice of pie is <strong>{{ person.currentPie }}</strong>.</p>
			<p>You will now have two options. Your selection here may change the course of your life forever so please make it wisely.</p>
			<p>Would you like to stick with your previously selected pie? Or would you like to twist and change it for another?</p>
			<button @click="stickIt()">stick</button>
			<button @click="twistIt()">twist</button>
		</div>

		<!-- if no pie is selected -->
		<div v-else>
			<p>...although it looks like you don't have a pie selected yet!</p>
			<p>Click on 'Select Pie' to make your choice.</p>
			<button @click="twistIt()">Select Pie</button>
		</div>	
	</div>
</template>

<script>
import { store } from '../store';

export default {
	name: 'stickortwist',
	methods: {
		stickIt() {
			//go to selections page
			this.$router.push('selections');
		},
		twistIt() {
			//go to pie page
			this.$router.push('pie');
		},
	},
	computed: {
		person() {
			//get selected person object
			return this.$store.getters.selectedPerson;
		},
	}
};
</script>
