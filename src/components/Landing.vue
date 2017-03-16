<template>
  <div id="landing">
    <h1>{{ msg }}</h1>
    <select v-model="peopleSelection">
      <option :value="person.name" v-for="person in peopleSelection">{{ person.name }}</option>
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
      peopleSelection: [
        { name: 'Steph' },
        { name: 'Alex' },
      ],
      msg: 'Pie Selector',
    },
  },
};
</script>
