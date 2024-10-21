<script setup>
const props = defineProps({
  from: String,
  to: String,
});
function formatDate(s) {
  const date = new Date(s);
  return date.toLocaleDateString("en-US", { year: "numeric", month: "short" });
}
</script>
<template>
  <span class="flex gap-2 text-sm">
    <span v-if="from">{{ formatDate(from) }}</span>
    <span v-if="to">-</span>
    <span v-if="to">{{ formatDate(to) }}</span>
  </span>
</template>
