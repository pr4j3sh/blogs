<script setup>
import Button from "primevue/button";
</script>

<template>
  <header class="flex items-center justify-between">
    <div class="flex items-center gap-1">
      <i class="pi pi-file"></i>
      <router-link class="font-bold" to="/">r3sume</router-link>
    </div>
    <nav class="flex items-center gap-1">
      <router-link to="/auth/login">
        <Button
          class="py-1 text-sm font-semibold"
          label="Log in"
          severity="secondary"
        />
      </router-link>
      <router-link to="/auth/signup">
        <Button class="py-1 text-sm font-semibold" label="Create resume" />
      </router-link>
    </nav>
  </header>
</template>
