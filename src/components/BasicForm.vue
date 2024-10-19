<script setup>
const props = defineProps({
  modelValue: Object,
});
const emit = defineEmits(["update:modelValue"]);

const localBasic = ref({ ...props.modelValue });

watch(localBasic, (newVal) => {
  emit("update:modelValue", newVal);
});
</script>
<template>
  <form class="flex flex-col gap-2">
    <div class="flex gap-2">
      <InputGroup>
        <InputGroupAddon>
          <i class="pi pi-user"></i>
        </InputGroupAddon>
        <InputText
          type="text"
          v-model="localBasic.name"
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
          v-model="localBasic.website"
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
          v-model="localBasic.github"
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
          v-model="localBasic.linkedin"
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
          v-model="localBasic.email"
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
          v-model="localBasic.phone"
          placeholder="Your phone number"
          size="small"
        />
      </InputGroup>
    </div>
  </form>
</template>
