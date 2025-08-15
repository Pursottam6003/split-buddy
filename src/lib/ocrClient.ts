export async function extractTextFromImage(image: string) {
  const res = await fetch("/api/ocr", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ image }),
  })
  if (!res.ok) throw new Error("OCR failed")
  const data = await res.json()
  return data.text as string
}
