<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
  <div class="min-h-screen flex flex-col bg-white text-black">
    <header class="bg-white p-5 text-center flex flex-col md:flex-row items-center justify-between w-full">
      <div class="flex items-center">
        <img src="/logo.png" alt="VOME Logo" class="p-2 h-16 w-25 mr-3" />
      </div>
      <button class="md:hidden p-3" @click="toggleMenu">☰</button>
      <nav :class="['w-full md:w-auto flex flex-col md:flex-row', { 'hidden': !menuOpen, 'block': menuOpen, 'md:flex': true }]">
        <NuxtLink to="/" class="text-2xl p-3 text-black">Home</NuxtLink>
        <NuxtLink to="/services" class="text-2xl p-3 text-black">Services</NuxtLink>
        <NuxtLink to="/contact" class="text-2xl p-3 text-black">Contact</NuxtLink>
      </nav>
    </header>
    <main class="flex-grow w-full">
      <slot />
    </main>
    <footer class="bg-white text-black p-5 text-center w-full">
      &copy; 2025 VOME - Votre Moment
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};
</script>
