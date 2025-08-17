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
  const [textLines, setTextLines] = useState<string[]>([]) // Changed to array

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
      
      // Extract text lines from the image
      const lines = await extractTextFromImage(img)
      setTextLines(lines)
    } catch (e: any) {
      setError(e.message || "Failed to extract text")
    }
    setLoading(false)
  }
  return (
    <div className="max-w-xl mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-4">OCR Image to Text (PaddleOCR)</h1>
      <div className="flex flex-col gap-4">
        <div className="flex gap-2">
          <ImagePicker onPick={handleImage} />
          <button 
            onClick={() => setShowScanner(true)} 
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Open Camera
          </button>
        </div>
        
        {showScanner && (
          <Scanner 
            onCapture={handleScan} 
            onClose={() => {
              setShowScanner(false)
              setImage(null)
              setCropped(null)
              setShowCropper(false)
            }} 
          />
        )}
        
        {image && showCropper && (
          <ImageCropper image={image} onCropComplete={handleCrop} />
        )}
        
        {(cropped || image) && !showCropper && (
          <div className="mt-4">
            <h2 className="font-semibold mb-2">Preview:</h2>
            <img 
              src={cropped || image!} 
              alt="Selected" 
              className="max-w-full max-h-96 border rounded object-contain" 
            />
          </div>
        )}
        
        <button
          onClick={handleExtract}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50 mt-4"
          disabled={loading || !(cropped || image)}
        >
          {loading ? <Spinner /> : "Extract Text"}
        </button>
        
        {error && (
          <div className="text-red-600 p-3 bg-red-50 rounded-md mt-4">
            <strong>Error:</strong> {error}
          </div>
        )}

        
        
        {/* {text && (
          <div className="mt-6">
            <div className="flex justify-between items-center mb-2">
              <h2 className="font-semibold">Extracted Text:</h2>
              <button 
                onClick={() => navigator.clipboard.writeText(text)}
                className="text-sm text-blue-600 hover:text-blue-800"
              >
                Copy to Clipboard
              </button>
            </div>
            <textarea
              className="w-full border rounded p-3 text-base bg-gray-50 min-h-[200px]"
              value={text}
              readOnly
            />
          </div>
        )}
      </div> */}
      {textLines.length > 0 && (
          <div className="mt-6">
            <div className="flex justify-between items-center mb-2">
              <h2 className="font-semibold">Extracted Text:</h2>
              <button 
                onClick={() => navigator.clipboard.writeText(textLines.join('\n'))}
                className="text-sm text-blue-600 hover:text-blue-800"
              >
                Copy All
              </button>
            </div>
            
            {/* Render text line by line with document-like formatting */}
            <div className="bg-white p-4 rounded border shadow-sm font-sans">
              {textLines.map((line, index) => (
                <div 
                  key={index} 
                  className={`py-1 ${index < textLines.length - 1 ? 'border-b border-gray-100' : ''}`}
                >
                  {/* Preserve whitespace exactly as in document */}
                  <pre className="whitespace-pre-wrap font-sans">{line}</pre>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  )
}