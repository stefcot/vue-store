<!-- ./src/pages/Home.vue -->
<template>
  <div class="container">
    <div class="title">
      <h1><i class="fa fa-braille"></i>In Stock</h1>
    </div>
    <product-list></product-list>
  </div>
</template>

<script>
import ProductList from '../components/products/ProductList';

export default {
  components: {
    'product-list': ProductList,
  },
  name: 'home',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<style>
  .title {
    font-family: 'Quicksand', sans-serif;
    text-align: center;
  }
</style>
