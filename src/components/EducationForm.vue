<script setup>
import { ref } from "vue";
import { store } from "../lib/store.js";
import { v4 as uuid } from "uuid";
import cloneDeep from "lodash/cloneDeep";

const form = ref({
  id: uuid(),
  degree: "",
  college: "",
  grades: "",
  from: "",
  to: "",
});

function submit() {
  const data = cloneDeep(form.value);
  store.education.push(data);
}
</script>
<template>
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
    <div>
      <Button class="py-1 text-sm" severity="secondary" type="submit"
        >Add</Button
      >
    </div>
  </form>
</template>
