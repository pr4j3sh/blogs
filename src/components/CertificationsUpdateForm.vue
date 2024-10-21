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
  name: props.item.name,
  authority: props.item.authority,
  url: props.item.url,
  from: props.item.from,
  to: props.item.to,
});

function submit() {
  const data = cloneDeep(form.value);

  store.certifications = store.certifications.map((exp) =>
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
          v-model="form.name"
          placeholder="Certificate title"
          size="small"
        />
        <InputText
          type="text"
          v-model="form.authority"
          placeholder="Certificate authority"
          size="small"
        />
        <InputText
          type="text"
          v-model="form.url"
          placeholder="View link"
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
        <div>
          <Button class="py-1 text-sm" severity="secondary" type="submit"
            >Update</Button
          >
        </div>
      </form>
    </AccordionContent>
  </AccordionPanel>
</template>
