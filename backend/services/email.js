import nodemailer from 'nodemailer';

function createTransporter() {
  const user = process.env.EMAILADD;
  const password = process.env.EMAILPASS;
  const from = process.env.SENDERMAIL || process.env.EMAIL;

  if (!user || !password || !from) {
    throw new Error('Email delivery is not configured. Set EMAILADD, EMAILPASS, and SENDERMAIL.');
  }

  return {
    from,
    transporter: nodemailer.createTransport({
      host: 'smtp-relay.brevo.com',
      port: 587,
      secure: false,
      auth: { user, pass: password }
    })
  };
}

export async function sendPasswordResetEmail({ to, url, role }) {
  const { from, transporter } = createTransporter();

  await transporter.sendMail({
    from,
    to,
    subject: 'Reset your Psychobeings password',
    text: `Use this link to reset your ${role} password. This link expires in 30 minutes: ${url}`,
    html: `<p>Use this link to reset your ${role} password. It expires in 30 minutes.</p><p><a href="${url}">Reset password</a></p>`
  });
}

export async function sendClientInvitationEmail({ to, url }) {
  const { from, transporter } = createTransporter();

  await transporter.sendMail({
    from,
    to,
    subject: 'Your Psychobeings client portal invitation',
    text: `You have been invited to create a Psychobeings client portal account. Accept the invitation within 30 minutes: ${url}`,
    html: `<p>You have been invited to create a Psychobeings client portal account.</p><p>The invitation expires in 30 minutes.</p><p><a href="${url}">Accept invitation</a></p>`
  });
}
