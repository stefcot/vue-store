<!-- ./src/pages/Cart.vue -->
<template>
  <div class="container">
    <div class="title">
      <h1>{{msg}}</h1>
    </div>
  </div>
</template>v

<script>
export default {
  name: 'home',
  data() {
    return {
      msg: 'Welcome to the Cart page',
    };
  },
};
</script>

<style>
  .title {
    font-family: 'Quicksand', sans-serif;
  }
</style>
