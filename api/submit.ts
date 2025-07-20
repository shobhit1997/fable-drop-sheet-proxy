import type { VercelRequest, VercelResponse } from "@vercel/node";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  console.log("Received request:", req.body);
  if (req.method !== "POST") {
    return res.status(200).json({
      error: "Method Not Allowed",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        "Content-Type": "application/json",
      },
    });
  }
  const response = await axios.post(GOOGLE_SCRIPT_URL, req.body, {
    headers: {
      "Content-Type": "application/json",
    },
    timeout: 30000, // 30 second timeout
  });

  res.json(response.data);
}
