// @ts-check
import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import tailwindcss from "@tailwindcss/vite";
import netlify from "@astrojs/netlify";

export default defineConfig({
    integrations: [preact()],
    vite: { plugins: [tailwindcss()] },
    adapter: netlify(),
    image: {
        remotePatterns: [{ protocol: "https" }],
        domains: ["supabase.co"],
    },
    redirects: {
        "/support-us": "/get-involved",

        "/about": "/our-work",
        "/our-creator": "/our-story",

        "/projects": "/campaigns",
        "/projects/bags-of-hope": "/bags-of-hope",
        "/bags-of-hope": "/campaigns/bags-of-hope",
        "/line-of-hope": "/campaigns/line-of-hope",
        "/messages-of-hope": "/campaigns/messages-of-hope",

        "/projects/connections-2024": "/events/connections-2024",
        "/projects/messages-of-hope-2023": "/events/messages-of-hope-2023",
        "/projects/messages-of-hope-2020": "/events/messages-of-hope-2020",

        "/projects/colouring-pages": "/events/colouring-pages",
    },
});
