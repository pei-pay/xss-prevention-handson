import { serveStatic } from 'https://deno.land/x/hono@v3.3.0/middleware.ts';
import { Hono } from 'https://deno.land/x/hono@v3.3.0/mod.ts';

const app = new Hono();

app.get(
  '/*',
  serveStatic({
    root: './public',
    rewriteRequestPath: (path) => {
      return path.concat('.html');
    },
  })
);

Deno.serve({ port: 8787 }, app.fetch);