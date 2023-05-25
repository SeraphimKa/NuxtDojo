// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  tailwindcss: {
    config: {
      content: ["./src/**/*.{vue,js,jsx,ts,tsx}", "./index.html"],
      theme: {
        extend: {},
      },
      plugins: [],
    },
  },
});
