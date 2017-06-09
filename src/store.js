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
			{ name: 'Alex', currentPie: 'poo', image: require('./assets/people/Alex.jpg') },
			{ name: 'Ant', currentPie: '', image: require('./assets/people/Ant.png') },
			{ name: 'Andy', currentPie: '', image: require('./assets/people/Andy.jpg') },
			{ name: 'Charlie', currentPie: '', image: require('./assets/people/Charlie.jpg') },
			{ name: 'George', currentPie: '', image: require('./assets/people/George.jpg') },
			{ name: 'Harry', currentPie: '', image: require('./assets/people/Harry.jpg') },
			{ name: 'Kara', currentPie: '', image: require('./assets/people/Kara.jpg') },
			{ name: 'Karl', currentPie: '', image: require('./assets/people/Karl.jpg') },
			{ name: 'Katja', currentPie: '', image: require('./assets/people/Katja.png') },
			{ name: 'Matt', currentPie: '', image: require('./assets/people/Matt.jpg') },
			{ name: 'Matthew', currentPie: '', image: require('./assets/people/MattW.jpg') },
			{ name: 'Neil', currentPie: '', image: require('./assets/people/Neil.jpg') },
			{ name: 'Ollie', currentPie: '', image: require('./assets/people/Ollie.jpg') },
			{ name: 'Rob', currentPie: '', image: require('./assets/people/Rob.jpg') },
			{ name: 'Rupert', currentPie: '', image: require('./assets/people/Rupert.jpg') },
			{ name: 'Steph', currentPie: '', image: require('./assets/people/Steph.jpg') },
			{ name: 'Toby', currentPie: '', image: require('./assets/people/Toby.jpg') },
        ],
        pies: [
			{ name: 'The Classic Aussie', desc: 'lean beef mince, onion and gravy pie' },
			{ name: 'The Match', desc: 'chunky beef, onion, stout and gravy pie' },
			{ name: 'The Aussie Deluxe', desc: 'chunky beef, onion, bacon, gravy and cheese pie' },
			{ name: 'The Pom', desc: 'creamy garlic and mushroom pie' },
			{ name: 'The Grill', desc: 'thai chicken satay with peanut sauce pie' },
			{ name: 'The Flaming Galah', desc: 'spicy beef panang curry pie (can you handle it?!)' },
			{ name: 'The Bondi', desc: 'classic seafood chowder pie (salmon, cod, smoked haddock and king prawns' },
			{ name: 'The Greek', desc: 'spinach with roasted red pepper, onion, garlic, black olive and feta pie (V)' },
			{ name: 'The Italian', desc: 'caramelised balsamic red onion chutney, goats cheese, pine nuts and roasted vine tomato pie (V)' },
			{ name: 'The Daily Special', desc: 'delicious pie. To find out what the flavour is, check out their twitter <a target="_blank" href="https://twitter.com/Flaming_Galahs">here</a> or ask Karl!' },
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
		},
		selectedPie: state => {
			return state.selectedPie;
		},
		selectedPersonImage: state => state.selectedPerson.image
	},
	mutations: {
		applyPersonSelection: (state, name) => {
			const person = state.people.find(people => people.name === name)
			state.selectedPerson = person;
		},
		applyPieSelection: (state, pie) => {
			const findPie = state.pies.find(pies => pies.name === pie)
			state.selectedPie = findPie;
		},

	},
});