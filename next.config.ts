import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  env: {
    GTM_ID: "GTM-3388VMGJ",
    HUBSPOT_ACCESS_TOKEN: process.env.HUBSPOT_ACCESS_TOKEN,
    HUBSPOT_API_URL: process.env.HUBSPOT_API_URL,
    SERVICE_ID: process.env.SERVICE_ID,
    TEMPLATE_ID: process.env.TEMPLATE_ID,
    PARTNER_TEMPLATE_ID: process.env.PARTNER_TEMPLATE_ID,
    PUBLIC_KEY: process.env.PUBLIC_KEY
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