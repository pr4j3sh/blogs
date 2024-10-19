<script setup>
const props = defineProps({
  resumeData: Object,
});
</script>
<template>
  <div class="p-2 flex flex-col gap-2">
    <header class="flex flex-col items-center gap-1">
      <h1 class="font-bold text-2xl">{{ resumeData?.basic?.name }}</h1>
      <ul class="flex gap-x-4">
        <Link icon="pi pi-globe" link="#" text="website" />
        <Link icon="pi pi-github" link="#" text="github" />
        <Link icon="pi pi-linkedin" link="#" text="linkedin" />
        <Link icon="pi pi-envelope" link="#" text="email@example.com" />
        <Link icon="pi pi-phone" link="#" text="9999-999-999" />
      </ul>
    </header>
    <main class="flex flex-col gap-1.5">
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Certifications />
      <Recognitions />
    </main>
  </div>
</template>
