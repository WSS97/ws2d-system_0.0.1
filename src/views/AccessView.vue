<script></script>

<template>
  <div>
    <h1>Olá</h1>
    <h2>
      Seja bem vindo <span class="user">{{ this.$store.state.user.name }}</span>
    </h2>
  </div>
</template>

<style>
.user {
  color: #42b983;
}
</style>
