<script setup>
import { ref } from "vue";
import { store } from "../lib/store.js";
import { v4 as uuid } from "uuid";
import cloneDeep from "lodash/cloneDeep";

const form = ref({
  name: "",
  from: "",
  to: "",
  description: "",
});

function submit() {
  const data = { ...cloneDeep(form.value), id: uuid() };
  store.recognitions.push(data);
}
</script>
<template>
  <form class="flex flex-col gap-2" @submit.prevent="submit">
    <InputText
      type="text"
      v-model="form.name"
      placeholder="Recognition title"
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
    <div>
      <Button class="py-1 text-sm" severity="secondary" type="submit"
        >Add</Button
      >
    </div>
  </form>
</template>
