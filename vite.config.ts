import { fileURLToPath } from "node:url"
import tailwindcss from "@tailwindcss/vite"
import { voidReact } from "@void/react/plugin"
import { defineConfig } from "vite"
import { voidPlugin } from "void"

export default defineConfig({
  base: process.env.BASE_PATH ?? "/",
  plugins: [voidPlugin(), voidReact(), tailwindcss()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL(".", import.meta.url)),
    },
  },
})
