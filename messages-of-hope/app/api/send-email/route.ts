import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_KEY);

export async function POST(request: Request) {
  const res = await request.json();
  console.log(res);

  const work = await resend.emails.send({
    from: "NO-REPLY <no-reply@messagesofhope.co.uk>",
    to: "contact@messagesofhope.co.uk",
    subject: "test",
    text: "test",
  });
  console.log(work);

  return Response.json({ res });
}
