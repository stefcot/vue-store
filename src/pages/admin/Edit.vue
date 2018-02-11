<!-- ./src/pages/admin/Edit.vue -->
<template>
  <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
    <div class="title">
      <h1>This is Admin/Edit/{{$route.params.id}}</h1>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    // console.log(this.$route.params.id); // prints the value of id
  },
};
</script>

<style>
  .title {
    font-family: 'Quicksand', sans-serif;
  }
</style>

