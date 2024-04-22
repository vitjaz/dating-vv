// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: "/dating-vv/",
    buildAssetsDir: "assets",
  },
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@nuxtjs/google-fonts",
    "@nuxt/image",
    "@vueuse/motion/nuxt",
    "nuxt-primevue",
  ],
  colorMode: {
    preference: "cupcake",
    fallback: "light",
    dataValue: "theme",
    classSuffix: "",
  },
  css: [
    "@/assets/css/main.css",
    "primevue/resources/themes/aura-light-green/theme.css",
  ],
  googleFonts: {
    families: {
      Montserrat: true,
      Alegreya: true,
      Lobster: true,
      Pacifico: true,
    },
    download: true,
    useStylesheet: true,
    subsets: "cyrillic",
  },
  primevue: {
    components: {
      include: ["Galleria"],
      prefix: "Prime",
    },
  },
});
