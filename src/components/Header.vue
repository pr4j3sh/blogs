<script setup>
import { RouterLink, RouterView } from "vue-router";
import Button from "primevue/button";
</script>

<template>
  <header class="flex items-center justify-between">
    <div class="flex items-center gap-1">
      <i class="pi pi-file"></i>
      <RouterLink class="font-bold" to="/">r3sume</RouterLink>
    </div>
    <nav class="flex items-center gap-1">
      <Button
        class="py-1 text-sm font-semibold"
        label="Log in"
        severity="secondary"
      />
      <Button class="py-1 text-sm font-semibold" label="Create resume" />
    </nav>
  </header>
</template>
