// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  build: {
    transpile: ["vue-sonner", "vue-advanced-cropper"],
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@formkit/nuxt",
    "@nuxtjs/color-mode",
    "nuxt-swiper",
  ],
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    /* head: {
      htmlAttrs: {
        lang: "en",
        class: "h-full",
      },
      bodyAttrs: {
        class: "antialiased bg-gray-50 dark:bg-black min-h-screen",
      },
    }, */
    /* head: {
      htmlAttrs: {
        class: "max-width: 100% overflow-x: hidden",
      },
    }, */
  },
  colorMode: {
    preference: "system", // default theme
    dataValue: "theme", // activate data-theme in <html> tag
    fallback: "light",
  },
  runtimeConfig: {
    public: {
      baseURL:
        process.env.BASE_URL || "https://paloverde-production.up.railway.app/",
    },
  },
});
