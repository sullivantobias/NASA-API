import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import App from './App.vue';
import VueRouter from 'vue-router';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/js/bootstrap';

import home from './pages/homePage.vue';
import test from './pages/testPage.vue';
import moon from './pages/moonPage.vue';
import search from './pages/searchPage.vue';

Vue.use(BootstrapVue);
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      components: {
        home: home,
      },
    },
    {
      path: '*',
      components: {
        home: home,
      },
    },
    {
      path: '/moon',
      components: {
        moon: moon,
      },
    },
    {
      path: '/search',
      components: {
        search: search,
      },
    },
    {
      path: '/test',
      components: {
        test: test,
      },
    },
  ],
});

new Vue({
  el: '#app',
  router,
  render: (h) => h(App),
});
