<!-- ./src/Components/products/ProductList.vue -->
<template>
  <div>
    <div class="products">
      <div class="container">
        <template v-for="product in products">
          <product-item :product="product" :key="product._id"></product-item>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import ProductItem from './ProductItem';

export default {
  name: 'product-list',
  created() {
    /* eslint-disable no-console */
    console.log('', this.products);
    if (this.products.length === 0) {
      this.$store.dispatch('allProducts');
    }
  },
  computed: {
    products() {
      // product list from the store
      return this.$store.getters.allProducts;
    },
  },
  components: {
    'product-item': ProductItem,
  },
};
</script>

<style scoped>

</style>
