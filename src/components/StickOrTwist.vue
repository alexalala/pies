<template>
	<div>
		<h1>It's Decision Time {{ sharedState.store.state.person }}..</h1>
		<p>So here is where the really big decisions are made.</p>
		<p>You will now have two options. Your selection here may change the course of your life forever so please make it wisely.</p>
		<p>Would you like to stick with your previously selected pie? Or would you like to twist and change it for another?</p>
		<button @click="stickIt()">stick</button>
		<button @click="twistIt()">twist</button>
	</div>
</template>

<script>
import store from '../store';

export default {
  name: 'stickortwist',
  data() {
    return {
      privateState: {

      },
      sharedState: {
        store,
      },
    };
  },
  methods: {
    stickIt() {
      this.$router.push('selections');
    },
    twistIt() {
      this.$router.push('pie');
    },
  },
};
</script>
