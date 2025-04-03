import { db } from "@/lib/db";

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
