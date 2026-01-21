import { ActionError, defineAction } from "astro:actions";
import { createAdminClient } from "@lib/supabase";

export const message = {
    getMessages: defineAction({
        handler: async (_, context) => {
            try {
                const supabase = createAdminClient({
                    request: context.request,
                    cookies: context.cookies,
                });
                const { data, error } = await supabase
                    .from("public_messages")
                    .select();

                if (error) throw new Error(error.message);

                return { messages: data.map((item) => item.message) };
            } catch (error) {
                throw new ActionError({
                    code: "INTERNAL_SERVER_ERROR",
                    message: "Failed to obtain latest messages",
                });
            }
        },
    }),
};
