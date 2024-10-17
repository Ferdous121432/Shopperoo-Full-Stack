import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { builderDevTools } from "@builder.io/dev-tools/vite";
// import { builderDevTools } from "@builder.io/dev-tools/vite";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/

export default defineConfig({
  // plugins: [react(), eslint(), builderDevTools()],
  plugins: [react(), eslint(), builderDevTools()],
});
