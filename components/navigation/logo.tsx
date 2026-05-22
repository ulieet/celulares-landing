import Link from "next/link"
import Image from "next/image"

export default function Logo() {
  return (
    
    <Link href="/" className="flex items-center">
      <Image
        src="/images/logo.png"
        alt="Logo"
        width={160}
        height={48}
        className="h-16 w-auto object-contain" 
      />
    </Link>
  )
}