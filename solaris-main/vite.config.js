import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// This is required for Vite to work correctly with CodeSandbox
const server = process.env.APP_ENV === "sandbox" ? { hmr: { clientPort: 443 } } : {};

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0', // Allow access from any IP
    port: 3000, // Change the port as needed
    open: true, // Automatically open the browser
  },
  resolve: {
    alias: {
      "@src": resolve(__dirname, "./src"),
    },
  },
  plugins: [react()],
});
