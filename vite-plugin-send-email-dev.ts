import type { Plugin } from 'vite';
import { loadEnv } from 'vite';
import { sendContactEmail, type ContactEmailPayload } from './server/sendContactEmail';

/**
 * Handles POST /api/send-email during `vite dev`. Vercel serverless (`api/send-email.ts`)
 * is not mounted by the Vite dev server, and the Railway proxy had no such route (404).
 */
export function sendEmailDevApiPlugin(): Plugin {
  return {
    name: 'send-email-dev-api',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const pathname = req.url?.split('?')[0] ?? '';
        if (pathname !== '/api/send-email' || req.method !== 'POST') {
          return next();
        }

        const chunks: Buffer[] = [];
        for await (const chunk of req) {
          chunks.push(Buffer.from(chunk as Buffer));
        }
        const raw = Buffer.concat(chunks).toString('utf8');

        let body: unknown;
        try {
          body = raw ? JSON.parse(raw) : {};
        } catch {
          res.statusCode = 400;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ error: 'Invalid JSON' }));
          return;
        }

        const fileEnv = loadEnv(server.config.mode, process.cwd(), '');
        const mergedEnv = { ...process.env, ...fileEnv } as NodeJS.ProcessEnv;
        const result = await sendContactEmail(mergedEnv, body as ContactEmailPayload);

        res.setHeader('Content-Type', 'application/json');
        if (!result.ok) {
          res.statusCode = result.status;
          res.end(JSON.stringify({ error: result.error }));
          return;
        }
        res.statusCode = 200;
        res.end(JSON.stringify({ success: true, message: 'Emails sent successfully' }));
      });
    },
  };
}
