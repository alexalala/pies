import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const PERSON_DEFAULT_VALUE = false;
const PIE_DEFAULT_VALUE = false;

export const store = new Vuex.Store({
	state: {
		selectedPerson: PERSON_DEFAULT_VALUE,
		selectedPie: PIE_DEFAULT_VALUE,
		people: [
			{ name: 'Alex', currentPie: 'poo' },
			{ name: 'Ant', currentPie: '' },
			{ name: 'Andy', currentPie: '' },
			{ name: 'Charlie', currentPie: '' },
			{ name: 'George', currentPie: '' },
			{ name: 'Harry', currentPie: '' },
			{ name: 'Kara', currentPie: '' },
			{ name: 'Karl', currentPie: '' },
			{ name: 'Katja', currentPie: '' },
			{ name: 'Matt', currentPie: '' },
			{ name: 'Matthew', currentPie: '' },
			{ name: 'Neil', currentPie: '' },
			{ name: 'Ollie', currentPie: '' },
			{ name: 'Rob', currentPie: '' },
			{ name: 'Rupert', currentPie: '' },
			{ name: 'Steph', currentPie: '' },
			{ name: 'Toby', currentPie: '' },
        ],
        pies: [
			{ name: 'The Classic Aussie' },
			{ name: 'The Match' },
			{ name: 'The Aussie Deluxe' },
			{ name: 'The Pom' },
			{ name: 'The Grill' },
			{ name: 'The Flaming Galah' },
			{ name: 'The Bondi' },
			{ name: 'The Greek' },
			{ name: 'The Italian' },
			{ name: 'Special - ask Karl what it is!' },
        ],
	},
	getters: {
		people: state => {
			return state.people;
		},
		selectedPerson: state => {
			return state.selectedPerson;
		},
		pies: state => {
			return state.pies;
		}
	},
	mutations: {
		applyPersonSelection: (state, name) => {
			const person = state.people.find(people => people.name === name)
			state.selectedPerson = person;
		},
		applyPieSelection: (state, pie) => {
			state.selectedPie = pie;
		},

	},
});