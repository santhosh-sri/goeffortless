import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const data = { properties: req.body };
  console.log("📩 Incoming payload:", data);

  console.log(process.env.HUBSPOT_ACCESS_TOKEN,"env file");


  try {
    const email = data.properties.email;

    // ✅ Verify env variables exist
    if (!process.env.HUBSPOT_API_URL) {
      console.error("❌ Missing HUBSPOT env vars");
      return res.status(500).json({ error: "Server misconfiguration" });
    }

    let hubspotResponse;

    try {
      console.log(`🔍 Checking HubSpot for contact with email: ${email}`);

      const existingContact = await axios.get(
        `${process.env.HUBSPOT_API_URL}/${email}?idProperty=email`,
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_HUBSPOT_ACCESS_TOKEN}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("✅ Found contact:", existingContact.data);

      hubspotResponse = await axios.patch(
        `${process.env.HUBSPOT_API_URL}/${existingContact.data.id}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${process.env.HUBSPOT_ACCESS_TOKEN}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("✏️ Updated contact:", hubspotResponse.data);
    } catch (err: any) {
      if (err.response?.status === 404) {
        console.log("❌ Contact not found. Creating new contact...");

        hubspotResponse = await axios.post(process.env.HUBSPOT_API_URL, data, {
          headers: {
            Authorization: `Bearer ${process.env.HUBSPOT_ACCESS_TOKEN}`,
            "Content-Type": "application/json",
          },
        });

        console.log("🎉 Created contact:", hubspotResponse.data);
      } else {
        console.error("🔥 HubSpot lookup failed:", err.response?.data || err.message);
        return res.status(500).json({ error: "HubSpot lookup failed" });
      }
    }

    return res.status(200).json(hubspotResponse.data);
  } catch (error: any) {
    console.error("🔥 HubSpot API Error:", error.response?.data || error.message);
    return res.status(500).json({ error: "HubSpot API call failed" });
  }
}
