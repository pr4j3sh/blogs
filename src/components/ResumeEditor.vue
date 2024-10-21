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
      <Accordion>
        <ProjectsUpdateForm value="0" title="Project 1" />
      </Accordion>
      <ProjectsForm />
    </section>
    <section class="flex flex-col gap-2">
      <h2 class="font-bold text-xl">Education</h2>
      <Accordion>
        <EducationUpdateForm value="0" title="College 1" />
      </Accordion>
      <EducationForm />
    </section>
    <section class="flex flex-col gap-2">
      <h2 class="font-bold text-xl">Certifications</h2>
      <Accordion>
        <CertificationsUpdateForm value="0" title="Certifications 1" />
      </Accordion>
      <CertificationsForm />
    </section>
    <section class="flex flex-col gap-2">
      <h2 class="font-bold text-xl">Recognitions</h2>
      <Accordion>
        <RecognitionsUpdateForm value="0" title="Recognition 1" />
      </Accordion>
      <RecognitionsForm />
    </section>
  </div>
</template>
