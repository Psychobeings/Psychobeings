const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { clientEmail, phq9, gad7, rosenberg, submittedAt } = req.body;

  if (!clientEmail) {
    return res.status(400).json({ error: 'Client email is required' });
  }
  // Validate environment configuration for Gmail SMTP
  const gmailUser = process.env.GMAIL_USER;
  const gmailPass = process.env.GMAIL_APP_PASSWORD;

  if (!gmailUser || !gmailPass) {
    console.error('Missing GMAIL_USER or GMAIL_APP_PASSWORD environment variables');
    return res.status(500).json({
      error: 'Mail configuration missing',
      details:
        'Set GMAIL_USER and GMAIL_APP_PASSWORD environment variables (use an App Password if your account has 2FA).'
    });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user: gmailUser, pass: gmailPass },
  });

  const mailOptions = {
    from: `"Psychobeings Intake" <${gmailUser}>`,
    to: gmailUser,
    replyTo: clientEmail,
    subject: `New Pre-Session Screening: ${clientEmail}`,
    text: `Pre-Session Intake Screening Results

Client Email: ${clientEmail}
Submitted At: ${new Date(submittedAt).toLocaleString()}

--- SCORES ---
PHQ-9 (Depression): ${phq9?.score ?? 'N/A'}/27 (${phq9?.severity ?? 'N/A'})
GAD-7 (Anxiety): ${gad7?.score ?? 'N/A'}/21 (${gad7?.severity ?? 'N/A'})
Rosenberg Self-Esteem Scale: ${rosenberg?.score ?? 'N/A'}/30 (${rosenberg?.range ?? 'N/A'})

Note: These results are strictly for preliminary screening and exploratory intake purposes, not clinical diagnosis.`,
  };

  try {
    // Verify transporter configuration before sending
    await transporter.verify();
  } catch (verifyErr) {
    console.error('SMTP verification failed:', verifyErr);
    return res.status(500).json({
      error: 'SMTP verification failed',
      details: verifyErr && verifyErr.message ? verifyErr.message : String(verifyErr),
    });
  }

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info && info.response ? info.response : info);
    return res.status(200).json({ success: true, message: 'Screening delivered successfully' });
  } catch (error) {
    console.error('Nodemailer Error:', error);
    return res.status(500).json({ error: 'Failed to send email', details: error && error.message ? error.message : String(error) });
  }
};