<template>
  <div id="landing">
    <h1>Welcome to the {{ privateState.msg }}!</h1>

    <p v-if="privateState.selection">Hello {{ privateState.selection }}! Your current choice of pie is <strong>{{ getCurrentPieSelection() }}</strong>!</p>
    <p v-else>Can I take your name please?</p>

    <img class="user" v-if="privateState.selection" :src="getSelectedUserPicture()"><br><br>

    <select v-model="privateState.selection">
      <option :value="person.name" v-for="person in privateState.people">{{ person.name }}</option>
    </select>
    <button @click="onDone()">
      Next
    </button>
  </div>
</template>

<script>
import store from '../store';

const peopleImages = {
  Alex: require('../assets/people/Alex.jpg'),
  Ant: require('../assets/people/Ant.png'),
  Andy: require('../assets/people/Andy.jpg'),
  Charlie: require('../assets/people/Charlie.jpg'),
  George: require('../assets/people/George.jpg'),
  Harry: require('../assets/people/Harry.jpg'),
  Kara: require('../assets/people/Kara.jpg'),
  Karl: require('../assets/people/Karl.jpg'),
  Katja: require('../assets/people/Katja.png'),
  Matt: require('../assets/people/Matt.jpg'),
  Matthew: require('../assets/people/MattW.jpg'),
  Neil: require('../assets/people/Neil.jpg'),
  Ollie: require('../assets/people/Ollie.jpg'),
  Rob: require('../assets/people/Rob.jpg'),
  Rupert: require('../assets/people/Rupert.jpg'),
  Steph: require('../assets/people/Steph.jpg'),
  Toby: require('../assets/people/Toby.jpg'),
};

const currentPie = {
  Alex: 'The Aussie Deluxe',
  Ant: 'The Grill',
  Andy: '',
  Charlie: 'The Classic Aussie',
  George: 'The Aussie Deluxe',
  Harry: '',
  Kara: '',
  Karl: 'The Classic Aussie',
  Katja: '',
  Matt: '',
  Matthew: '',
  Neil: '',
  Ollie: 'The Grill',
  Rob: 'The Grill',
  Rupert: 'The Grill',
  Steph: 'The Match',
  Toby: 'The Flaming Galah',
};

export default {
  name: 'landing',
  data() {
    return {
      privateState: {
        people: [
          { name: 'Alex' },
          { name: 'Ant' },
          { name: 'Andy' },
          { name: 'Charlie' },
          { name: 'George' },
          { name: 'Harry' },
          { name: 'Kara' },
          { name: 'Karl' },
          { name: 'Katja' },
          { name: 'Matt' },
          { name: 'Matthew' },
          { name: 'Neil' },
          { name: 'Ollie' },
          { name: 'Rob' },
          { name: 'Rupert' },
          { name: 'Steph' },
          { name: 'Toby' },
        ],
        msg: 'Neontribe Pie Selector',
        selection: false,
      },
      sharedState: {
        store,
      },
    };
  },
  methods: {
    getSelectedUserPicture() {
      const person = this.$data.privateState.selection;
      return peopleImages[person] || peopleImages.default;
    },
    getCurrentPieSelection() {
      const pieChoice = this.$data.privateState.selection;
      return currentPie[pieChoice] || currentPie.default;
    },
    onDone() {
      // set the current person selected in our private state
      // into the public state
      this.sharedState.store.setPersonSelection(this.$data.privateState.selection);
      this.sharedState.store.setPieSelection(this.getCurrentPieSelection());
      // now we are done we should redirect to the next step
      this.$router.push('stickortwist');
    },
  },
};
</script>
