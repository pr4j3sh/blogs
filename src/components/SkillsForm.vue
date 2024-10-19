<script setup></script>
<template>
  <form class="flex flex-col gap-2">
    <Textarea
      v-model="languages"
      rows="5"
      placeholder="Languages/technologies you know..."
      class="text-sm"
    />
    <Textarea
      v-model="languages"
      rows="5"
      placeholder="Libraries/frameworks you know..."
      class="text-sm"
    />
    <Textarea
      v-model="languages"
      rows="5"
      placeholder="Tools you use..."
      class="text-sm"
    />
    <div>
      <Button class="py-1 text-sm" severity="secondary">Add</Button>
    </div>
  </form>
</template>
