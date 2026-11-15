import { defineConfig } from "void/config"

export default defineConfig({
  output: "static",
  routing: {
    typedRoutes: true,
    trailingSlash: true,
  },
  worker: {
    compatibility_date: "2026-02-24",
  },
  head: {
    titleTemplate: "%s | interactive-inc/ui",
    htmlAttrs: { lang: "ja" },
    bodyAttrs: { class: "font-mono antialiased" },
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
    link: [
      { rel: "icon", href: "/favicon.ico" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=M+PLUS+1+Code:wght@100..700&display=swap",
      },
    ],
    script: [
      {
        innerHTML:
          'try{var t=localStorage.getItem("inta-ui-theme");if(t==="dark"||(t!=="light"&&matchMedia("(prefers-color-scheme: dark)").matches))document.documentElement.classList.add("dark")}catch(e){}',
      },
    ],
  },
})
