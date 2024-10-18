<script setup>
const props = defineProps({
  text: String,
});
</script>
<template>
  <li class="pl-4 before:content-['-'] before:mr-2">
    {{ text }}
  </li>
</template>
