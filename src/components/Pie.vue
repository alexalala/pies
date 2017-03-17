<template>
  <div class="pie">
    <h1>Hello, {{ sharedState.store.state.person }}!</h1>
    <p>Which pie would you like?</p>
    <table>
      <tr v-for="pie in privateState.pies">
        <td><input type="radio" :value="pie.name" name="pies" v-model="privateState.selection"></td>
        <td><label for="pies">{{ pie.name }}</label></td>
      </tr>
    </table>
    <p v-show="privateState.selection"> Oh you fancy {{ privateState.selection }} do you {{ sharedState.store.state.person }}?</p>
    <br>
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
          { name: 'The Brekkie' },
          { name: 'The Veggie' },
          { name: 'The Classic Aussie' },
          { name: 'The Match' },
          { name: 'The Aussie Deluxe' },
          { name: 'The Pom' },
          { name: 'The Grill' },
          { name: 'The Flaming Galah' },
          { name: 'The Bondi' },
          { name: 'The Greek' },
          { name: 'The Italian' },
          { name: 'Special' },
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
