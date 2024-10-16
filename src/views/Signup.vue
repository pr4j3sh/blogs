<script setup>
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import Divider from "primevue/divider";
</script>

<template>
  <div class="flex-grow flex flex-col items-center gap-4">
    <div class="w-full md:w-2/6 flex flex-col gap-4">
      <div>
        <h2 class="text-2xl font-bold">Build it. Share it.</h2>
        <h2 class="text-2xl font-bold text-zinc-500">
          Create you r3sume account
        </h2>
      </div>
      <Button
        class="font-bold py-1"
        icon="pi pi-google"
        label="Continue with Google"
        severity="secondary"
      />
      <Button
        class="font-bold py-1"
        icon="pi pi-github"
        label="Continue with Github"
        severity="secondary"
      />
      <Divider />
      <form class="flex flex-col gap-2">
        <InputText
          type="email"
          v-model="email"
          size="small"
          placeholder="email@example.com"
        />
        <InputText
          type="password"
          v-model="password"
          size="small"
          placeholder="your password"
        />
        <Button class="font-bold py-1" label="Sign Up" />
      </form>
    </div>
  </div>
</template>
