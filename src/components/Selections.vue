<template>
	<div>
		<h1>Selections:</h1>
		<p>You have selected {{ pie.name }} - <span v-html="pie.desc">{{ pie.desc }}</span></p>
		<p>Sounds delicious!</p>
		<button>Save selection</button>
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
