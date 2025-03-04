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
          <h2 class="text-3xl font-bold">Details to Our Enterprise</h2>
          <p class="mt-4 text-lg">Discover how VOME leads the digital transformation journey.</p>
        </div>
      </div>
    </section>

    <section class="grid grid-cols-1 md:grid-cols-2 w-full my-10">
      <div class="flex items-center justify-center p-10 bg-gray-100 order-2 md:order-1 w-full">
        <div class="text-center">
          <h2 class="text-3xl font-bold">Recent Projects</h2>
          <p class="mt-4 text-lg">Explore our latest works in web development, branding, and more.</p>
        </div>
      </div>
      <div class="bg-cover bg-center h-[400px] order-1 md:order-2 w-full" style="background-image: url('/projects.jpg');"></div>
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
</template>