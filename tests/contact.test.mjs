import test from 'node:test';
import assert from 'node:assert/strict';
import { submitContact } from '../src/lib/contact.js';

const body = { name: 'Test sender', email: 'sender@example.com', subject: 'Portfolio enquiry', message: 'Test message' };
const env = { RESEND_API_KEY: 'test-key', CONTACT_EMAIL: 'owner@example.com', RESEND_FROM_EMAIL: 'site@example.com' };
const noSend = () => { throw new Error('Provider must not be called'); };

test('missing, whitespace, non-string and invalid email fields fail before sending', async () => {
  for (const input of [null, [], {}, { ...body, name: ' ' }, { ...body, message: {} }, { ...body, email: 'invalid' }, { ...body, message: 'a'.repeat(10001) }]) {
    const result = await submitContact(input, { env, send: noSend });
    assert.equal(result.status, 400);
    assert.equal(result.body.accepted, undefined);
  }
});
test('missing provider or recipient never silently accepts a message', async () => {
  for (const config of [{}, { CONTACT_EMAIL: 'owner@example.com' }, { RESEND_API_KEY: 'test' }]) {
    const result = await submitContact(body, { env: config, send: noSend });
    assert.equal(result.status, 503);
    assert.equal(result.body.accepted, undefined);
  }
});
test('returned provider errors and missing acceptance IDs are failures', async () => {
  for (const response of [{ error: { message: 'secret provider information' } }, {}, { data: {} }, null]) {
    const result = await submitContact(body, { env, send: async () => response });
    assert.equal(result.status, 502);
    assert.ok(!JSON.stringify(result).includes('secret'));
  }
});
test('thrown provider errors do not escape or become success', async () => {
  const result = await submitContact(body, { env, send: async () => { throw new Error('private error'); } });
  assert.equal(result.status, 502);
  assert.ok(!JSON.stringify(result).includes('private error'));
});
test('only provider acceptance returns success and sends correct reply-to/recipient', async () => {
  let payload;
  const result = await submitContact({ ...body, message: '<b>Literal text</b>' }, { env, send: async message => {
    payload = message; return { data: { id: 'accepted-id' }, error: null };
  } });
  assert.equal(result.status, 200);
  assert.equal(result.body.accepted, true);
  assert.equal(result.body.message, 'Message submitted successfully.');
  assert.deepEqual(payload.to, [env.CONTACT_EMAIL]);
  assert.equal(payload.replyTo, body.email);
  assert.ok(payload.text.includes('<b>Literal text</b>'));
  assert.equal(payload.html, undefined);
  assert.ok(!JSON.stringify(result).includes(env.RESEND_API_KEY));
});
