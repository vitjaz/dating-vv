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
  ],
  colorMode: {
    preference: "cupcake",
    fallback: "light",
    dataValue: "theme",
    classSuffix: "",
  },
  css: ["@/assets/css/main.css"],
  googleFonts: {
    families: {
      Montserrat: true,
    },
    download: true,
    useStylesheet: true,
    subsets: "cyrillic",
  },
});
