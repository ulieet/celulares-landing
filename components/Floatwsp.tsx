import { MessageCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface WhatsappFloatingButtonProps {
  message?: string
  className?: string
}

export default function WhatsappFloatingButton({message, className }: WhatsappFloatingButtonProps) {
  const whatsappLink = `https://wa.me/${3}${message ? `?text=${encodeURIComponent(message)}` : ""}`

  return (
    <a
      href="/"
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "fixed bottom-20 right-15 z-50 flex w-20 h-20 mr-8 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 ",
        className,
      )}
      aria-label="Chatear con nosotros en WhatsApp"
    >
      <MessageCircle className="h-12 w-12" />
    </a>
  )
}
