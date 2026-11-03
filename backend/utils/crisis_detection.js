const CRISIS_PATTERNS = [
  { signal: 'suicidal-thoughts', pattern: /\b(suicid(?:e|al)|kill myself|end my life|take my own life)\b/iu },
  { signal: 'self-harm', pattern: /\b(self[- ]harm|hurt myself|cut(?:ting)? myself|harm myself)\b/iu },
  { signal: 'immediate-danger', pattern: /\b(don't want to live|do not want to live|can't go on|cannot go on|about to hurt myself)\b/iu },
  { signal: 'harm-to-others', pattern: /\b(kill someone|hurt someone|harm someone|attack someone)\b/iu }
];

export function detectCrisisSignals(message) {
  return CRISIS_PATTERNS
    .filter(({ pattern }) => pattern.test(message))
    .map(({ signal }) => signal);
}

export const CRISIS_SUPPORT_MESSAGE = "I'm really sorry you're going through this. Psycho Buddy isn't a crisis service, but you deserve immediate human support. In India, call Tele-MANAS at 14416; if you or someone else is in immediate danger, call 112 or go to the nearest emergency department. If you can, reach out to someone you trust and stay with them.";
