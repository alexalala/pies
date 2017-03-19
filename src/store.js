const PERSON_DEFAULT_VALUE = false;
const PIE_DEFAULT_VALUE = false;

const store = {
  debug: true,
  state: {
    person: PERSON_DEFAULT_VALUE,
    pie: PIE_DEFAULT_VALUE,
  },
  setPersonSelection(person) {
    this.state.person = person;
  },
  clearPersonSelection() {
    this.state.person = PERSON_DEFAULT_VALUE;
  },
  setPieSelection(pie) {
    this.state.pie = pie;
  },
  clearPieSelection() {
    this.state.pie = PIE_DEFAULT_VALUE;
  },
};

export default store;
