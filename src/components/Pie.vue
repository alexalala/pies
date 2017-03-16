<template>
  <div class="pie">
    <h1>Hello, {{ sharedState.state.person }}!</h1>
    <p>Which pie would you like?</p>
    <label for="pieType">Pie Type</label>
    <br>
    <div v-for="pie in pies">
    <input type="radio" :value="pie.name" name="pies" v-model="pieSelection">
    <label for="pies">{{ pie.name }}</label>
    </div>
    <br>
    <button type="submit" /* v-on:click="enter()" */>Submit</button>
    <br>
    <p v-if="peopleSelection && pieSelection">{{peopleSelection }} has selected the {{ pieSelection }}.</p>
    <p>{{ totalSelection }}</p>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      totalSelection: [
        {},
      ],
      peopleSelection: '',
      pieSelection: '',
      pies: [
        { name: 'The Match' },
        { name: 'The Aussie' },
      ],
      msg: 'Pie Selector',
    };
  },
  // methods() {
  //   enter: function () {
  //     this.totalSelection = this.peopleSelection + this.pieSelection;
  //     return this.totalSelection;
  //   },
  // }
};
</script>
