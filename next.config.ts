import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  env: {
    GTM_ID: "GTM-3388VMGJ",
    HUBSPOT_API_URL: "https://api.hubapi.com/crm/v3/objects/contacts",
    HUBSPOT_ACCESS_TOKEN: "pat-na2-e6890392-af1e-4de7-9f87-7a79d309c148",
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