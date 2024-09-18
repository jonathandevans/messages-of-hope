"use server";

import { db } from "@/db";

export const getMessages = async () => {
  try {
    const mess = await db.message.findMany({
      select: {
        message: true
      },
      where: {
        public: true
      },
      take: 10
    });
    const _mess:string[] = [];
    mess.forEach(item => _mess.push(item.message));
    return { _mess };
  } catch (err) {
    return { error: "Failed to fetch messages" }
  }
};