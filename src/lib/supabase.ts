import {
    createServerClient as _createServerClient,
    createBrowserClient as _createBrowserClient,
    parseCookieHeader,
} from "@supabase/ssr";
import type { AstroCookies } from "astro";

export function createServerClient({
    request,
    cookies,
}: {
    request: Request;
    cookies: AstroCookies;
}) {
    const cookieHeader = request.headers.get("Cookie") || "";

    return _createServerClient(
        import.meta.env.PUBLIC_SUPABASE_URL,
        import.meta.env.PUBLIC_SUPABASE_PUBLISHABLE_KEY,
        {
            cookies: {
                getAll() {
                    const cookies = parseCookieHeader(cookieHeader);
                    return cookies.map(({ name, value }) => ({
                        name,
                        value: value ?? "",
                    }));
                },
                setAll(cookiesToSet) {
                    cookiesToSet.forEach(({ name, value, options }) =>
                        cookies.set(name, value, options),
                    );
                },
            },
        },
    );
}

export function createAdminClient({
    request,
    cookies,
}: {
    request: Request;
    cookies: AstroCookies;
}) {
    const cookieHeader = request.headers.get("Cookie") || "";

    return _createServerClient(
        import.meta.env.PUBLIC_SUPABASE_URL,
        import.meta.env.SUPABASE_SECRET_KEY,
        {
            cookies: {
                getAll() {
                    const cookies = parseCookieHeader(cookieHeader);
                    return cookies.map(({ name, value }) => ({
                        name,
                        value: value ?? "",
                    }));
                },
                setAll(cookiesToSet) {
                    cookiesToSet.forEach(({ name, value, options }) =>
                        cookies.set(name, value, options),
                    );
                },
            },
        },
    );
}

export function createBrowserClient() {
    return _createBrowserClient(
        import.meta.env.PUBLIC_SUPABASE_URL,
        import.meta.env.PUBLIC_SUPABASE_PUBLISHABLE_KEY,
    );
}
