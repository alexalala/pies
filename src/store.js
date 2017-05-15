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
			{ name: 'Alex', currentPie: '', image: '../assets/people/Alex.jpg' },
			{ name: 'Ant', currentPie: '', image: '../assets/people/Ant.png' },
			{ name: 'Andy', currentPie: '', image: '../assets/people/Andy.jpg' },
			{ name: 'Charlie', currentPie: '', image: '../assets/people/Charlie.jpg' },
			{ name: 'George', currentPie: '', image: '../assets/people/George.jpg' },
			{ name: 'Harry', currentPie: '', image: '../assets/people/Harry.jpg' },
			{ name: 'Kara', currentPie: '', image: '../assets/people/Kara.jpg' },
			{ name: 'Karl', currentPie: '', image: '../assets/people/Karl.jpg' },
			{ name: 'Katja', currentPie: '', image: '../assets/people/Katja.png' },
			{ name: 'Matt', currentPie: '', image: '../assets/people/Matt.jpg' },
			{ name: 'Matthew', currentPie: '', image: '../assets/people/MattW.jpg' },
			{ name: 'Neil', currentPie: '', image: '../assets/people/Neil.jpg' },
			{ name: 'Ollie', currentPie: '', image: '../assets/people/Ollie.jpg' },
			{ name: 'Rob', currentPie: '', image: '../assets/people/Rob.jpg' },
			{ name: 'Rupert', currentPie: '', image: '../assets/people/Rupert.jpg' },
			{ name: 'Steph', currentPie: '', image: '../assets/people/Steph.jpg' },
			{ name: 'Toby', currentPie: '', image: '../assets/people/Toby.jpg' },
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
        setPersonSelection(person) {
		    this.state.selectedPerson = person;
		},
		setPieSelection(pie) {
		    this.state.selectedPie = pie;
		},
	},
	getters: {
		people: state => {
			return state.people;
		}
	},
	mutations: {
		applyPieSelection: (state, person) => {
			var personObj =  state.people.filter(function(person) {
				return store.getters.people == person;
			})[0];
			console.log(personObj);
		}
	}
});