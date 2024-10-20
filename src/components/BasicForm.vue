<script setup>
import { ref } from "vue";
import { store } from "../lib/store.js";

const form = ref({
  name: "",
  website: "",
  github: "",
  linkedin: "",
  email: "",
  phone: "",
});

function submit() {
  store.basic = form.value;
}
</script>

<template>
  <form class="flex flex-col gap-2" @submit.prevent="submit">
    <div class="flex gap-2">
      <InputGroup>
        <InputGroupAddon>
          <i class="pi pi-user"></i>
        </InputGroupAddon>
        <InputText
          type="text"
          v-model="form.name"
          placeholder="Your name"
          size="small"
        />
      </InputGroup>
      <InputGroup>
        <InputGroupAddon>
          <i class="pi pi-globe"></i>
        </InputGroupAddon>
        <InputText
          type="text"
          v-model="form.website"
          placeholder="Your website"
          size="small"
        />
      </InputGroup>
    </div>
    <div class="flex gap-2">
      <InputGroup>
        <InputGroupAddon>
          <i class="pi pi-github"></i>
        </InputGroupAddon>
        <InputText
          type="text"
          v-model="form.github"
          placeholder="Your github url"
          size="small"
        />
      </InputGroup>
      <InputGroup>
        <InputGroupAddon>
          <i class="pi pi-linkedin"></i>
        </InputGroupAddon>
        <InputText
          type="text"
          v-model="form.linkedin"
          placeholder="Your linkedin url"
          size="small"
        />
      </InputGroup>
    </div>
    <div class="flex gap-2">
      <InputGroup>
        <InputGroupAddon>
          <i class="pi pi-envelope"></i>
        </InputGroupAddon>
        <InputText
          type="email"
          v-model="form.email"
          placeholder="Your email id"
          size="small"
        />
      </InputGroup>
      <InputGroup>
        <InputGroupAddon>
          <i class="pi pi-phone"></i>
        </InputGroupAddon>
        <InputText
          type="text"
          v-model="form.phone"
          placeholder="Your phone number"
          size="small"
        />
      </InputGroup>
    </div>
    <div>
      <Button class="py-1 text-sm" severity="secondary" type="submit"
        >Save</Button
      >
    </div>
  </form>
</template>
