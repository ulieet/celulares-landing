"use client"

import { useEffect } from "react"

export default function ScrollToHash() {
  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      const element = document.querySelector(hash)
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" })
        }, 100) 
      }
    }
  }, [])

  return null
}