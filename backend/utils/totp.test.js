import test from 'node:test';
import assert from 'node:assert/strict';
import { createTotp, verifyTotp } from './totp.js';

test('creates the RFC 6238 SHA-1 test vector', () => {
  const secret = 'GEZDGNBVGY3TQOJQGEZDGNBVGY3TQOJQ';
  assert.equal(createTotp(secret, 59000), '287082');
});

test('accepts a current code and rejects malformed or unrelated codes', () => {
  const secret = 'GEZDGNBVGY3TQOJQGEZDGNBVGY3TQOJQ';
  const now = 1710000000000;
  const code = createTotp(secret, now);
  assert.equal(verifyTotp(secret, code, now), true);
  assert.equal(verifyTotp(secret, 'abc123', now), false);
  assert.equal(verifyTotp(secret, '000000', now + 60 * 60 * 1000), false);
});
