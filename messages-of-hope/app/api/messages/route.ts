import { db } from "@/lib/db";
import { checkMessageSubmission } from "@/lib/validator";

export async function GET() {
  try {
    const mess = await db.message.findMany({
      select: {
        message: true,
      },
      where: {
        public: true,
      },
      take: 10,
    });
    const _mess: string[] = [];
    mess.forEach((item) => _mess.push(item.message));
    return new Response(JSON.stringify({ messages: _mess }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Failed to fetch messages" }), {
      status: 500,
    });
  }
}

export async function POST(request: Request) {
  const req = await request.json();

  try {
    const valid = checkMessageSubmission(req);
    if (valid.error) {
      return Response.json({ error: valid.error }, { status: 400 });
    }
  } catch (error) {
    console.log("Error validating form:", error);
    return Response.json({ error: "Invalid form data" }, { status: 400 });
  }
  let _handle = null;
  if (req.handle.trim() != "") {
    _handle = req.handle.trim();
    if (_handle.startsWith("@")) _handle = _handle.substring(1);
  }
  try {
    await db.message.create({
      data: {
        message: req.message,
        instagramHandle: _handle,
      },
    });
  } catch (err) {
    console.log(err);
    return Response.json(
      { error: "Oops...Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
  console.log("Message submitted successfully:", req);
  return Response.json({ success: "Message submitted." }, { status: 200 });
}
