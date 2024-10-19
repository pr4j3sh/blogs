<script setup></script>
<template>
  <form class="flex flex-col gap-2">
    <InputText
      type="text"
      v-model="title"
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
      <Button class="py-1 text-sm" severity="secondary">Add</Button>
    </div>
  </form>
</template>
