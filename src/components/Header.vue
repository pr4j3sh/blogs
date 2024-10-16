<script setup>
import { RouterLink } from "vue-router";
import Button from "primevue/button";
</script>

<template>
  <header class="flex items-center justify-between">
    <div class="flex items-center gap-1">
      <i class="pi pi-file"></i>
      <RouterLink class="font-bold" to="/">r3sume</RouterLink>
    </div>
    <nav class="flex items-center gap-1">
      <RouterLink to="/login">
        <Button
          class="py-1 text-sm font-semibold"
          label="Log in"
          severity="secondary"
        />
      </RouterLink>
      <RouterLink to="/signup">
        <Button class="py-1 text-sm font-semibold" label="Create resume" />
      </RouterLink>
    </nav>
  </header>
</template>
