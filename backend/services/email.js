import nodemailer from 'nodemailer';

export async function sendPasswordResetEmail({ to, url, role }) {
  const user = process.env.EMAILADD;
  const password = process.env.EMAILPASS;
  const from = process.env.SENDERMAIL || process.env.EMAIL;

  if (!user || !password || !from) {
    throw new Error('Email delivery is not configured. Set EMAILADD, EMAILPASS, and SENDERMAIL.');
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp-relay.brevo.com',
    port: 587,
    secure: false,
    auth: { user, pass: password }
  });

  await transporter.sendMail({
    from,
    to,
    subject: 'Reset your Psychobeings password',
    text: `Use this link to reset your ${role} password. This link expires in 30 minutes: ${url}`,
    html: `<p>Use this link to reset your ${role} password. It expires in 30 minutes.</p><p><a href="${url}">Reset password</a></p>`
  });
}
