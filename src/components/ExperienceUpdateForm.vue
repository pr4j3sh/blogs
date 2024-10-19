<script setup>
import { ref } from "vue";

const selectedJobType = ref();
const jobTypes = ref(["Fulltime", "Intern"]);
const props = defineProps({
  value: String,
  company: String,
});
</script>
<template>
  <AccordionPanel :value="value" class="py-0">
    <AccordionHeader class="py-2">{{ company }}</AccordionHeader>
    <AccordionContent class="py-0">
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
        <div class="flex gap-2">
          <DatePicker
            v-model="icondisplay"
            placeholder="from"
            showIcon
            fluid
            iconDisplay="input"
            class="text-sm py-0 w-1/2"
          />
          <DatePicker
            v-model="icondisplay"
            placeholder="to"
            showIcon
            fluid
            iconDisplay="input"
            class="text-sm py-0 w-1/2"
          />
        </div>
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
          <Button class="py-1 text-sm" severity="secondary">Update</Button>
        </div>
      </form>
    </AccordionContent>
  </AccordionPanel>
</template>
