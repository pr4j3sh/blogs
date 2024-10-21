<script setup>
import { store } from "../lib/store.js";
function formatDate(s) {
  const date = new Date(s);
  return date.toLocaleDateString("en-US", { year: "numeric", month: "short" });
}
</script>
<template>
  <section class="flex flex-col">
    <h2 class="font-bold text-xl">Projects</h2>
    <Divider class="mt-3 mb-1" />
    <div v-for="item in store.projects">
      <div class="flex items-center justify-between">
        <a :href="item.url" class="font-semibold">{{ item.title }}</a>
        <Duration :from="item.from" :to="item.to" />
      </div>
      <ul>
        <List v-if="item.description" :text="item.description" />
        <List v-if="item.description" :text="item.tech" />
      </ul>
    </div>
  </section>
</template>
