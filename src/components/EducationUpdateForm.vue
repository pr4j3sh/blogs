<script setup>
import { ref } from "vue";
import { store } from "../lib/store.js";
import cloneDeep from "lodash/cloneDeep";

const props = defineProps({
  value: String,
  title: String,
  item: Object,
});

const form = ref({
  id: props.item.id,
  degree: props.item.degree,
  college: props.item.college,
  grades: props.item.grades,
  from: props.item.from,
  to: props.item.to,
});

function submit() {
  const data = cloneDeep(form.value);

  store.education = store.education.map((exp) =>
    exp.id === data.id ? { ...exp, ...data, id: exp.id } : exp,
  );
}

function handleDelete() {
  store.education = store.education.filter((exp) => exp.id !== props.item.id);
}
</script>
<template>
  <AccordionPanel :value="value" class="py-0">
    <AccordionHeader class="py-2">{{ title }}</AccordionHeader>
    <AccordionContent class="py-0">
      <form class="flex flex-col gap-2" @submit.prevent="submit">
        <InputText
          type="text"
          v-model="form.degree"
          placeholder="Your degree/specialization"
          size="small"
        />
        <InputText
          type="text"
          v-model="form.college"
          placeholder="Your college/school"
          size="small"
        />
        <InputText
          type="text"
          v-model="form.grades"
          placeholder="Your grades"
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
