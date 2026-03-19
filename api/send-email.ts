import nodemailer from 'nodemailer';
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, budget, message, services, source } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  const transporter = nodemailer.createTransport({
    host: 'gmail.com',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: 'kandelwalyatharth39@gmail.com',
      subject: `New Inquiry from ${name} [${source || 'Contact Form'}]`,
      replyTo: email,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #362f24; border-bottom: 2px solid #362f24; padding-bottom: 10px;">New Contact Form Submission</h2>
          <div style="background: #f9f9f9; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Budget:</strong> ${budget || 'Not specified'}</p>
            <p><strong>Services:</strong> ${services || 'Not specified'}</p>
            <p><strong>Source:</strong> ${source || 'General Contact'}</p>
          </div>
          <p><strong>Message:</strong></p>
          <div style="white-space: pre-wrap; background: #fff; padding: 15px; border: 1px solid #ddd; border-radius: 5px; font-style: italic;">
            ${message}
          </div>
          <p style="font-size: 12px; color: #888; margin-top: 30px; text-align: center;">
            This email was sent from your portfolio website.
          </p>
        </div>
      `,
    });

    // 2. Send automated confirmation email to the user
    const autoReplyHtml = `
<style>
* {
  font-family: 'Verdana', 'Segoe UI', Arial, sans-serif !important;
}
</style>

<div style="margin:0;padding:0;background-color:#0b0b0b;
font-family:'Doto','DotGothic16','Segoe UI',Arial,sans-serif;">

  <!-- Outer Wrapper -->
  <div style="max-width:620px;margin:40px auto;
  background:#111111;
  border-radius:12px;
  overflow:hidden;
  border:1px solid #362f24;">

    <!-- Top Gold Bar -->
    <div style="height:6px;background:#362f24;"></div>

    <!-- Content -->
    <div style="padding:45px 35px;color:#eaeaea;">

      <!-- Logo -->
      <div style="text-align:center;margin-bottom:25px;">
        <img src="https://ik.imagekit.io/jbckhvkvo/image.png" alt="logo"
        style="height:42px;">
      </div>

      <!-- Heading -->
      <h1 style="
      text-align:center;
      color:#362f24;
      font-weight:600;
      letter-spacing:1px;
      margin-bottom:20px;">
        Thank You for Connecting
      </h1>

      <!-- Greeting -->
      <p style="font-size:15px;line-height:1.8;color:#d6d6d6;">
        Hello <strong>${name}</strong>,
      </p>

      <p style="font-size:15px;line-height:1.8;color:#cfcfcf;">
        Great news! Your transmission successfully survived the treacherous journey through the interwebs and landed right in our
        <strong style="color:#362f24;">Get In Touch</strong> bucket.
        <br/>
        <br/>
        We’ve dispatched a highly trained carrier pigeon to drop your message directly onto
        <strong>Yatharth's</strong> desk for review.
      </p>

      <p style="font-size:15px;line-height:1.8;color:#cfcfcf;">
        He’s currently squinting at it with the intensity of a man trying to solve a Rubik's cube in the dark. We prioritize these based on <strong style="color:#362f24;">Vibes</strong> and <strong style="color:#362f24;">Urgency</strong> so hang tight, we’ll teleport a reply back to you shortly!
      </p>

      <!-- Info Box -->
      <div style="
      background:#0f0f0f;
      border:1px solid #362f24;
      border-radius:8px;
      padding:18px;
      margin:28px 0;">

        <p style="margin:0;font-size:14px;color:#bbbbbb;">
          Request Status: <span style="color:#362f24;">Received</span><br>
          Assigned To: <span style="color:#362f24;">Yatharth</span><br>
          Response Time: <span style="color:#362f24;">24 - 48 Hours</span>
        </p>

      </div>

      <!-- Button -->
      <div style="text-align:center;margin:35px 0;">
        <a href="https://yatharthportfolionst.vercel.app/"
        style="
        background:#362f24;
        color:#ffffff;
        padding:14px 28px;
        text-decoration:none;
        border-radius:6px;
        font-size:14px;
        letter-spacing:0.5px;
        display:inline-block;">
        Visit Website
        </a>
      </div>

      <!-- Divider -->
      <hr style="border:none;border-top:1px solid #2a2a2a;margin:35px 0;">

      <!-- Extra Section -->
      <p style="font-size:14px;color:#9c9c9c;text-align:center;line-height:1.7;">
        If you wish to add more information regarding your request,
        simply reply to this email and it will be directly linked
        to your existing submission.
      </p>

      <!-- Footer -->
      <div style="text-align:center;margin-top:30px;">
        <p style="font-size:13px;color:#6f6f6f;">
          This is an automated confirmation email.<br>
          Please do not share sensitive information via email.
        </p>

        <p style="margin-top:18px;color:#362f24;font-weight:500;">
          Warm Regards,<br>
          Yatharth
        </p>
      </div>

    </div>

  </div>

</div>
    `;

    await transporter.sendMail({
      from: `"Yatharth" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Confirmation: Transmission Received!',
      html: autoReplyHtml,
    });

    return res.status(200).json({ success: true, message: 'Emails sent successfully' });
  } catch (error) {
    console.error('Nodemailer error:', error);
    return res.status(500).json({ error: 'Failed to send emails' });
  }
}
