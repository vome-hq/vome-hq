<template>
  <div>
    <div class="relative h-[500px] md:h-[700px] bg-cover bg-center w-full" style="background-image: url('/hero.jpg');">
      <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-center w-full">
        <div class="text-white p-5 md:p-10">
          <h2 class="text-4xl md:text-6xl font-bold">Welcome to VOME</h2>
          <p class="mt-4 text-lg md:text-xl">Your Digital Transformation Partner</p>
        </div>
      </div>
    </div>

    <section class="grid grid-cols-1 md:grid-cols-2 w-full my-10">
      <div class="bg-cover bg-center h-[400px] w-full" style="background-image: url('/details.jpg');"></div>
      <div class="flex items-center justify-center p-10 bg-gray-100 w-full">
        <div class="text-center">
          <h2 class="text-3xl font-bold">Who are we?</h2>
          <p class="mt-4 text-lg">Kami adalah temanmu yang akan membantumu dalam mengembangkan usahamu lebih jauh lagi</p>
        </div>
      </div>
    </section>

    <section class="grid grid-cols-1 md:grid-cols-2 w-full my-10">
      <div class="flex items-center justify-center p-10 bg-gray-100 order-2 md:order-1 w-full">
        <div class="text-center">
          <h2 class="text-3xl font-bold">Recent Projects</h2>
          <p class="mt-4 text-lg">Our last project, with SMK Negeri 1 Kubutambahan</p>
        </div>
      </div>
      <div class="bg-cover bg-center h-[400px] order-1 md:order-2 w-full" style="background-image: url('/projects.JPG');"></div>
    </section>

    <section class="grid grid-cols-1 md:grid-cols-2 w-full my-10">
      <div class="bg-cover bg-center h-[400px] w-full" style="background-image: url('/whyus.jpg');"></div>
      <div class="flex items-center justify-center p-10 bg-gray-100 w-full">
        <div class="text-center">
          <h2 class="text-3xl font-bold">Why Us?</h2>
          <p class="mt-4 text-lg">We provide tailored solutions with cutting-edge technology.</p>
        </div>
      </div>
    </section>
  </div>
  
  <div class="w-full flex justify-center pb-10">
    <NuxtLink to="/contact">
      <button class="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-yellow-400 to-orange-500 group-hover:from-yellow-400 group-hover:to-orange-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-yellow-300">
        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-transparent text-2xl">
          Contact Us!
        </span>
      </button>
    </NuxtLink>
  </div>
</template>