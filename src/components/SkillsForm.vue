<script setup>
import { ref } from "vue";
import { store } from "../lib/store.js";
import { v4 as uuid } from "uuid";
import cloneDeep from "lodash/cloneDeep";

const form = ref({
  languages: "",
  libraries: "",
  tools: "",
});

function submit() {
  const data = cloneDeep(form.value);
  store.skills = data;
}
</script>
<template>
  <form class="flex flex-col gap-2" @submit.prevent="submit">
    <Textarea
      v-model="form.languages"
      rows="5"
      placeholder="Languages/technologies you know..."
      class="text-sm"
    />
    <Textarea
      v-model="form.libraries"
      rows="5"
      placeholder="Libraries/frameworks you know..."
      class="text-sm"
    />
    <Textarea
      v-model="form.tools"
      rows="5"
      placeholder="Tools you use..."
      class="text-sm"
    />
    <div>
      <Button class="py-1 text-sm" severity="secondary" type="submit"
        >Add</Button
      >
    </div>
  </form>
</template>
