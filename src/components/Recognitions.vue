<script setup>
import { store } from "../lib/store.js";
</script>
<template>
  <section class="flex flex-col gap-1">
    <h2 class="font-bold text-xl">Recognitions</h2>
    <hr />
    <div v-for="item in store.recognitions">
      <div class="flex items-center justify-between">
        <span class="flex gap-2">
          <span class="font-semibold">{{ item.name }}</span>
          <span v-if="item.description">-</span>
          <span>{{ item.description }}</span>
        </span>
        <Duration :from="item.from" :to="item.to" />
      </div>
    </div>
  </section>
</template>
