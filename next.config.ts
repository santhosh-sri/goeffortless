import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  env: {
    GTM_ID: process.env.GTM_ID,
    HUBSPOT_ACCESS_TOKEN: process.env.HUBSPOT_ACCESS_TOKEN,
    HUBSPOT_API_URL: process.env.HUBSPOT_API_URL,
  },
  images: {
    unoptimized: true,
  },
  
  // Add 301 redirects
  async redirects() {
    return [
      {
        source: '/customer/services',
        destination: '/',
        permanent: true, // 301 redirect
      },
      {
        source: '/customer/consulting',
        destination: '/',
        permanent: true, // 301 redirect
      },
      {
        source: '/mission',
        destination: '/',
        permanent: true, // 301 redirect
      },
      {
        source: '/customer/startups',
        destination: '/',
        permanent: true, // 301 redirect
      },
      {
        source: '/shop/invoicing',
        destination: '/',
        permanent: true, // 301 redirect
      },
    ];
  },
};

export default nextConfig;