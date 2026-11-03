import test from 'node:test';
import assert from 'node:assert/strict';
import { detectCrisisSignals, CRISIS_SUPPORT_MESSAGE } from './crisis_detection.js';

test('detects self-harm and harm-to-others signals', () => {
  assert.deepEqual(detectCrisisSignals('I might hurt myself tonight'), ['self-harm']);
  assert.deepEqual(detectCrisisSignals('I want to kill someone'), ['harm-to-others']);
});

test('does not flag ordinary wellness messages and includes India helplines in response', () => {
  assert.deepEqual(detectCrisisSignals('I feel stressed about work today.'), []);
  assert.match(CRISIS_SUPPORT_MESSAGE, /Tele-MANAS at 14416/u);
  assert.match(CRISIS_SUPPORT_MESSAGE, /112/u);
});
