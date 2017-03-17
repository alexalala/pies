<template>
  <div id="landing">
    <h1>Welcome to {{ privateState.msg }}. Can I take your name please?</h1>
    <select v-model="privateState.selection">
      <option :value="person.name" v-for="person in privateState.people">{{ person.name }}</option>
    </select>
    <img v-if="privateState.selection" :src="'../assets/people/' + privateState.selection + '.jpg'">
    <button @click="onDone()">
      Next
    </button>
  </div>
</template>

<script>
import store from '../store';

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
      this.$router.push('pie');
    },
  },
};
</script>
