"use client"
import React, { useRef } from "react"

export default function Scanner({ onCapture }: { onCapture: (dataUrl: string) => void }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const streamRef = useRef<MediaStream | null>(null)

  const startCamera = async () => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true })
      streamRef.current = stream
      if (videoRef.current) {
        videoRef.current.srcObject = stream
        videoRef.current.play()
      }
    }
  }

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop())
      streamRef.current = null
    }
    if (videoRef.current) videoRef.current.srcObject = null
  }

  const handleCapture = () => {
    if (videoRef.current) {
      const canvas = document.createElement("canvas")
      canvas.width = videoRef.current.videoWidth
      canvas.height = videoRef.current.videoHeight
      const ctx = canvas.getContext("2d")
      if (ctx) {
        ctx.drawImage(videoRef.current, 0, 0)
        onCapture(canvas.toDataURL("image/png"))
      }
    }
    stopCamera()
  }

  React.useEffect(() => {
    startCamera()
    return stopCamera
  }, [])

  return (
    <div className="flex flex-col items-center gap-2">
      <video ref={videoRef} className="rounded border max-w-full" autoPlay playsInline width={400} height={300} />
      <button onClick={handleCapture} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Capture</button>
    </div>
  )
}
