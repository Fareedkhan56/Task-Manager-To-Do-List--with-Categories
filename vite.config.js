// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  // other Vite configuration options
  server: {
    // Configure the dev server
    middleware: (app) => {
      app.use((req, res, next) => {
        console.log('Request:', req.url);
        if (req.path.endsWith('.jsx')) {
          console.log('Setting Content-Type for JSX file:', req.url);
          res.setHeader('Content-Type', 'text/jsx');
        }
        next();
      });
    },
  },
});
