<template>
	<div>
		<h1>Selections:</h1>
		<h2>You have selected {{ sharedState.store.state.pie }}</h2>
    <p>Other Neontribers have selected:</p>    
	</div>
</template>

<script>
import store from '../store';

export default {
  name: 'Selections',
  data() {
    return {
      sharedState: {
        store,
      },
    };
  },
};
</script>
