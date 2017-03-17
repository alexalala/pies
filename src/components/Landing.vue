<template>
  <div id="landing">
    <h1>Welcome to {{ privateState.msg }}. Can I take your name please?</h1>
    <img v-if="privateState.selection" :src="getSelectedUserPicture()"><br><br>
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
  Steph: require('../assets/people/Steph.jpg'),
};

export default {
  name: 'landing',
  data() {
    return {
      privateState: {
        people: [
          { name: 'Steph' },
          { name: 'Alex' },
        ],
        msg: 'Pie Selector',
        selection: false,
      },
      sharedState: {
        store,
      },
    };
  },
  methods: {
    onDone() {
      // set the current person selected in our private state
      // into the public state
      this.sharedState.store.setPersonSelection(this.$data.privateState.selection);
      // now we are done we should redirect to the next step
      this.$router.push('stickortwist');
    },
    getSelectedUserPicture() {
      const person = this.$data.privateState.selection;
      return peopleImages[person] || peopleImages.default;
    },
  },
};
</script>
