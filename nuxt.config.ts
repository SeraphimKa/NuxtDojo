// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    head: {
      title: "Nuxt Dojo",
      meta: [{ name: "description", content: "Everything about Nuxt" }],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Material+Icons",
        },
      ],
    },
  },
  tailwindcss: {
    config: {
      content: ["./src/**/*.{vue,js,jsx,ts,tsx}", "./index.html"],
      theme: {
        extend: {},
      },
      plugins: [],
    },
  },
  runtimeConfig: {
    jokeApiKey: process.env.JOKE_API_KEY,
  },
});
