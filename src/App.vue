<template>
  <div id="app">
    <nav>
      <div class="container">
        <ul class="nav__left">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/admin">Admin</router-link></li>
          <li><router-link to="/cart">Cart</router-link></li>
        </ul>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',

};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

nav {
  position: fixed;
  top:0;
  left: 0;
  right: 0;
  background: #333;
  color: #FFFFFF;
  font-size: 1em;
  height: 3em;
}

.nav__left {
  padding: 0;
  display: flex;
  font-size: 1em;
  flex-direction: row;
  justify-content: flex-start;
  color: inherit;
  height: 100%;
  list-style: none;
  font-family: "Trebuchet MS", Georgia;
}

.nav__left a {
  height: 3em;
  font-size: 1em;
  line-height: 3em;
  display: inline-block;
  margin: 0 1em 0;
  color: #CCC;
  text-decoration: none;
  text-transform: uppercase;
}

</style>
