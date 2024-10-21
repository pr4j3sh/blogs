<script setup>
import { store } from "../lib/store.js";

const getHostname = (url) => {
  try {
    return new URL(url).hostname.replace("www.", "");
  } catch (e) {
    return url;
  }
};
const getUsername = (url) => {
  try {
    const segments = url.split("/");
    return segments.pop() || segments.pop();
  } catch (e) {
    return url;
  }
};
</script>
<template>
  <div class="p-2 flex flex-col gap-2">
    <header class="flex flex-col items-center gap-1">
      <h1 class="font-bold text-2xl">{{ store.basic.name }}</h1>
      <ul class="flex gap-x-4">
        <Link
          v-if="store.basic.website"
          icon="pi pi-globe"
          :link="store.basic.website"
          :text="getHostname(store.basic.website)"
        />
        <Link
          v-if="store.basic.github"
          icon="pi pi-github"
          :link="store.basic.github"
          :text="getUsername(store.basic.github)"
        />
        <Link
          v-if="store.basic.linkedin"
          icon="pi pi-linkedin"
          :link="store.basic.linkedin"
          :text="getUsername(store.basic.linkedin)"
        />
        <Link
          v-if="store.basic.email"
          icon="pi pi-envelope"
          :link="store.basic.email"
          :text="store.basic.email"
        />
        <Link
          v-if="store.basic.phone"
          icon="pi pi-phone"
          :link="store.basic.phone"
          :text="store.basic.phone"
        />
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
