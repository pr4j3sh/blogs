<script setup>
import { RouterView } from "vue-router";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div
    class="container px-4 xl:px-0 max-w-screen-lg m-auto py-4 flex flex-col gap-y-24"
  >
    <Header />
    <RouterView />
    <Footer />
  </div>
</template>
