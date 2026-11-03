import { createHmac, randomBytes, timingSafeEqual } from 'node:crypto';

const BASE32_ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';
const STEP_SECONDS = 30;

function base32Encode(buffer) {
  let bits = 0;
  let value = 0;
  let output = '';

  for (const byte of buffer) {
    value = (value << 8) | byte;
    bits += 8;
    while (bits >= 5) {
      output += BASE32_ALPHABET[(value >>> (bits - 5)) & 31];
      bits -= 5;
    }
  }

  if (bits > 0) output += BASE32_ALPHABET[(value << (5 - bits)) & 31];
  return output;
}

function base32Decode(encoded) {
  let bits = 0;
  let value = 0;
  const output = [];

  for (const char of encoded.toUpperCase().replace(/=+$/u, '')) {
    const index = BASE32_ALPHABET.indexOf(char);
    if (index < 0) throw new Error('Invalid base32 secret');
    value = (value << 5) | index;
    bits += 5;
    if (bits >= 8) {
      output.push((value >>> (bits - 8)) & 255);
      bits -= 8;
    }
  }

  return Buffer.from(output);
}

export function generateTotpSecret() {
  return base32Encode(randomBytes(20));
}

export function createTotp(secret, time = Date.now(), digits = 6) {
  const counter = Math.floor(time / 1000 / STEP_SECONDS);
  const message = Buffer.alloc(8);
  message.writeBigUInt64BE(BigInt(counter));
  const digest = createHmac('sha1', base32Decode(secret)).update(message).digest();
  const offset = digest[digest.length - 1] & 0x0f;
  const binary = digest.readUInt32BE(offset) & 0x7fffffff;
  return String(binary % (10 ** digits)).padStart(digits, '0');
}

export function verifyTotp(secret, code, time = Date.now(), window = 1) {
  if (!/^\d{6}$/u.test(code)) return false;

  const supplied = Buffer.from(code);
  for (let step = -window; step <= window; step += 1) {
    const expected = Buffer.from(createTotp(secret, time + step * STEP_SECONDS * 1000));
    if (supplied.length === expected.length && timingSafeEqual(supplied, expected)) return true;
  }
  return false;
}

export function createTotpProvisioningUri(secret, email) {
  const label = encodeURIComponent(`Psychobeings:${email}`);
  const issuer = encodeURIComponent('Psychobeings');
  return `otpauth://totp/${label}?secret=${secret}&issuer=${issuer}&algorithm=SHA1&digits=6&period=${STEP_SECONDS}`;
}
