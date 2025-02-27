<template>
    <div class="min-h-screen flex flex-col">
        <header class="bg-black text-white p-5 text-center">
            <h1 class="text-3xl md:text-4xl">VOME - Votre Moment</h1>
            <nav class="flex flex-col md:flex-row justify-center">
                <NuxtLink to="/" class="p-3">Home</NuxtLink>
                <NuxtLink to="/services" class="p-3">Services</NuxtLink>
                <NuxtLink to="/contact" class="p-3">Contact</NuxtLink>
            </nav>
        </header>
        <main class="flex-grow p-5 md:p-10">
            <slot />
        </main>
        <footer class="bg-black text-white p-5 text-center">
            &copy; 2025 VOME - Votre Moment
        </footer>
    </div>
</template>