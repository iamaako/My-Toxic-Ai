import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Server-to-server HTTP call bypasses browser Mixed Content restrictions!
    // This allows Netlify (HTTPS) to talk to the Droplet (HTTP) safely.
    const response = await fetch("http://165.22.214.38:8000/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });

    if (!response.ok) {
      throw new Error("Failed to fetch from DigitalOcean backend");
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Proxy Error:", error);
    return NextResponse.json({ error: "Failed to connect to AI server" }, { status: 500 });
  }
}
