<template>
	<div>
		<h1>It's Decision Time {{ sharedState.store.state.person }}..</h1>
		<p>So here is where the really big decisions are made.</p>
		<p>You will now have two options. Your selection here may change the course of your life forever so please make it wisely.</p>
		<p>Would you like to stick with your previously selected pie? Or would you like to twist and change it for another?</p>
		<button>stick</button>
		<button>twist</button>
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
};
</script>
