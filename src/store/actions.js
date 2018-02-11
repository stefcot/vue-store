// ./src/store/actions

import axios from 'axios';

// First we import our mutations constant list
import {
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  PRODUCT_BY_ID,
  PRODUCT_BY_ID_SUCCESS,
  UPDATE_PRODUCT,
  UPDATE_PRODUCT_SUCCESS,
  REMOVE_PRODUCT,
  REMOVE_PRODUCT_SUCCESS,
  ALL_PRODUCTS,
  ALL_PRODUCTS_SUCCESS,
  ALL_MANUFACTURERS,
  ALL_MANUFACTURERS_SUCCESS,
} from './mutation-types';


// Launch API before Demo
const API_BASE = 'http://localhost:3000/api/v1';

// All asynchronous things are performed by action, commit mutations on the way
// exporting an object containing the product actions for the app
export const productActions = {
  // an action receive the store from which we access the commit method by object destructuring
  allProducts({ commit }) {
    // First we commit the start of the action to display the loader
    commit(ALL_PRODUCTS);
    // then we fetch all the products stored in the database (here the local API
    // axios returns a Promise
    axios.get(`${API_BASE}/products`).then((response) => {
      // on response we commit the product list to the store
      // Note that we pass the list as the second argument
      /* eslint-disable no-console */
      console.log('allProducts', response.data);
      commit(ALL_PRODUCTS_SUCCESS, response.data);
    });
  },
  // Same pattern applies for the rst of the others actions
  // except that we pass a payload as a second argument that can be anything
  // here payload is a number for the product id, response.data is the product
  productById({ commit }, payload) {
    commit(PRODUCT_BY_ID);
    axios.get(`${API_BASE}/products/${payload}`).then((response) => {
      /* eslint-disable no-console */
      console.log('productsById', response.data);
      commit(PRODUCT_BY_ID_SUCCESS, response.data);
    });
  },
  addProduct({ commit }, payload) {
    // here the payload is a product object
    commit(ADD_PRODUCT);
    // we pass the product object to be added as a second argument
    axios.post(`${API_BASE}/products`, payload).then((response) => {
      /* eslint-disable no-console */
      console.log('addProduct', response.data);
      commit(ADD_PRODUCT_SUCCESS, response.data);
    });
  },
  updateProduct({ commit }, payload) {
    // the payload is the complete product object
    commit(UPDATE_PRODUCT);
    // Same as add product, we pass the product object as the second argument
    // we previously fetched the product by its id allowing us to pass
    // the product id in the dynamic update route
    /* eslint-disable no-underscore-dangle */
    axios.put(`${API_BASE}/products/${payload._id}`, payload).then((response) => {
      /* eslint-disable no-console */
      console.log('updateProduct', response.data);
      // will update the store product list
      commit(UPDATE_PRODUCT_SUCCESS, response.data);
    });
  },
  removeProduct({ commit }, payload) {
    // here the payload is the product id
    commit(REMOVE_PRODUCT);
    /* eslint-disable no-underscore-dangle */
    axios.delete(`${API_BASE}/products/${payload._id}`).then((response) => {
      /* eslint-disable no-console */
      console.log('removeProduct', response.data);
      commit(REMOVE_PRODUCT_SUCCESS, response.data);
    });
  },
};

export const manufacturerActions = {
  allManufacturers({ commit }) {
    commit(ALL_MANUFACTURERS);
    axios.get(`${API_BASE}/manufacturers`).then((response) => {
      // eslint-disable-next-line
      console.log('allManufacturers : ', response.data);
      commit(ALL_MANUFACTURERS_SUCCESS, response.data);
    });
  },
};
