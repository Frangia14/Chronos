// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  pages: true,
  /**
   * Nuxt.js modules
   */
  modules: [
    // Doc: https://tailwindcss.nuxtjs.org/
    "@nuxtjs/tailwindcss",

    // Doc: https://image.nuxtjs.org/
    "@nuxt/image-edge",

    // Doc: https://content.nuxtjs.org/
    "@nuxt/content",

    // Doc: https://vueuse.org/guide/#installation
    "@vueuse/nuxt",

    // Doc: https://color-mode.nuxtjs.org/
    "@nuxtjs/color-mode",

    // Doc: https://github.com/nuxt-modules/icon
    "nuxt-icon",
  ],

  /**
   * Configurazione per GitHub Pages
   * Importante: aggiorna il base URL per GitHub Pages
   */
  app: {
    baseURL: '/Chronos/', // Base URL per GitHub Pages (assicurati che sia corretto per il nome della tua repository)
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
          href: "https://fonts.googleapis.com/css2?Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Poppins:ital,wght@0,100;0,400;0,600;0,700;1,400&display=swap",
          rel: "stylesheet",
        },
      ],
    },
  },

  content: {
    // https://content.nuxtjs.org/api/configuration
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

  // Configurazione per le immagini
  image: {
    // Se usi immagini dinamiche con il modulo `@nuxt/image`, questo modulo si occupa della gestione delle immagini
    // Puoi usare i percorsi relativi per caricare le immagini correttamente
    domains: ['https://your-domain.com', 'githubusercontent.com'], // Aggiungi i domini se usi immagini esterne
    dir: 'assets/images', // Configura la cartella in cui si trovano le immagini statiche
  },

  // Assicurati che i percorsi delle immagini siano corretti
  build: {
    // Puoi usare questo per includere la cartella `static` che contiene immagini se non lo hai già fatto
    extend(config, { isDev, isClient }) {
      if (isClient) {
        config.resolve.alias['~static'] = path.resolve(__dirname, 'static')
      }
    }
  },
});
