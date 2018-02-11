<!-- ./src/pages/admin/Index.vue -->
<template>
  <div>
    <div class="admin-new">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
            <ul class="admin-menu">
              <!-- Links are sibling routes -->
              <li><router-link to="/admin">View Products</router-link></li>
              <li><router-link to="/admin/new">New product</router-link></li>
            </ul>
          </div>
          <!-- Outlets for children routes -->
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.admin-menu {
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: 1em;
}
.admin-menu a {
  text-transform: uppercase;
  font-family: "Trebuchet MS", Georgia;
  display: block;
  font-size: 1em;
  /* height: 2.5em; */
  line-height: 1;
  background: #FFCC00;
  color: #000000;
  text-decoration: none;
  margin: 0 0 1px;
  text-align: left;
  padding: 0.75em 1em;
}

.router-link-exact-active {
  font-weight: bold;
}
</style>
