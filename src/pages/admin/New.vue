<!-- ./src/pages/admin/New.vue -->
<template>
  <product-form @save-product="addProduct" :model="model" :manufacturers="manufacturers"></product-form>
</template>

<script>
import ProductForm from '@/components/products/ProductForm';

export default {
  data() {
    return {
      model: {},
      manufacturers: [
        {
          _id: 'sam',
          name: 'Samsung',
        },
        {
          _id: 'apple',
          name: 'Apple',
        },
      ],
    };
  },
  methods: {
    addProduct(model) {
      // eslint-disable-next-line
      console.log('model : ', model);
    },
  },
  components: {
    'product-form': ProductForm,
  },
};
</script>

<style>
  .title {
    font-family: 'Quicksand', sans-serif;
  }
</style>
