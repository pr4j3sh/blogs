<script setup></script>
<template>
  <form class="flex flex-col gap-2">
    <div class="flex gap-2">
      <InputGroup>
        <InputGroupAddon>
          <i class="pi pi-user"></i>
        </InputGroupAddon>
        <InputText
          type="text"
          v-model="name"
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
          v-model="website"
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
          v-model="github"
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
          v-model="linkedin"
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
          v-model="email"
          placeholder="Your email id"
          size="small"
        />
      </InputGroup>
      <InputGroup>
        <InputGroupAddon>
          <i class="pi pi-phone"></i>
        </InputGroupAddon>
        <InputText
          type="tel"
          v-model="phone"
          placeholder="Your phone number"
          size="small"
        />
      </InputGroup>
    </div>
  </form>
</template>
