import { Hono } from 'https://deno.land/x/hono@v3.3.0/mod.ts';
import { serveStatic } from 'https://deno.land/x/hono@v3.3.0/middleware.ts';

const app = new Hono();

app.get('/', serveStatic({ path: './public/index.html' }));

Deno.serve({ port: 8787 }, app.fetch);
