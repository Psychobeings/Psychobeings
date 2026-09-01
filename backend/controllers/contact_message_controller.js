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

export const getContactMessages = async (req, res) => {
  try {
    const messages = await ContactMessage.find().sort({ createdAt: -1 });
    return res.status(200).json(messages);
  } catch (error) {
    console.error('getContactMessages error:', error);
    return res.status(500).json({ message: 'Unable to fetch contact messages.' });
  }
};

export const updateContactMessageStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!['new', 'read', 'replied'].includes(status)) {
      return res.status(400).json({ message: 'Invalid status.' });
    }

    const updatedMessage = await ContactMessage.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!updatedMessage) {
      return res.status(404).json({ message: 'Message not found.' });
    }

    return res.status(200).json(updatedMessage);
  } catch (error) {
    console.error('updateContactMessageStatus error:', error);
    return res.status(500).json({ message: 'Unable to update contact message status.' });
  }
};
