import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import App from './App.vue';
import VueRouter from 'vue-router';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/js/bootstrap';

import home from './pages/homePage.vue';

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
      component: home,
    },
  ],
});

new Vue({
  el: '#app',
  router,
  render: (h) => h(App),
});
