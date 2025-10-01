import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig({
  base: "/tesisathanem/", // <<< kesinlikle bu satır olmalı
  server: {
    port: 8080,
  },
  plugins: [react(), componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
