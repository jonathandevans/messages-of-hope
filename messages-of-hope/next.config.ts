import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.supabase.co",
        port: "",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/support-us",
        destination: "/get-involved",
        permanent: true,
      },
      {
        source: "/about",
        destination: "/our-work",
        permanent: true,
      },
      {
        source: "/our-creator",
        destination: "/our-story",
        permanent: true,
      },
      {
        source: "/projects",
        destination: "/campaigns",
        permanent: true,
      },
      {
        source: "/projects/bags-of-hope",
        destination: "/bags-of-hope",
        permanent: true,
      },
      {
        source: "/projects/connections-2024",
        destination: "/events/connections-2024",
        permanent: true,
      },
      {
        source: "/projects/messages-of-hope-2023",
        destination: "/events/messages-of-hope-2023",
        permanent: true,
      },
      {
        source: "/projects/messages-of-hope-2020",
        destination: "/events/messages-of-hope-2020",
        permanent: true,
      },
      {
        source: "/projects/colouring-pages",
        destination: "/colouring-pages",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
