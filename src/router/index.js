import Vue from 'vue';
import VueRouter from 'vue-router';
import Contacts from '@/views/Contacts.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Contacts',
    component: Contacts,
  },
  {
    path: '/contact/:id',
    name: 'contact',
    component: () => import('../views/ContactDetails'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
