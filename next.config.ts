import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // If deploying to GitHub Pages, basePath will be the repository name.
  // We can inject this at build time using the NEXT_PUBLIC_BASE_PATH env var.
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  typescript: {
    ignoreBuildErrors: true,
  }
};

export default withNextIntl(nextConfig);
