<script setup>
import { store } from "../lib/store.js";
</script>
<template>
  <section class="flex flex-col gap-1">
    <h2 class="font-bold text-xl">Skills</h2>
    <hr />
    <div>
      <div class="flex items-center justify-between">
        <span v-if="store.skills.languages" class="flex gap-2">
          <span class="font-semibold">Languages/Technology</span>
          <span>-</span>
          <span>{{ store.skills.languages }}</span>
        </span>
      </div>
      <div class="flex items-center justify-between">
        <span v-if="store.skills.libraries" class="flex gap-2">
          <span class="font-semibold">Libraries/Frameworks</span>
          <span>-</span>
          <span>{{ store.skills.libraries }}</span>
        </span>
      </div>
      <div class="flex items-center justify-between">
        <span v-if="store.skills.tools" class="flex gap-2">
          <span class="font-semibold">Tools</span>
          <span>-</span>
          <span>{{ store.skills.tools }}</span>
        </span>
      </div>
    </div>
  </section>
</template>
