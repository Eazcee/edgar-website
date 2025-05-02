import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
<<<<<<< HEAD
import browsersync from 'vite-plugin-browser-sync';

export default defineConfig({
  plugins: [
    laravel({
      input: ['resources/css/app.css', 'resources/js/app.js'],
      refresh: true,
    }),
    browsersync({
      proxy: 'http://localhost:8080',   // Laravel dev server
      open: false,
      host: '0.0.0.0',
      port: 3000,
    }),
  ],
=======

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
    ],
>>>>>>> e10112c51e04f562f6cf3a3e6616a1231060a956
});
