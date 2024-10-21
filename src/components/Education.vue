<script setup>
import { store } from "../lib/store.js";
function formatDate(s) {
  const date = new Date(s);
  return date.toLocaleDateString("en-US", { year: "numeric", month: "short" });
}
</script>
<template>
  <section class="flex flex-col gap-1">
    <h2 class="font-bold text-xl">Education</h2>
    <hr />
    <div v-for="item in store.education">
      <div class="flex items-center justify-between">
        <span class="flex gap-2">
          <span class="font-semibold">{{ item.degree }}</span>
          <span>-</span>
          <span>{{ item.college }}</span>
          <span v-if="item.grades">|</span>
          <span>{{ item.grades }}</span>
        </span>
        <Duration :from="item.from" :to="item.to" />
      </div>
    </div>
  </section>
</template>
