<script setup>
import { RouterLink, RouterView } from "vue-router";
import Button from "primevue/button";
</script>

<template>
  <header>
    <img alt="Vue logo" src="@/assets/logo.svg" width="48" height="48" />
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
    <Button label="Click" />
  </header>
</template>
