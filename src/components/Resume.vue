<script setup></script>
<template>
  <div class="p-2 flex flex-col gap-2">
    <header class="flex flex-col items-center gap-1">
      <h1 class="font-bold text-2xl">John Doe</h1>
      <ul class="flex gap-x-4">
        <Link icon="pi pi-envelope" link="#" text="email@example.com" />
        <Link icon="pi pi-github" link="#" text="github" />
        <Link icon="pi pi-linkedin" link="#" text="linkedin" />
        <Link icon="pi pi-globe" link="#" text="website" />
      </ul>
    </header>
    <main>
      <Experience />
    </main>
  </div>
</template>
