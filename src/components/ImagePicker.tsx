"use client"
import React from "react"

export default function ImagePicker({ onPick }: { onPick: (dataUrl: string) => void }) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader()
      reader.onload = (ev) => {
        onPick(ev.target?.result as string)
      }
      reader.readAsDataURL(e.target.files[0])
    }
  }
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const reader = new FileReader()
      reader.onload = (ev) => {
        onPick(ev.target?.result as string)
      }
      reader.readAsDataURL(e.dataTransfer.files[0])
    }
  }
  return (
    <div className="flex flex-col items-center gap-2">
      <input type="file" accept="image/*" onChange={handleChange} className="block" />
      <div
        className="border-2 border-dashed border-gray-300 rounded p-4 text-center cursor-pointer hover:bg-gray-50"
        onDrop={handleDrop}
        onDragOver={e => e.preventDefault()}
      >
        Drag & drop image here
      </div>
    </div>
  )
}
