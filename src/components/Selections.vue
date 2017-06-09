<template>
	<div>
		<h1>Selections:</h1>
		<p>You have selected {{ pie.name }} - {{ pie.desc }}</p>
		<p>Sounds delicious!</p>
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
