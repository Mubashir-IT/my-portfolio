"use client"

import { useEffect, useState } from "react"

interface ProgressBarProps {
  percentage: number
}

export default function ProgressBar({ percentage }: ProgressBarProps) {
  const [animatedWidth, setAnimatedWidth] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedWidth(percentage)
    }, 100)
    return () => clearTimeout(timer)
  }, [percentage])

  return (
    <div className="w-full bg-gray-200 rounded-full h-2">
      <div
        className="bg-red-400 h-2 rounded-full transition-all duration-1000 ease-out"
        style={{ width: `${animatedWidth}%` }}
      />
    </div>
  )
}
