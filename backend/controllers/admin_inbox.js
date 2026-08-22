import Contact from '../models/contact_model.js';
import Assessment from '../models/assessment_model.js';

export const listContacts = async (req, res) => {
  try {
    const result = await Contact.find().sort({ createdAt: -1 }).limit(100);
    res.json({ result, totalCount: result.length });
  } catch (error) {
    res.status(500).json({ message: 'Unable to load contact messages', details: error.message });
  }
};

export const listAssessments = async (req, res) => {
  try {
    const result = await Assessment.find().sort({ createdAt: -1 }).limit(100);
    res.json({ result, totalCount: result.length });
  } catch (error) {
    res.status(500).json({ message: 'Unable to load assessments', details: error.message });
  }
};

export const createAssessment = async (req, res) => {
  try {
    const assessment = await Assessment.create(req.body);
    res.status(201).json({ assessment });
  } catch (error) {
    res.status(400).json({ message: 'Unable to save assessment', details: error.message });
  }
};
