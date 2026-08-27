import express from 'express';
const router = express.Router();

// Mock database storage for demonstration
const assessmentSubmissions = [];

router.post('/api/assessments/submit', (req, res) => {
  const { clientId, clientEmail, type, totalScore, answers } = req.body;

  if (!type || totalScore === undefined) {
    return res.status(400).json({ error: 'Missing required assessment data.' });
  }

  // Interpret score based on clinical thresholds
  let severity = 'Minimal';
  if (type === 'GAD-7') {
    if (totalScore >= 15) severity = 'Severe anxiety';
    else if (totalScore >= 10) severity = 'Moderate anxiety';
    else if (totalScore >= 5) severity = 'Mild anxiety';
  } else if (type === 'PHQ-9') {
    if (totalScore >= 20) severity = 'Severe depression';
    else if (totalScore >= 15) severity = 'Moderately severe depression';
    else if (totalScore >= 10) severity = 'Moderate depression';
    else if (totalScore >= 5) severity = 'Mild depression';
  } else if (type === 'RSES') {
    severity = totalScore < 15 ? 'Low self-esteem' : 'Normal/High self-esteem';
  }

  const submissionRecord = {
    id: `sub-${Date.now()}`,
    clientId: clientId || 'anonymous',
    clientEmail: clientEmail || 'N/A',
    type,
    totalScore,
    severity,
    answers,
    submittedAt: new Date().toISOString()
  };

  assessmentSubmissions.push(submissionRecord);

  // Here you can add your email dispatch logic (e.g. Resend or SendGrid) to notify you of the result

  return res.status(200).json({
    success: true,
    message: 'Assessment submitted and scored successfully.',
    data: submissionRecord
  });
});

export default router;