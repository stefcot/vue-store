// ./src/store/mutations-types

// Constants as Mutation Types

// addProduct must be used in two or more places.
// When creating the mutation and while committing to the mutation.
// This creates a layer of possible typographical error.
// You can use constants to replace these types and allow tools
// like IntelliSense to help you avoid typos and errors.

export const ALL_PRODUCTS = 'ALL_PRODUCTS';
export const ALL_PRODUCTS_SUCCESS = 'ALL_PRODUCTS_SUCCESS';

export const PRODUCT_BY_ID = 'PRODUCT_BY_ID';
export const PRODUCT_BY_ID_SUCCESS = 'PRODUCT_BY_ID_SUCCESS';

export const ADD_PRODUCT = 'ADD_PRODUCT';
export const ADD_PRODUCT_SUCCESS = 'ADD_PRODUCT_SUCCESS';

export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const UPDATE_PRODUCT_SUCCESS = 'UPDATE_PRODUCT_SUCCESS';

export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const REMOVE_PRODUCT_SUCCESS = 'REMOVE_PRODUCT_SUCCESS';

export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export const ALL_MANUFACTURERS = 'ALL_MANUFACTURER';
export const ALL_MANUFACTURERS_SUCCESS = 'ALL_MANUFACTURER_SUCCESS';
