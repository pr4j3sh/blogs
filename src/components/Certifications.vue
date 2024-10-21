<script setup>
import { store } from "../lib/store.js";
function formatDate(s) {
  const date = new Date(s);
  return date.toLocaleDateString("en-US", { year: "numeric", month: "short" });
}
</script>
<template>
  <section class="flex flex-col gap-1">
    <h2 class="font-bold text-xl">Certifications</h2>
    <hr />
    <div v-for="item in store.certifications">
      <div class="flex items-center justify-between">
        <span class="flex gap-2">
          <span class="font-semibold">{{ item.name }}</span>
          <span vi-if="item.authority">-</span>
          <span>{{ item.authority }}</span>
          <span v-if="item.url">|</span>
          <a :href="item.url">View</a>
        </span>
        <Duration :from="item.from" :to="item.to" />
      </div>
    </div>
  </section>
</template>
