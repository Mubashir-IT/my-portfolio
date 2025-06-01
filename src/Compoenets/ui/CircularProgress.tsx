"use client"

import { useEffect, useState } from "react"

interface CircularProgressProps {
  percentage: number
  className?: string
}

export default function CircularProgress({ percentage, className = "stroke-blue-500" }: CircularProgressProps) {
  const [animatedPercentage, setAnimatedPercentage] = useState(0)
  const radius = 45
  const circumference = 2 * Math.PI * radius

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedPercentage(percentage)
    }, 100)
    return () => clearTimeout(timer)
  }, [percentage])

  const strokeDashoffset = circumference - (animatedPercentage / 100) * circumference

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg className="w-32 h-32 transform -rotate-90">
        <circle
          className="stroke-gray-200"
          strokeWidth="8"
          fill="transparent"
          r={radius}
          cx="64"
          cy="64"
        />
        <circle
          className={className}
          strokeWidth="8"
          strokeLinecap="round"
          fill="transparent"
          r={radius}
          cx="64"
          cy="64"
          style={{
            strokeDasharray: circumference,
            strokeDashoffset,
            transition: "stroke-dashoffset 0.5s ease",
          }}
        />
      </svg>
      <span className="absolute text-2xl font-semibold text-gray-700">
        {animatedPercentage}%
      </span>
    </div>
  )
}
