// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  pages: true,
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image-edge",
    "@nuxt/content",
    "@vueuse/nuxt",
    "@nuxtjs/color-mode",
    "nuxt-icon",
  ],
  app: {
    baseURL: '/Chronos/',  // Nome della repository su GitHub
    head: {
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
        },
        {
          href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Poppins:ital,wght@0,100;0,400;0,600;0,700;1,400&display=swap",
          rel: "stylesheet",
        },
      ],
    },
  },
  content: {
    documentDriven: true,
    markdown: {
      anchorLinks: false,
    },
  },
  colorMode: {
    classSuffix: "",
  },
  tailwindcss: {
    cssPath: "./assets/css/tailwind.css",
  },
});
