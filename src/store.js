const PERSON_DEFAULT_VALUE = false;

const store = {
  debug: true,
  state: {
    person: PERSON_DEFAULT_VALUE,
  },
  setPersonSelection (person) {
    this.debug && console.log('setPersonSelection: ', person);
    this.state.person = person;
  },
  clearPersonSelection () {
    this.debug && console.log('clearPersonSelection: ', this.state.person);
    this.state.person = PERSON_DEFAULT_VALUE;
  },
};

export default store;
