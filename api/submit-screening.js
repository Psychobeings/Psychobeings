const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { clientEmail, phq9, gad7, rosenberg, submittedAt } = req.body;

  if (!clientEmail) {
    return res.status(400).json({ error: 'Client email is required' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  const mailOptions = {
    from: `"Psychobeings Intake" <${process.env.GMAIL_USER}>`,
    to: process.env.GMAIL_USER,
    replyTo: clientEmail,
    subject: `New Pre-Session Screening: ${clientEmail}`,
    text: `Pre-Session Intake Screening Results

Client Email: ${clientEmail}
Submitted At: ${new Date(submittedAt).toLocaleString()}

--- SCORES ---
• PHQ-9 (Depression): ${phq9?.score ?? 'N/A'}/27 (${phq9?.severity ?? 'N/A'})
• GAD-7 (Anxiety): ${gad7?.score ?? 'N/A'}/21 (${gad7?.severity ?? 'N/A'})
• Rosenberg Self-Esteem Scale: ${rosenberg?.score ?? 'N/A'}/30 (${rosenberg?.range ?? 'N/A'})

---
Note: These results are strictly for preliminary screening and exploratory intake purposes, not formal clinical diagnosis.`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true, message: 'Screening delivered successfully' });
  } catch (error) {
    console.error('Nodemailer Error:', error);
    return res.status(500).json({ error: 'Failed to send email', details: error.message });
  }
};