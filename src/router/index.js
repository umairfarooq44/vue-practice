import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Assignments from '@/components/Assignments';
import Todo from '@/components/Todo';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/assignments',
      name: 'Assignments',
      component: Assignments,
    },
    {
      path: '/todo',
      name: 'Todo',
      component: Todo,
    },
  ],
});
