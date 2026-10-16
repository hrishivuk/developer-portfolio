const unavailable = 'Message submission is unavailable. Please email me directly.';

// Injectable provider for deterministic checks without sending real email.
export async function submitContact(body, { env, send }) {
  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return { status: 400, body: { error: 'Please complete all fields.' } };
  }
  const fields = {};
  for (const key of ['name', 'email', 'subject', 'message']) {
    if (typeof body[key] !== 'string' || !body[key].trim()) {
      return { status: 400, body: { error: 'Please complete all fields.' } };
    }
    fields[key] = body[key].trim();
  }
  const { name, email, subject, message } = fields;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: 400, body: { error: 'Please enter a valid email address.' } };
  }
  if (name.length > 200 || email.length > 320 || subject.length > 300 || message.length > 10000) {
    return { status: 400, body: { error: 'One or more fields are too long.' } };
  }
  const recipient = env.CONTACT_EMAIL || env.RESEND_FROM_EMAIL;
  if (!env.RESEND_API_KEY || !recipient) {
    return { status: 503, body: { error: unavailable } };
  }
  try {
    const result = await send({
      from: env.RESEND_FROM_EMAIL || 'Portfolio <onboarding@resend.dev>',
      to: [recipient],
      subject: `Portfolio Contact: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`,
      replyTo: email,
    });
    if (result?.error || !result?.data?.id) {
      return { status: 502, body: { error: unavailable } };
    }
    return { status: 200, body: { accepted: true, message: 'Message submitted successfully.' } };
  } catch {
    return { status: 502, body: { error: unavailable } };
  }
}
