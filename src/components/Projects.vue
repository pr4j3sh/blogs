<script setup>
import { store } from "../lib/store.js";
function formatDate(s) {
  const date = new Date(s);
  return date.toLocaleDateString("en-US", { year: "numeric", month: "short" });
}
</script>
<template>
  <section class="flex flex-col gap-1">
    <h2 class="font-bold text-xl">Projects</h2>
    <hr />
    <div v-for="item in store.projects">
      <div class="flex items-center justify-between">
        <span class="flex gap-2">
          <span class="font-semibold">{{ item.title }}</span>
          <span v-if="item.url">-</span>
          <a v-if="item.url" :href="item.url">demo</a>
        </span>
        <Duration :from="item.from" :to="item.to" />
      </div>
      <ul>
        <List v-if="item.description" :text="item.description" />
        <List v-if="item.description" :text="item.tech" />
      </ul>
    </div>
  </section>
</template>
