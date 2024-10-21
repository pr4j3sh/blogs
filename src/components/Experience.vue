<script setup>
import { store } from "../lib/store.js";
function formatDate(s) {
  const date = new Date(s);
  return date.toLocaleDateString("en-US", { year: "numeric", month: "short" });
}
</script>
<template>
  <section class="flex flex-col">
    <h2 class="font-bold text-xl">Experience</h2>
    <Divider class="mt-3 mb-1" />
    <div v-for="item in store.experience">
      <div class="flex items-center justify-between">
        <span class="flex gap-2">
          <span class="font-bold">{{ item.company }}</span>
          <span v-if="item.role">-</span>
          <span>{{ item.role }}</span>
          <span v-if="item.type">|</span>
          <span>{{ item.type }}</span>
        </span>
        <Duration :from="item.from" :to="item.to" />
      </div>
      <ul>
        <List v-if="item.description" :text="item.description" />
        <List v-if="item.tech" :text="item.tech" />
      </ul>
    </div>
  </section>
</template>
