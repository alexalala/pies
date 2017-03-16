<template>
  <div id="landing">
    <h1>{{ privateState.msg }}</h1>
    <select v-model="peopleSelection">
      <option :value="person.name" v-for="person in privateState.peopleSelection">{{ person.name }}</option>
    </select>
    <br>
    <br>
    <button>
      <router-link to="/pie">Next</router-link>
    </button>
  </div>
</template>

<script>
export default {
  name: 'landing',
  data() {
    return {
      privateState: {
        peopleSelection: [
          { name: 'Steph' },
          { name: 'Alex' },
        ],
        msg: 'Pie Selector',
      },
      sharedState: {
        store: '',
      },
    };
  },
};
</script>
