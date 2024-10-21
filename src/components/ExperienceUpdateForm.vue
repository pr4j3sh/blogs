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
  company: props.item.company,
  role: props.item.role,
  type: props.item.type,
  from: props.item.from,
  to: props.item.to,
  description: props.item.description,
  tech: props.item.tech,
});

function submit() {
  const data = cloneDeep(form.value);

  store.experience = store.experience.map((exp) =>
    exp.id === data.id ? { ...exp, ...data, id: exp.id } : exp,
  );
}
</script>
<template>
  <AccordionPanel :value="value" class="py-0">
    <AccordionHeader class="py-2">{{ title }}</AccordionHeader>
    <AccordionContent class="py-0">
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
            >Update</Button
          >
        </div>
      </form>
    </AccordionContent>
  </AccordionPanel>
</template>
