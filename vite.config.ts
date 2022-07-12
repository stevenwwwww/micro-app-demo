import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    port:3021,
  },
  css:{
    preprocessorOptions:{
      less:{
        javascriptEnabled:true
      }
    }
  }
})
