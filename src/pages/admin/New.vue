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
    };
  },
  created() {
    if (this.manufacturers.length === 0) {
      this.$store.dispatch('allManufacturers');
    }
  },
  methods: {
    addProduct(model) {
      this.$store.dispatch('addProduct', model);
    },
  },
  computed: {
    manufacturers() {
      return this.$store.getters.allManufacturers;
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
