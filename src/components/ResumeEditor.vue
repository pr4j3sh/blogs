<script setup>
import { store } from "../lib/store.js";
</script>

<template>
  <div class="p-2 flex flex-col gap-2">
    <section>
      <h2 class="font-bold text-xl">Basic Information</h2>
      <BasicForm />
    </section>
    <section class="flex flex-col gap-2">
      <h2 class="font-bold text-xl">Experience</h2>
      <Accordion v-for="item in store.experience">
        <ExperienceUpdateForm
          :value="item.id"
          :title="item.company"
          :item="item"
        />
      </Accordion>
      <ExperienceForm />
    </section>
    <section class="flex flex-col gap-2">
      <h2 class="font-bold text-xl">Skills</h2>
      <SkillsForm />
    </section>
    <section class="flex flex-col gap-2">
      <h2 class="font-bold text-xl">Projects</h2>
      <Accordion v-for="item in store.projects">
        <ProjectsUpdateForm :value="item.id" :title="item.title" :item="item" />
      </Accordion>
      <ProjectsForm />
    </section>
    <section class="flex flex-col gap-2">
      <h2 class="font-bold text-xl">Education</h2>
      <Accordion v-for="item in store.education">
        <EducationUpdateForm
          :value="item.id"
          :title="item.degree"
          :item="item"
        />
      </Accordion>
      <EducationForm />
    </section>
    <section class="flex flex-col gap-2">
      <h2 class="font-bold text-xl">Certifications</h2>
      <Accordion v-for="item in store.certifications">
        <CertificationsUpdateForm
          :value="item.id"
          :title="item.name"
          :item="item"
        />
      </Accordion>
      <CertificationsForm />
    </section>
    <section class="flex flex-col gap-2">
      <h2 class="font-bold text-xl">Recognitions</h2>
      <Accordion v-for="item in store.recognitions">
        <RecognitionsUpdateForm
          :value="item.id"
          :title="item.name"
          :item="item"
        />
      </Accordion>
      <RecognitionsForm />
    </section>
  </div>
</template>
