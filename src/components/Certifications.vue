<script setup>
import { store } from "../lib/store.js";
function formatDate(s) {
  const date = new Date(s);
  return date.toLocaleDateString("en-US", { year: "numeric", month: "short" });
}
</script>
<template>
  <section class="flex flex-col">
    <h2 class="font-bold text-xl">Certifications</h2>
    <Divider class="mt-3 mb-1" />
    <div v-for="item in store.certifications">
      <div class="flex items-center justify-between gap-2">
        <span class="flex gap-2">
          <a :href="item.url" class="font-semibold">{{ item.name }}</a>
          <span vi-if="item.authority">-</span>
          <span>{{ item.authority }}</span>
        </span>
        <Duration :from="item.from" :to="item.to" />
      </div>
    </div>
  </section>
</template>
