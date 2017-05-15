<template>
	<div>
		<h1>Selections:</h1>
		<h2>You have selected {{  }}</h2>
	</div>
</template>

<script>
import { store } from '../store';

export default {
	name: 'Selections',
	data() {
		return {
			sharedState: {
			store,
			},
		};
	},
};
</script>
