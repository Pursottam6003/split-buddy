import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  const { image } = await req.json()
  // Forward to Python OCR service
  const resp = await fetch(process.env.PADDLE_OCR_URL!, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ image }),
  })
  if (!resp.ok) return NextResponse.json({ text: "" }, { status: 500 })
  const data = await resp.json()
  return NextResponse.json({ text: data.text })
}
