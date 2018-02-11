<!-- ./src/components/products/ProductButton.vue -->
<template>
  <div>
    <button v-if="isAdding" class="button" @click="addToCart">
      <i class="fa fa-cart-plus"></i>Add to cart
    </button>
    <button v-else class="button button-danger" @click="removeFromCart(product._id)">
      <i class="icon-trash"></i>
    </button>
  </div>
</template>

<script>
// importing action/mutations names
import { ADD_TO_CART, REMOVE_FROM_CART } from '../../store/mutation-types';

export default {
  name: 'product-button',
  data() {
    return {
      cart: this.$store.state.cart,
    };
  },
  computed: {
    isAdding() {
      // The product is not present yet
      return this.cart.indexOf(this.product) < 0;
    },
  },
  props: ['product'],
  methods: {
    addToCart() {
      this.$store.commit(ADD_TO_CART, this.product);
    },
    removeFromCart(id) {
      this.$store.commit(REMOVE_FROM_CART, id);
    },
  },
};
</script>

<style scoped>

</style>
