import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Set host to 0.0.0.0 to allow access from external devices on the same network
    host: "0.0.0.0",
    // Disable strict file system serve mode if necessary
    fs: {
      strict: false,
    },
    // Set the port to 3000
    port: 3000,
  },
});
