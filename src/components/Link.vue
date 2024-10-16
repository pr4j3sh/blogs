<script setup>
const props = defineProps({
  icon: String,
  link: String,
  text: String,
});
</script>

<template>
  <li class="flex items-center gap-1">
    <i :class="icon" />
    <a :href="link">{{ text }}</a>
  </li>
</template>
