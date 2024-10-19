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
          v-model="reconition"
          placeholder="Recognition title"
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
        <Textarea
          v-model="description"
          rows="5"
          placeholder="Describe what you did..."
          class="text-sm"
        />
        <div>
          <Button class="py-1 text-sm" severity="secondary">Update</Button>
        </div>
      </form>
    </AccordionContent>
  </AccordionPanel>
</template>
