import { defineConfig } from "vite";
import dotenv from "dotenv";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  define: {
    "process.env": JSON.stringify(dotenv.config().parsed),
  },
});
