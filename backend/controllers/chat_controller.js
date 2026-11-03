import CrisisAlert from '../models/crisis_alert.js';
import { detectCrisisSignals, CRISIS_SUPPORT_MESSAGE } from '../utils/crisis_detection.js';

export async function sendChatMessage(req, res, next) {
  try {
    const message = typeof req.body.message === 'string' ? req.body.message.trim() : '';
    if (!message || message.length > 4000) {
      return res.status(400).json({ message: 'Message must contain 1 to 4000 characters.' });
    }

    const detectedSignals = detectCrisisSignals(message);
    if (detectedSignals.length > 0) {
      await CrisisAlert.create({
        userId: req.auth.userId,
        message,
        detectedSignals
      });
      return res.json({ reply: CRISIS_SUPPORT_MESSAGE, crisisDetected: true });
    }

    if (req.body.consentToExternalProcessing !== true) {
      return res.status(428).json({
        message: 'Consent is required before your message can be sent to Anthropic for an AI response.'
      });
    }

    if (!process.env.ANTHROPIC_API_KEY || !process.env.ANTHROPIC_MODEL) {
      return res.status(503).json({ message: 'Psycho Buddy is not configured on this server.' });
    }

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: process.env.ANTHROPIC_MODEL,
        max_tokens: 500,
        system: 'You are Psycho Buddy, a supportive mental wellness companion. Be warm, respectful, and non-judgmental. You are not a clinician: never diagnose, prescribe medication, or replace professional care. Do not claim certainty about mental health conditions. Encourage appropriate professional support when helpful. Crisis detection has already run for this message; if a user describes immediate danger, self-harm, or harm to others, prioritize safety and tell them to contact local emergency services and a trusted person. For India, share Tele-MANAS at 14416 and emergency services at 112.',
        messages: [{ role: 'user', content: message }]
      }),
      signal: AbortSignal.timeout(20000)
    });
    if (!response.ok) {
      console.error('Anthropic API request failed with status:', response.status);
      return res.status(502).json({ message: 'Psycho Buddy is temporarily unavailable. Please try again later.' });
    }

    const completion = await response.json();

    const reply = completion.content
      .filter((block) => block.type === 'text')
      .map((block) => block.text)
      .join('\n')
      .trim();

    if (!reply) return res.status(502).json({ message: 'Psycho Buddy returned an empty response. Please try again.' });
    return res.json({ reply, crisisDetected: false });
  } catch (error) {
    return next(error);
  }
}
