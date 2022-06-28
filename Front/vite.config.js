import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from "path"


const root = resolve(__dirname, "src");
const outDir = resolve(__dirname, "dist");


// https://vitejs.dev/config/
export default defineConfig({
  root,
  plugins: [react()],
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, "index.html"),
        swap: resolve(root, "swap", "index.html"),
        home: resolve(root, "home", "index.html"),
        gif: resolve(root, "gif", "index.html"),
        token: resolve(root, "token", "index.html"),
        contact: resolve(root, "contact", "index.html"),
      }
    }
  }
})
