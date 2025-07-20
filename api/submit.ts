import type { VercelRequest, VercelResponse } from "@vercel/node";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;

export async function OPTIONS() {
  return new Response(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
      "Access-Control-Allow-Credentials": "true",
    },
  });
}

export async function GET() {
  return Response.json(
    { ok: true },
    {
      headers: { "Access-Control-Allow-Origin": "*" },
    }
  );
}

// export default async function handler(req: VercelRequest, res: VercelResponse) {
//   console.log("Received request:", req.body);
//   if (req.method !== "POST") {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
//     res.setHeader(
//       "Access-Control-Allow-Headers",
//       "Content-Type, Authorization"
//     );
//     res.setHeader("Content-Type", "application/json");
//     res.status(200).json({ error: "Method Not Allowed" });
//     return res;
//   }
//   const response = await axios.post(GOOGLE_SCRIPT_URL, req.body, {
//     headers: {
//       "Content-Type": "application/json",
//     },
//     timeout: 30000, // 30 second timeout
//   });

//   res.json(response.data);
// }
