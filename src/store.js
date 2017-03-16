const PERSON_DEFAULT_VALUE = false;
const PIE_DEFAULT_VALUE = false;

const store = {
  debug: true,
  state: {
    person: PERSON_DEFAULT_VALUE,
    pie: PIE_DEFAULT_VALUE,
  },
  setPersonSelection(person) {
    if (this.debug) {
      console.log('setPersonSelection: ', person);
    }
    this.state.person = person;
  },
  clearPersonSelection() {
    if (this.debug) {
      console.log('clearPersonSelection: ', this.state.person);
    }
    this.state.person = PERSON_DEFAULT_VALUE;
  },
  setPieSelection(pie) {
    if (this.debug) {
      console.log('setPieSelection: ', pie);
    }
    this.state.pie = pie;
  },
  clearPieSelection() {
    if (this.debug) {
      console.log('clearPieSelection: ', this.state.pie);
    }
    this.state.pie = PIE_DEFAULT_VALUE;
  },
};

export default store;
