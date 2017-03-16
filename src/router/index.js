import Vue from 'vue';
import Router from 'vue-router';
import Pie from '@/components/Pie';
import Landing from '@/components/Landing';
import Selections from '@/components/Selections';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing,
    },
    {
      path: '/pie',
      name: 'Pie',
      component: Pie,
    },
    {
      path: '/selections',
      name: 'Selections',
      component: Selections,
    },
  ],
});
