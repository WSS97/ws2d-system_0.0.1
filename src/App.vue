<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="container">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <div class="register">
          <RouterLink to="/register"><button class="cad">Cadastre novo usuario</button></RouterLink>
        </div>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
.container {
  max-width: 1280px;
  margin: 0 auto;
  position: relative;
}

nav {
  display: flex;
  justify-content: center;
  width: 100%;
  position: relative;
}

nav > .register {
  position: absolute;
  right: 0;
}

.cad {
  color: aliceblue;
  background-color: #42b983;
  width: 100%;
  height: 2em;
  border: none;
  border-radius: 10px;
  font-weight: 600;
}

button:hover {
  cursor: pointer;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
