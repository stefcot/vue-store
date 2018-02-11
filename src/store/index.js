// ./src/store/index.js
import Vue from 'vue';
import Vuex from 'vuex';

// import getters
import { productGetters, manufacturerGetters } from './getters';

// import mutations
import { productMutations, cartMutations, manufacturerMutations } from './mutations';

// Just like every other plugin, you need to configure Vue with Vuex
Vue.use(Vuex);

// Creating and exporting vuex store
export default new Vuex.Store({
  strict: true,
  state: {
    // bought items
    cart: [],
    // show ajax loader
    showLoader: true,
    // selected product/element
    product: {},
    // all products
    products: [],
    // all manufacturers
    manufacturers: [],
  },
  // GETTERS (es5/6 object extending)
  getters: Object.assign({}, productGetters, manufacturerGetters),
  // MUTATIONS MEMBERS
  mutations: Object.assign({}, productMutations, cartMutations, manufacturerMutations),
});
