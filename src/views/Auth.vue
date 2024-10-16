<script setup>
import Footer from "../components/Footer.vue";
import AuthHeader from "../components/AuthHeader.vue";
</script>

<template>
  <div
    class="container h-screen px-4 xl:px-0 max-w-screen-lg m-auto py-4 flex flex-col gap-y-24"
  >
    <AuthHeader />
    <router-view />
    <Footer />
  </div>
</template>
