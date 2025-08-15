"use client"

import type React from "react"
import {CircleUserRound} from "lucide-react"

export default function UserComponent(){

    return (
      <>
      <div className="flex items-center space-x-2">
        <CircleUserRound className="h-8 w-8 text-blue-500" />
        <span className="text-gray-800">User Name</span>
      </div>
      </>
    )
}