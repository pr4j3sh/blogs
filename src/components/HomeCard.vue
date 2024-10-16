<script setup>
const props = defineProps({
  icon: String,
  title: String,
  desc: String,
});
</script>

<template>
  <Card>
    <template #title>
      <i :class="icon" /> <span>{{ title }}</span>
    </template>
    <template #content>
      <p class="m-0">
        {{ desc }}
      </p>
    </template>
  </Card>
</template>
