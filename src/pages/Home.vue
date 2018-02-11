<!-- ./src/pages/Home.vue -->
<template>
  <div class="container">
    <div class="title">
      <h1>{{msg}}</h1>
    </div>
  </div>
</template>

<script>
export default {
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
