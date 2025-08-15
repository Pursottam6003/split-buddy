"use client"
import React, { useState } from "react"
import Scanner from "@/components/Scanner"
import ImagePicker from "@/components/ImagePicker"
import ImageCropper from "@/components/ImageCropper"
import Spinner from "@/components/Spinner"
import { extractTextFromImage } from "@/lib/ocrClient"

export default function OCRPage() {
  const [image, setImage] = useState<string | null>(null)
  const [cropped, setCropped] = useState<string | null>(null)
  const [text, setText] = useState<string>("")
  const [loading, setLoading] = useState(false)
  const [showCropper, setShowCropper] = useState(false)
  const [showScanner, setShowScanner] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleImage = (img: string) => {
    setImage(img)
    setShowCropper(true)
    setCropped(null)
    setText("")
  }
  const handleCrop = (img: string) => {
    setCropped(img)
    setShowCropper(false)
  }
  const handleScan = (img: string) => {
    setImage(img)
    setShowCropper(true)
    setShowScanner(false)
    setCropped(null)
    setText("")
  }
  const handleExtract = async () => {
    setLoading(true)
    setError(null)
    try {
      const img = cropped || image
      if (!img) throw new Error("No image selected")
      const result = await extractTextFromImage(img)
      setText(result)
    } catch (e: any) {
      setError(e.message)
    }
    setLoading(false)
  }

  return (
    <div className="max-w-xl mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-4">OCR Image to Text (PaddleOCR)</h1>
      <div className="flex flex-col gap-4">
        <div className="flex gap-2">
          <ImagePicker onPick={handleImage} />
          <button onClick={() => setShowScanner(true)} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Open Camera</button>
        </div>
        {showScanner && <Scanner onCapture={handleScan} />}
        {image && showCropper && <ImageCropper image={image} onCropComplete={handleCrop} />}
        {(cropped || image) && !showCropper && (
          <img src={cropped || image!} alt="Selected" className="max-w-xs max-h-64 border rounded" />
        )}
        <button
          onClick={handleExtract}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
          disabled={loading || !(cropped || image)}
        >
          {loading ? <Spinner /> : "Extract Text"}
        </button>
        {error && <div className="text-red-600 text-sm">{error}</div>}
        {text && (
          <div className="mt-4">
            <h2 className="font-semibold mb-2">Extracted Text:</h2>
            <textarea
              className="w-full border rounded p-2 text-sm"
              rows={6}
              value={text}
              readOnly
            />
          </div>
        )}
      </div>
    </div>
  )
}
