// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
// Adding form validation
import VeeValidate from 'vee-validate';
// App materials
import App from './App';
import router from './router';
// app store for states
import store from './store';

Vue.config.productionTip = false;
// registering validator
Vue.use(VeeValidate);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  watch: {
    $route(to) {
      if (to.name === 'Products') {
        this.allProducts();
      }
    },
  },
  methods: {
    allProducts() {
      /* eslint-disable no-console */
      console.log('allProducts');
      this.$store.dispatch('allProducts');
    },
  },
});
