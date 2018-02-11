<!-- ./src/components/products/ProductForm.vue -->
<template>
  <form class="col-lg-9 col-md-9 col-sm-12 col-xs-12" @submit.prevent="saveProduct">
    <div class="row">
      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <div class="form-group">
          <label>Name</label>
          <input type="text"
                 placeholder="Name"
                 class="form-control"
                 v-model="model.name" />
        </div>
        <div class="form-group">
          <label>Price</label>
          <input
            type="number"
            class="form-control"
            placeholder="Price"
            v-model="model.price"
            name="price" />
        </div>
        <div class="form-group">
          <label>Manufacturer</label>
          <select type="text"
                  class="form-control"
                  v-model="model.manufacturer"
                  name="manufacturer">
            <template v-for="manufacturer in manufacturers">
              <option :value="manufacturer._id"
                      :key="manufacturer._id"
                      :selected="manufacturer._id == (model.manufacturer && model.manufacturer._id)">
                {{manufacturer.name}}
              </option>
            </template>
          </select>
        </div>
      </div>
      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <div class="form-group">
          <label>Image</label>
          <input type="text"
                 class="form-control"
                 placeholder="Image"
                 v-model="model.image"
                 name="image" />
        </div>
        <div class="form-group">
          <label>Description</label>
          <textarea
            type="number"
            class="form-control"
            placeholder="Description"
            rows="5"
            v-model="model.description"
            name="description"></textarea>
        </div>
        <div class="form-group new-button">
          <button class="button">
            <i class="icon-pencil icon-large"></i>
            <span v-if="isEditing">Update Product</span>
            <span v-else>Add Product</span>
          </button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  props: ['model', 'manufacturers', 'isEditing'],
  methods: {
    saveProduct() {
      this.$emit('save-product', this.model);
    },
  },
};
</script>

<style>
  .form-control.error {
    border-color: #FF3333;
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(255, 71, 71, 0.6);
  }
</style>

