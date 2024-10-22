<script setup>
import { store } from "../lib/store.js";
</script>
<template>
  <section class="flex flex-col">
    <h2 class="font-bold text-xl">Skills</h2>
    <Divider class="mt-3 mb-1" />
    <div>
      <p v-if="store.skills.languages">
        <span class="font-semibold">Languages/Technology</span> -
        {{ store.skills.languages }}
      </p>
      <p v-if="store.skills.libraries">
        <span class="font-semibold">Libraries/Frameworks</span> -
        {{ store.skills.libraries }}
      </p>
      <p v-if="store.skills.tools">
        <span class="font-semibold">Tools</span> -
        {{ store.skills.tools }}
      </p>
    </div>
  </section>
</template>
