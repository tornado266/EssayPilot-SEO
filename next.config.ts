import type { NextConfig } from "next";

const isStaticExport = process.env.ESSAYPILOT_STATIC_EXPORT === "1";

const nextConfig: NextConfig = isStaticExport
  ? {
      output: "export",
      trailingSlash: true,
      images: { unoptimized: true },
      // The static marketing site does not import the Cloudflare-only DB layer.
      // Its ambient `cloudflare:workers` types are supplied by the Sites build.
      typescript: { ignoreBuildErrors: true },
    }
  : {};

export default nextConfig;
