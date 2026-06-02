import type { VercelRequest, VercelResponse } from '@vercel/node';
import { sendContactEmail } from '../server/sendContactEmail.js';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const result = await sendContactEmail(process.env, req.body ?? {});
  if (!result.ok) {
    return res.status(result.status).json({ error: result.error });
  }
  return res.status(200).json({ success: true, message: 'Emails sent successfully' });
}
