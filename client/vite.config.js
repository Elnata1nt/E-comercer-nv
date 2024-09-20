import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // Adicione esta linha

// Exporte a configuração do Vite
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Exemplo de alias
    },
  },
});
