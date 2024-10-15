<script setup>
import Button from "primevue/button";
</script>

<template>
  <main class="flex flex-col gap-y-24">
    <section
      class="flex gap-8 flex-col md:flex-row items-center justify-between"
    >
      <section class="w-full md:w-2/5 flex flex-col gap-y-6 items-start">
        <h1 class="text-4xl font-bold md:text-7xl leading-3">
          Build resumes that stand out.
        </h1>
        <h3 className="text-2xl font-semibold">
          r3sume helps you build professional resumes that can be shared easily.
        </h3>
        <Button class="font-bold" label="Create resume" />
      </section>
      <section class="w-full md:w-2/5">
        <img alt="Hero Banner" src="@/assets/hero-banner.svg" />
      </section>
    </section>
    <img alt="Hero Banner" src="@/assets/cover.png" />
    <section class="flex gap-4 flex-col">
      <section class="w-full md:w-2/5 flex flex-col gap-y-2 items-start">
        <h1 class="text-2xl font-bold md:text-6xl">
          Professional resume template.
        </h1>
        <h3 class="text-xl font-semibold text-zinc-500">
          Essential sections included as per industry standards.
        </h3>
      </section>
      <img alt="Hero Banner" src="@/assets/cover.png" />
    </section>
    <section class="flex gap-4 flex-col">
      <section class="w-full md:w-2/5 flex flex-col gap-y-2 items-start">
        <h1 class="text-2xl font-bold md:text-6xl">Let AI do the work.</h1>
        <h3 class="text-xl font-semibold text-zinc-500">
          Provide little details and AI will fill up the space for you.
        </h3>
      </section>
      <img alt="Hero Banner" src="@/assets/cover.png" />
    </section>
    <section class="flex gap-4 flex-col">
      <section class="w-full md:w-2/5 flex flex-col gap-y-2 items-start">
        <h1 class="text-2xl font-bold md:text-6xl">Share with the world.</h1>
        <h3 class="text-xl font-semibold text-zinc-500">
          With a single click, share your resume with the world.
        </h3>
      </section>
      <img alt="Hero Banner" src="@/assets/cover.png" />
    </section>
  </main>
</template>
