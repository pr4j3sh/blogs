<script setup>
import { RouterLink } from "vue-router";
import Button from "primevue/button";
import HomeCard from "../components/HomeCard.vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
  <Header />
  <main class="flex-grow flex flex-col gap-24">
    <section class="w-full md:w-2/5 flex flex-col gap-y-6 items-start">
      <h1 class="text-3xl font-bold md:text-5xl">
        Build resumes that stand out.
      </h1>
      <h3 className="text-xl font-semibold">
        r3sume helps you build professional resumes that can be shared easily.
      </h3>

      <RouterLink to="/signup">
        <Button class="font-bold" label="Create resume" />
      </RouterLink>
    </section>
    <section class="flex flex-col md:flex-row gap-4">
      <HomeCard
        icon="pi pi-briefcase"
        title="Professional resume template"
        desc="Essential sections included as per industry standards."
      />
      <HomeCard
        icon="pi pi-microchip-ai"
        title="Let AI do the work"
        desc="Provide little details and AI will fill up the space for you."
      />
      <HomeCard
        icon="pi pi-share-alt"
        title="Share with the world"
        desc="With a single click, share your resume with the world."
      />
    </section>
  </main>
  <Footer />
</template>
