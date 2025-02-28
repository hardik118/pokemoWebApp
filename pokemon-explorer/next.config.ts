import type { NextConfig } from "next";

if (process.env.NODE_ENV === "development") {
  const originalConsoleError = console.error;

  console.error = (...args) => {
    if (
      args[0] &&
      (args[0].includes("Warning:") || args[0].includes("Error:"))
    ) {
      return;
    }
    originalConsoleError(...args);
  };
}

const nextConfig: NextConfig = {
  images: {
    domains: ["raw.githubusercontent.com"], 
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
};

export default nextConfig;

