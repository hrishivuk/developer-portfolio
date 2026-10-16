import { NextResponse } from "next/server";
import { Resend } from "resend";
import { submitContact } from "../../../lib/contact";

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }
  const result = await submitContact(body, {
    env: process.env,
    send: (message) => new Resend(process.env.RESEND_API_KEY).emails.send(message),
  });
  return NextResponse.json(result.body, { status: result.status });
}
