<script setup>
import { ref } from "vue";
import { store } from "../lib/store.js";

const types = ref(["Fulltime", "Intern"]);

const form = ref({
  company: "",
  role: "",
  type: "",
  from: "",
  to: "",
  description: "",
  tech: "",
});

function submit() {
  store.experience.push(form.value);
}
</script>
<template>
  <form class="flex flex-col gap-2" @submit.prevent="submit">
    <InputText
      type="text"
      v-model="form.company"
      placeholder="Your company"
      size="small"
    />
    <InputText
      type="text"
      v-model="form.role"
      placeholder="Your role"
      size="small"
    />
    <Select
      v-model="form.type"
      :options="types"
      placeholder="Select job type"
      class="text-sm py-0"
    />
    <div class="flex gap-2">
      <DatePicker
        v-model="form.from"
        placeholder="from"
        showIcon
        fluid
        iconDisplay="input"
        class="text-sm py-0 w-1/2"
      />
      <DatePicker
        v-model="form.to"
        placeholder="to"
        showIcon
        fluid
        iconDisplay="input"
        class="text-sm py-0 w-1/2"
      />
    </div>
    <Textarea
      v-model="form.description"
      rows="5"
      placeholder="Describe what you did..."
      class="text-sm"
    />
    <Textarea
      v-model="form.tech"
      rows="5"
      placeholder="Describe what you skills/technology you worked with..."
      class="text-sm"
    />
    <div>
      <Button class="py-1 text-sm" severity="secondary" type="submit"
        >Add</Button
      >
    </div>
  </form>
</template>
