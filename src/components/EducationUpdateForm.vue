<script setup>
const props = defineProps({
  value: String,
  title: String,
});
</script>
<template>
  <AccordionPanel :value="value" class="py-0">
    <AccordionHeader class="py-2">{{ title }}</AccordionHeader>
    <AccordionContent class="py-0">
      <form class="flex flex-col gap-2">
        <InputText
          type="text"
          v-model="degree"
          placeholder="Your degree/specialization"
          size="small"
        />
        <InputText
          type="text"
          v-model="college"
          placeholder="Your college/school"
          size="small"
        />
        <InputText
          type="text"
          v-model="grade"
          placeholder="Your grades"
          size="small"
        />
        <div class="flex gap-2">
          <DatePicker
            v-model="icondisplay"
            placeholder="from"
            showIcon
            fluid
            iconDisplay="input"
            class="text-sm py-0 w-1/2"
          />
          <DatePicker
            v-model="icondisplay"
            placeholder="to"
            showIcon
            fluid
            iconDisplay="input"
            class="text-sm py-0 w-1/2"
          />
        </div>
        <div>
          <Button class="py-1 text-sm" severity="secondary">Update</Button>
        </div>
      </form>
    </AccordionContent>
  </AccordionPanel>
</template>
