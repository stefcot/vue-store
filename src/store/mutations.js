// ./src/store/mutations

// Constant imports
import {
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  PRODUCT_BY_ID,
  PRODUCT_BY_ID_SUCCESS,
  UPDATE_PRODUCT,
  UPDATE_PRODUCT_SUCCESS,
  REMOVE_PRODUCT,
  REMOVE_PRODUCT_SUCCESS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ALL_PRODUCTS,
  ALL_PRODUCTS_SUCCESS,
  ALL_MANUFACTURERS,
  ALL_MANUFACTURERS_SUCCESS,
} from './mutation-types';

// Same pattern as getters an object listing mutations made to the state
// Except that here we use constant for method (dynamic) naming
export const productMutations = {
  [ALL_PRODUCTS](state) {
    // Called when fetching products
    state.showLoader = true;
  },
  [ALL_PRODUCTS_SUCCESS](state, payload) {
    // Called hen products have benn fetched
    state.showLoader = false;
    state.products = payload;
  },
  [PRODUCT_BY_ID](state) {
    // Called when fetching products by id
    state.showLoader = true;
  },
  [PRODUCT_BY_ID_SUCCESS](state, payload) {
    // called when a product is fetched
    state.showLoader = false;
    state.product = payload;
  },
  [ADD_PRODUCT](state) {
    // same pattern ....
    state.showLoader = true;
  },
  [ADD_PRODUCT_SUCCESS](state, payload) {
    // here the payload is a product
    state.showLoader = false;
    state.products.push(payload);
  },
  [UPDATE_PRODUCT](state) {
    // same pattern ....
    state.showLoader = true;
  },
  [UPDATE_PRODUCT_SUCCESS](state, payload) {
    // here the payload is a product
    state.showLoader = false;
    state.products.map((p) => {
      /* eslint-disable no-underscore-dangle */
      if (p._id === payload._id) {
        // don't know why i have to retrieve and compare manufacturer
        const item = { ...payload, manufacturer: state.manufacturers.filter(x => x._id === payload.manufacturer)[0] };
        return item;
      }
      return p;
    });
  },
  [REMOVE_PRODUCT](state) {
    // same pattern ....
    state.showLoader = true;
  },
  [REMOVE_PRODUCT_SUCCESS](state, payload) {
    // Here's the payload is the deleted product id
    state.showLoader = true;
    // The findIndex() method returns the index of the first element in the array
    // that satisfies the provided testing function.
    /* eslint-disable no-underscore-dangle */
    const index = state.products.findIndex(p => p._id === payload);
    state.products.splice(index, 1);
  },
};

// Use in a component

/*
  ...
  methods: {
    addProduct(product) {
      this.$store.commit('addProduct', product)
    }
  }
  ...
*/

/*
  The commit method takes the name of the mutation handler and the payload.
  The handler addProduct receives the current state and payload
  and appends the payload to the state's products.
*/

export const cartMutations = {
  [ADD_TO_CART](state, payload) {
    state.cart.push(payload);
  },
  [REMOVE_FROM_CART](state, payload) {
    /* eslint-disable no-underscore-dangle */
    const index = state.cart.findIndex(p => p._id === payload);
    state.cart.splice(index, 1);
  },
};

export const manufacturerMutations = {
  [ALL_MANUFACTURERS](state) {
    // same pattern ....
    state.showLoader = true;
  },
  [ALL_MANUFACTURERS_SUCCESS](state, payload) {
    state.showLoader = false;
    state.manufacturers = payload;
  },
};
