// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    head: {
      title: "VOME - Votre Moment",
      meta: [{ name: "description", content: "VOME is a Digital Agency Company providing modern solutions." }],
    },
  },
  devtools: { enabled: true },
  routeRules: {
    // prerender index route by default
    '/': { prerender: true },
  },
});
