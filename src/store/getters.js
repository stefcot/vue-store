// ./src/store/getters

// exporting object literal containing getters for products
export const productGetters = {
  // All products, we don't use the getters arg
  allProducts: state => state.products,
  // Get product by ID
  // maybe some kind of curried function , basically returning a function itself returning the proper product
  productById: (state, getters) => (id) => {
    if (getters.allProducts.length > 0) {
      /* eslint-disable no-underscore-dangle */
      return getters.allProducts.filter(p => p._id === id)[0];
    }
    return state;
  },
};

// exporting getters for manufacturers
export const manufacturerGetters = {
  // all manufacturers
  allManufacturers: state => state.manufacturers,
};
