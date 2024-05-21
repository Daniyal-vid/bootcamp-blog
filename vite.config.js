import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';
import postcssConfig from './postcss.config.js'; // Update this line


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),],
  
})
