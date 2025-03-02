<template>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
    <div class="min-h-screen flex flex-col bg-white text-black">
      <header class="bg-white p-3 text-center flex flex-col md:flex-row items-center justify-between">
        <div class="flex items-center">
          <img src="/logo.png" class="w-32 mr-3" />
          <h1 class="text-3xl md:text-3xl text-black">Votre Moment</h1>
        </div>
        <nav class="flex flex-col md:flex-row justify-center">
          <NuxtLink to="/" class="md:text-xl p-3 text-black">Home</NuxtLink>
          <NuxtLink to="/services" class="md:text-xl  p-3 text-black">Services</NuxtLink>
          <NuxtLink to="/contact" class="md:text-xl  p-3 text-black">Contact</NuxtLink>
        </nav>
      </header>
      <main class="flex-grow p-5 md:p-10">
        <slot />
      </main>
      <footer class="bg-white text-black p-5 text-center">
        &copy; 2025 VOME - Votre Moment
      </footer>
    </div>
  </template>
