<script setup>
import { store } from "../lib/store.js";
function formatDate(s) {
  const date = new Date(s);
  return date.toLocaleDateString("en-US", { year: "numeric", month: "short" });
}
</script>
<template>
  <section class="flex flex-col">
    <h2 class="font-bold text-xl">Education</h2>
    <Divider class="mt-3 mb-1" />
    <div v-for="item in store.education">
      <div class="flex items-center justify-between gap-2">
        <span class="font-semibold">{{ item.degree }}</span>
        <Duration :from="item.from" :to="item.to" />
      </div>
      <span class="flex items-center gap-2">
        <span>{{ item.college }}</span>
        <span v-if="item.grades">|</span>
        <span class="font-semibold whitespace-nowrap">{{ item.grades }}</span>
      </span>
    </div>
  </section>
</template>
