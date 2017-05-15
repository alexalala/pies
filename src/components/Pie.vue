<template>
	<div class="pie">
		<h1>Hello, {{ sharedState.store.state.person }}!</h1>
		<p>Which pie would you like?</p>
		<table>
			<tr v-for="pie in privateState.pies">
				<td><input type="radio" :value="pie.name" name="pies" v-model="privateState.selection"></td>
				<td><label for="pies">{{ pie.name }}</label></td>
			</tr>
		</table>
		<p v-show="privateState.selection">Oh you fancy {{ privateState.selection }} do you {{ sharedState.store.state.person }}?</p>
		<br>
		<button @click="back()">Back</button>
		<button @click="onSubmit()">Submit</button>
	</div>
</template>

<script>

export default {
	name: 'pie',
	methods: {
		back() {
			this.$router.push('stickortwist');
		},
		onSubmit() {
			this.sharedState.store.setPieSelection(this.$data.privateState.selection);
			this.$router.push('selections');
		},
	},
};
</script>
