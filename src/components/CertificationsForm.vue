<script setup></script>
<template>
  <form class="flex flex-col gap-2">
    <InputText
      type="text"
      v-model="title"
      placeholder="Certificate title"
      size="small"
    />
    <InputText
      type="text"
      v-model="title"
      placeholder="Certificate authority"
      size="small"
    />
    <InputText
      type="text"
      v-model="link"
      placeholder="View link"
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
      <Button class="py-1 text-sm" severity="secondary">Add</Button>
    </div>
  </form>
</template>
