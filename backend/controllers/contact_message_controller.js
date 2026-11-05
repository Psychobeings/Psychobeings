import ContactMessage from '../models/contact_message_model.js';

export const saveContactMessage = async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Name, email and message are required.' });
    }

    const savedMessage = await ContactMessage.create({
      name: name.trim(),
      email: email.trim(),
      phone: phone?.trim() || '',
      subject: subject?.trim() || 'General Inquiry',
      message: message.trim(),
    });

    return res.status(201).json({
      message: 'Message saved successfully.',
      data: savedMessage,
    });
  } catch (error) {
    console.error('saveContactMessage error:', error);
    return res.status(500).json({ message: 'Unable to save contact message.' });
  }
};
