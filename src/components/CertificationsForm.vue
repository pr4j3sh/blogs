<script setup>
import { ref } from "vue";
import { store } from "../lib/store.js";
import { v4 as uuid } from "uuid";
import cloneDeep from "lodash/cloneDeep";

const form = ref({
  name: "",
  authority: "",
  url: "",
  from: "",
  to: "",
});

function submit() {
  const data = { ...cloneDeep(form.value), id: uuid() };
  store.certifications.push(data);
}
</script>
<template>
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
        >Add</Button
      >
    </div>
  </form>
</template>
