import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

import react from "@astrojs/react";

import svelte from "@astrojs/svelte";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [icon(), react(), svelte(), mdx()],
  markdown: {
    shikiConfig: {
      theme: "dracula",
      wrap: true,
    },
  },
});