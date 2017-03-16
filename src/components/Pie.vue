<template>
  <div class="pie">
    <h1>Hello, {{ sharedState.store.state.person }}!</h1>
    <p>Which pie would you like?</p>
    <label>Pie Types:
      <div v-for="pie in privateState.pies">
        <input type="radio" :value="pie.name" name="pies" v-model="privateState.selection">
        <label for="pies">{{ pie.name }}</label>
      </div>
    </label>
    <p v-show="privateState.selection"> Oh you fancy {{ privateState.selection }} do you {{ sharedState.store.state.person }}?</p>
    <button @click="onSubmit()">Submit</button>
  </div>
</template>

<script>
import store from '../store';

export default {
  name: 'pie',
  data() {
    return {
      privateState: {
        pies: [
          { name: 'The Match' },
          { name: 'The Aussie' },
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
    onSubmit() {
      this.sharedState.store.setPieSelection(this.$data.privateState.selection);
      this.$router.push('selections');
    },
  },
};
</script>
