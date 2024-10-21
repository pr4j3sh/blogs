<script setup>
import { ref } from "vue";
import { store } from "../lib/store.js";
import cloneDeep from "lodash/cloneDeep";

const props = defineProps({
  value: String,
  title: String,
  item: Object,
});

const types = ref(["Fulltime", "Intern"]);

const form = ref({
  id: props.item.id,
  title: props.item.title,
  url: props.item.url,
  from: props.item.from,
  to: props.item.to,
  description: props.item.description,
  tech: props.item.tech,
});

function submit() {
  const data = cloneDeep(form.value);

  store.projects = store.projects.map((exp) =>
    exp.id === data.id ? { ...exp, ...data, id: exp.id } : exp,
  );
}

function handleDelete() {
  store.projects = store.projects.filter((exp) => exp.id !== props.item.id);
}
</script>
<template>
  <AccordionPanel :value="value" class="py-0">
    <AccordionHeader class="py-2">{{ title }}</AccordionHeader>
    <AccordionContent class="py-0">
      <form class="flex flex-col gap-2" @submit.prevent="submit">
        <InputText
          type="text"
          v-model="form.title"
          placeholder="Project title"
          size="small"
        />
        <InputText
          type="text"
          v-model="form.url"
          placeholder="Demo link"
          size="small"
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
        <div class="flex items-center gap-2">
          <Button class="py-1 text-sm" severity="secondary" type="submit"
            >Update</Button
          >
          <Button class="py-1 text-sm" severity="danger" @click="handleDelete"
            >Delete</Button
          >
        </div>
      </form>
    </AccordionContent>
  </AccordionPanel>
</template>
