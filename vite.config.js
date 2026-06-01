import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'
import url from 'url'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Vite plugin to simulate Vercel Serverless Functions locally under /api/*
const apiServerlessPlugin = () => ({
  name: 'api-serverless-plugin',
  configureServer(server) {
    server.middlewares.use(async (req, res, next) => {
      const parsedUrl = url.parse(req.url, true);
      const pathname = parsedUrl.pathname;
      
      // Only intercept requests starting with /api/
      if (!pathname.startsWith('/api/')) {
        return next();
      }

      try {
        let handlerPath = null;
        let routeParams = {};

        // Simple router logic matching Vercel paths
        if (pathname === '/api/products') {
          handlerPath = path.resolve(__dirname, 'api/products.js');
        } else if (pathname === '/api/admin/auth') {
          handlerPath = path.resolve(__dirname, 'api/admin/auth.js');
        } else if (pathname === '/api/admin/products') {
          handlerPath = path.resolve(__dirname, 'api/admin/products.js');
        } else if (pathname === '/api/admin/upload') {
          handlerPath = path.resolve(__dirname, 'api/admin/upload.js');
        } else if (pathname === '/api/admin/generate-details') {
          handlerPath = path.resolve(__dirname, 'api/admin/generate-details.js');
        } else if (pathname.startsWith('/api/admin/products/')) {
          const id = pathname.substring('/api/admin/products/'.length);
          if (id && !id.includes('/')) {
            handlerPath = path.resolve(__dirname, 'api/admin/products/[id].js');
            routeParams.id = id;
          }
        }

        if (handlerPath && fs.existsSync(handlerPath)) {
          // Parse request body for write actions
          let body = {};
          if (['POST', 'PUT', 'PATCH'].includes(req.method)) {
            const buffers = [];
            for await (const chunk of req) {
              buffers.push(chunk);
            }
            const dataStr = Buffer.concat(buffers).toString('utf-8');
            if (dataStr) {
              try {
                body = JSON.parse(dataStr);
              } catch {
                body = dataStr;
              }
            }
          }

          // Mock req extensions
          req.body = body;
          req.query = { ...parsedUrl.query, ...routeParams };

          // Mock res extensions
          res.status = (statusCode) => {
            res.statusCode = statusCode;
            return res;
          };
          res.json = (data) => {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(data));
          };

          // Load the module through Vite's SSR loading system to compile ESM correctly
          const module = await server.ssrLoadModule(handlerPath);
          const handler = module.default;

          if (typeof handler === 'function') {
            await handler(req, res);
            return;
          }
        }
      } catch (err) {
        console.error('Local API Simulation Error:', err);
        res.statusCode = 500;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ error: 'Local API server error', details: err.message }));
        return;
      }

      res.statusCode = 404;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: `Not found: ${pathname}` }));
    });
  }
});

// https://vite.dev/config/
import { loadEnv } from 'vite'

export default defineConfig(({ mode }) => {
  // Load env variables (including non-VITE_ prefixed ones) and inject them into process.env for API simulations
  const env = loadEnv(mode, process.cwd(), '');
  Object.assign(process.env, env);

  return {
    plugins: [react(), apiServerlessPlugin()],
    build: {
      cssTarget: 'chrome61',
    },
  };
});

