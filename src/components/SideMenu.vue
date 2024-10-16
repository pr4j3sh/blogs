<template>
  <div class="card flex justify-center h-full">
    <!-- Start section -->
    <div class="w-full md:w-60 flex flex-col justify-between">
      <div>
        <router-link to="/" class="flex items-center gap-1 px-4 py-2">
          <i class="pi pi-file"></i>
          <span class="font-bold ml-1">r3sume</span>
        </router-link>

        <hr />
        <!-- Resumes Section -->
        <div class="p-2">
          <span class="text-primary font-bold">Resumes</span>
          <ul>
            <li class="flex items-center py-2">
              <i class="pi pi-plus mr-2"></i>
              <span>New</span>
            </li>
            <li class="flex items-center py-2">
              <i class="pi pi-file mr-2"></i>
              <span>John's Resume</span>
            </li>
            <li class="flex items-center py-2">
              <i class="pi pi-file mr-2"></i>
              <span>Graphic's Resume</span>
            </li>
          </ul>
        </div>

        <!-- Separator -->
        <hr />

        <!-- Published Section -->
        <div class="p-2">
          <span class="text-primary font-bold">Published</span>
          <ul>
            <li class="flex items-center py-2">
              <i class="pi pi-file mr-2"></i>
              <span>John's Resume</span>
            </li>
          </ul>
        </div>

        <!-- Separator -->
        <hr />
      </div>
      <div>
        <hr />

        <!-- Profile Section -->
        <div class="p-2">
          <span class="text-primary font-bold">Profile</span>
          <ul>
            <li class="flex items-center py-2">
              <i class="pi pi-gift mr-2"></i>
              <span>Premium</span>
            </li>
            <li class="flex items-center py-2">
              <i class="pi pi-wallet mr-2"></i>
              <span>Credits</span>
              <Badge class="ml-auto" :value="200" />
            </li>
            <li class="flex items-center py-2">
              <i class="pi pi-sign-out mr-2"></i>
              <span>Logout</span>
            </li>
          </ul>
        </div>

        <!-- Separator -->
        <hr />

        <!-- End section -->
        <div
          class="relative overflow-hidden w-full border-0 bg-transparent flex items-center p-2 pl-4 rounded-none cursor-pointer"
        >
          <Avatar
            image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
            class="mr-2"
            shape="circle"
          />
          <span class="inline-flex flex-col items-start">
            <span class="font-bold">John Doe</span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// No need to pass items or use the Menu component anymore
</script>
