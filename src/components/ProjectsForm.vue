<script setup></script>
<template>
  <form class="flex flex-col gap-2">
    <InputText
      type="text"
      v-model="title"
      placeholder="Project title"
      size="small"
    />
    <InputText
      type="text"
      v-model="link"
      placeholder="Demo link"
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
    <Textarea
      v-model="skills"
      rows="5"
      placeholder="Describe what you skills/technology you worked with..."
      class="text-sm"
    />
    <div>
      <Button class="py-1 text-sm" severity="secondary">Add</Button>
    </div>
  </form>
</template>
