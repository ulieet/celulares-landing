import Link from "next/link"
import Image from "next/image"

export default function Logo() {
  return (
    <Link href="/" className="flex justify-between items-center h-16 relative">
      <Image
        src="/placeholder.svg?height=32&width=120&text=Logo"
        alt="Logo"
        width={120}
        height={32}
        className="h-8 w-auto"
      />
    </Link>
  )
}
