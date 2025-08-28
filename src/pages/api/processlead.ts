import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const data: any = { properties: req.body }; // Sending form data as properties
    console.log("Data:", data);
    console.log("env data",process.env.HUBSPOT_ACCESS_TOKEN)
    try {
      const emailRequest = await axios.get(
        `${process.env.HUBSPOT_API_URL}/${data?.properties?.email}?idProperty=email`,
        {
          headers: {
            "Content-Type": "application/json",
            Cookie:
              "__cf_bm=50sXwbc.JeeBiHSnVhXvZafxKfBiVF88zhXx2iHg_hQ-1751200141-1.0.1.1-EfcoUDGiDOjZoMw9tQPUjrrk02SQuSc0VYSVNBGz2F__OEHRKSRLdv0A0nLaqN98C97.VuJeMjQ5SpwwlS4Eq5xh44Nxuze.0HpyDvUiuSM",
            Authorization: `Bearer ${
              process.env.HUBSPOT_ACCESS_TOKEN as string
            }`,
          },
        }
      );
      console.log(
        "Email Request Response:",
       data
      );
      const response = await axios.patch(
        `${process.env.HUBSPOT_API_URL}/${emailRequest?.data?.id}`,
       data,
        {
          headers: {
            "Content-Type": "application/json",
            Cookie:
              "__cf_bm=50sXwbc.JeeBiHSnVhXvZafxKfBiVF88zhXx2iHg_hQ-1751200141-1.0.1.1-EfcoUDGiDOjZoMw9tQPUjrrk02SQuSc0VYSVNBGz2F__OEHRKSRLdv0A0nLaqN98C97.VuJeMjQ5SpwwlS4Eq5xh44Nxuze.0HpyDvUiuSM",
            Authorization: `Bearer ${
              process.env.HUBSPOT_ACCESS_TOKEN as string
            }`,
          },
        }
      );
      console.log(response, "responseresponseresponseresponse");
      res.status(200).json(response.data);
    } catch {
      const response = await axios.post(
        process.env.HUBSPOT_API_URL as string,
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${
              process.env.HUBSPOT_ACCESS_TOKEN as string
            }`,
          },
        }
      );
      console.log(response, "responseresponseresponseresponse1111");
      res.status(200).json(response.data);
    }
  } catch (error) {
    console.error("HubSpot API Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
