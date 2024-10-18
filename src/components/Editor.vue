<script setup>
import Resume from "../components/Resume.vue";
</script>

<template>
  <div class="card w-full h-full">
    <Splitter class="h-[calc(100%-48px)]">
      <SplitterPanel class="">
        <ResumeEditor />
      </SplitterPanel>
      <SplitterPanel class=""> <Resume /> </SplitterPanel>
    </Splitter>
    <div class="flex justify-end gap-2 p-2 border-l-2 border-l-zinc-100">
      <Button class="py-1 text-sm" severity="secondary">Download</Button>
      <Button class="py-1 text-sm">Publish</Button>
    </div>
  </div>
</template>
