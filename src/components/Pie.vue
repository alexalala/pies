<template>
	<div class="pie">
		<h1>Hello, {{ person.name }}!</h1>
		<p>Which pie would you like?</p>

		<table>
			<tr v-for="pie in pies">
				<td><input type="radio" :value="pie.name" name="pies" v-model="selected" @change="changeSelection()"></td>
				<td><label for="pies"><strong>{{ pie.name }}</strong> - <span v-html="pie.desc"></span></label></td>
			</tr>
		</table>

		<p v-show="selected">Oh you fancy {{ selected }}, do you {{ person.name }}?</p>
		<p class="warningText" v-show="warningText">{{ warningText }}</p>

		<button @click="back()">Back</button>
		<button @click="onSubmit()">Submit</button>
	</div>
</template>

<script>
import { store } from '../store';

export default {
	name: 'pie',
	data() {
		return {
			//when pie is selected, it is set here
			selected: '',
			// stores warning text to be displayed when pie not chosen
			warningText: ''
		}
	},
	methods: {
		back() {
			//go back to previous page
			this.$router.push('stickortwist');
		},
		onSubmit() {
			if (this.selected != ''){
				//applies selected pie to the store
				this.$store.commit('applyPieSelection', this.selected);
				//go through to selections page
				this.$router.push('selections');
			} else {
				// warn against not selecting a pie
				this.warningText = 'You must select a pie!';
			}
		},
		changeSelection() {
			this.warningText = '';
		}
	},
	computed: {
		person() {
			//get selected person object
			return this.$store.getters.selectedPerson;
		},
		pies() {
			//get list of pies
			return this.$store.getters.pies;
		}
	}
};
</script>
