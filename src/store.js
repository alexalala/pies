import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const PERSON_DEFAULT_VALUE = false;
const PIE_DEFAULT_VALUE = false;

export const store = new Vuex.Store({
  state: {
    selectedPerson: PERSON_DEFAULT_VALUE,
    selectedPie: PIE_DEFAULT_VALUE,
    people: [
      {
        name: "Alex",
        currentPie: "",
        image: require("./assets/people/alex.jpg")
      },
      {
        name: "Amanda",
        currentPie: "",
        image: require("./assets/people/Amanda.jpg")
      },
      {
        name: "Andy",
        currentPie: "",
        image: require("./assets/people/andy.jpg")
      },
      {
        name: "Charlie",
        currentPie: "",
        image: require("./assets/people/Charlie.jpg")
      },
      {
        name: "Ed",
        currentPie: "",
        image: require("./assets/people/ed.jpg")
      },
      {
        name: "George",
        currentPie: "",
        image: require("./assets/people/George.jpg")
      },
      {
        name: "Harry",
        currentPie: "",
        image: require("./assets/people/Harry.jpg")
      },
      {
        name: "Holly",
        currentPie: "",
        image: require("./assets/people/holly.jpg")
      },
      {
        name: "Kara",
        currentPie: "",
        image: require("./assets/people/Kara.jpg")
      },
      {
        name: "Karl",
        currentPie: "",
        image: require("./assets/people/Karl.jpg")
      },
      {
        name: "Kat",
        currentPie: "",
        image: require("./assets/people/Kat.jpg")
      },
      {
        name: "Katja",
        currentPie: "",
        image: require("./assets/people/katja.jpg")
      },
      {
        name: "Matt",
        currentPie: "",
        image: require("./assets/people/Matt.jpg")
      },
      {
        name: "Neil",
        currentPie: "",
        image: require("./assets/people/Neil.jpg")
      },
      {
        name: "Nick",
        currentPie: "",
        image: require("./assets/people/Nick.jpg")
      },
      {
        name: "Ollie",
        currentPie: "",
        image: require("./assets/people/ollie.jpg")
      },
      {
        name: "Rob",
        currentPie: "",
        image: require("./assets/people/Rob.jpg")
      },
      {
        name: "Rose",
        currentPie: "",
        image: require("./assets/people/Rose_new.jpg")
      },
      {
        name: "Rupert",
        currentPie: "",
        image: require("./assets/people/rupert.png")
      },
      {
        name: "Steve",
        currentPie: "",
        image: require("./assets/people/Steve.jpg")
      },
      {
        name: "Toby",
        currentPie: "",
        image: require("./assets/people/Toby.jpg")
      }
    ],
    pies: [
      {
        name: "The Classic Aussie",
        desc: "lean beef mince, onion and gravy pie"
      },
      { name: "The Match", desc: "chunky beef, onion, stout and gravy pie" },
      {
        name: "The Aussie Deluxe",
        desc: "chunky beef, onion, bacon, gravy and cheese pie"
      },
      { name: "The Pom", desc: "creamy garlic and mushroom pie" },
      { name: "The Grill", desc: "thai chicken satay with peanut sauce pie" },
      {
        name: "The Flaming Galah",
        desc: "spicy beef panang curry pie (can you handle it?!)"
      },
      {
        name: "The Bondi",
        desc:
          "classic seafood chowder pie (salmon, cod, smoked haddock and king prawns"
      },
      {
        name: "The Greek",
        desc:
          "spinach with roasted red pepper, onion, garlic, black olive and feta pie (V)"
      },
      {
        name: "The Italian",
        desc:
          "caramelised balsamic red onion chutney, goats cheese, pine nuts and roasted vine tomato pie (V)"
      },
      {
        name: "The Daily Special",
        desc:
          'delicious pie. To find out what the flavour is, check out their twitter <a target="_blank" href="https://twitter.com/Flaming_Galahs">here</a> or ask Karl!'
      }
    ]
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
    selectedPersonImage: state => {
      return state.selectedPerson.image;
    },
    serverURL: () => {
      return "http://localhost:80/backend";
    }
  },
  mutations: {
    applyPersonSelection: (state, name) => {
      const person = state.people.find(people => people.name === name);
      state.selectedPerson = person;
    },
    applyPieSelection: (state, pie) => {
      const findPie = state.pies.find(pies => pies.name === pie);
      state.selectedPie = findPie;
    }
  }
});
