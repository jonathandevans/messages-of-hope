import { checkContactForm } from "@/lib/validator";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_KEY);

export async function POST(request: Request) {
  const req = await request.json();

  try {
    const { error } = checkContactForm(req);
    if (error) {
      return Response.json({ error }, { status: 400 });
    }
  } catch (error) {
    console.log("Error validating form:", error);
    return Response.json({ error: "Invalid form data" }, { status: 400 });
  }

  try {
    await resend.emails.send({
      from: "NO-REPLY <no-reply@messagesofhope.co.uk>",
      to: "contact@messagesofhope.co.uk",
      replyTo: req.email,
      subject: req.organisation
        ? `${req.organisation}: ${req.subject}`
        : req.subject,
      text: `${req.message}\n\n${req.name}`,
    });
  } catch (error) {
    console.log("Error sending email:", error);
    return Response.json({ error: "Failed to send email" }, { status: 500 });
  }
  console.log("Email sent successfully:", req);

  return Response.json({ success: true }, { status: 200 });
}
