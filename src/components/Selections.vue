<template>
	<div>
		<h1>Selections:</h1>
		<h2>You have selected {{ pie }}!</h2>
	</div>
</template>

<script>
import { store } from '../store';

export default {
	name: 'Selections',
	computed: {
		pie() {
			return this.$store.getters.selectedPie;
		}
	}
};
</script>
