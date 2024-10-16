<script setup>
import InputText from "primevue/inputtext";
</script>

<template>
  <div>
    <form>
      <input type="email" placeholder="Email" v-model="email" />
      <input type="password" placeholder="Password" v-model="password" />
      <input type="text" placeholder="Name" v-model="name" />
      <button type="button" @click="login(email, password)">Login</button>
      <button type="button" @click="register">Register</button>
      <button type="button" @click="logout">Logout</button>
    </form>
  </div>
</template>
