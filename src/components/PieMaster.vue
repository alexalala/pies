<template>
	<div>
		<h1>Pie Master</h1>
	</div>
</template>

<script>
import store from '../store';

export default {
  name: 'PieMaster',
  data() {
    return {
      sharedState: {
        store,
      },
    };
  },
};
</script>
