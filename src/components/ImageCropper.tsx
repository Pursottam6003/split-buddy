"use client"
import React, { useState } from "react"
import Cropper from "react-easy-crop"

export default function ImageCropper({ image, onCropComplete }: { image: string, onCropComplete: (cropped: string) => void }) {
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<any>(null)

  const getCroppedImg = async () => {
    const img = document.createElement("img")
    img.src = image
    await new Promise(res => (img.onload = res))
    const canvas = document.createElement("canvas")
    canvas.width = croppedAreaPixels.width
    canvas.height = croppedAreaPixels.height
    const ctx = canvas.getContext("2d")
    if(ctx) {
    ctx.drawImage(
      img,
      croppedAreaPixels.x,
      croppedAreaPixels.y,
      croppedAreaPixels.width,
      croppedAreaPixels.height,
      0,
      0,
      croppedAreaPixels.width,
      croppedAreaPixels.height
    )
    }   
    onCropComplete(canvas.toDataURL("image/png"))
  }

  return (
    <div className="relative w-full h-64 bg-gray-200">
      <Cropper
        image={image}
        crop={crop}
        zoom={zoom}
        aspect={4/3}
        onCropChange={setCrop}
        onZoomChange={setZoom}
        onCropComplete={(_, areaPixels) => setCroppedAreaPixels(areaPixels)}
      />
      <button onClick={getCroppedImg} className="absolute bottom-2 right-2 bg-blue-600 text-white px-3 py-1 rounded">Crop</button>
    </div>
  )
}
