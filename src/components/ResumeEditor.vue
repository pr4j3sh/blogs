<script setup>
import { ref } from "vue";

const selectedJobType = ref();
const jobTypes = ref(["Fulltime", "Intern"]);
</script>

<template>
  <div class="p-2">
    <section>
      <h2 class="font-bold text-xl">Basic Information</h2>
      <form class="flex flex-col gap-2">
        <InputGroup>
          <InputGroupAddon>
            <i class="pi pi-user"></i>
          </InputGroupAddon>
          <InputText
            type="text"
            v-model="name"
            placeholder="Your name"
            size="small"
          />
        </InputGroup>
        <InputGroup>
          <InputGroupAddon>
            <i class="pi pi-globe"></i>
          </InputGroupAddon>
          <InputText
            type="text"
            v-model="website"
            placeholder="Your website"
            size="small"
          />
        </InputGroup>
        <InputGroup>
          <InputGroupAddon>
            <i class="pi pi-github"></i>
          </InputGroupAddon>
          <InputText
            type="text"
            v-model="github"
            placeholder="Your github url"
            size="small"
          />
        </InputGroup>
        <InputGroup>
          <InputGroupAddon>
            <i class="pi pi-linkedin"></i>
          </InputGroupAddon>
          <InputText
            type="text"
            v-model="linkedin"
            placeholder="Your linkedin url"
            size="small"
          />
        </InputGroup>
        <InputGroup>
          <InputGroupAddon>
            <i class="pi pi-envelope"></i>
          </InputGroupAddon>
          <InputText
            type="email"
            v-model="email"
            placeholder="Your email id"
            size="small"
          />
        </InputGroup>
      </form>
    </section>
    <section>
      <h2 class="font-bold text-xl">Experience</h2>
      <form class="flex flex-col gap-2">
        <InputText
          type="text"
          v-model="name"
          placeholder="Your company"
          size="small"
        />
        <InputText
          type="text"
          v-model="name"
          placeholder="Your role"
          size="small"
        />
        <Select
          v-model="selectedJobType"
          :options="jobTypes"
          placeholder="Select job type"
          class="text-sm py-0"
        />
        <Textarea
          v-model="description"
          rows="5"
          placeholder="Describe what you did..."
          class="text-sm"
        />
        <Textarea
          v-model="skills"
          rows="5"
          placeholder="Describe what you skills/technology you worked with..."
          class="text-sm"
        />
        <div>
          <Button class="py-1 text-sm" severity="secondary">Add</Button>
        </div>
      </form>
    </section>
  </div>
</template>
