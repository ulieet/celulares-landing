"use client"

interface SlidingBannerProps {
  text?: string
  speed?: number
  bgColor?: string
  textColor?: string
}

export default function SlidingBanner({
  text = "USADOS PREMIUM - 3 MESES DE GARANTÍA - ENVÍOS A TODO EL PAÍS",
  speed = 30,
  bgColor = "bg-blue-600",
  textColor = "text-white",
}: SlidingBannerProps) {
  return (
    <>
     
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        .animate-marquee {
          animation: marquee ${speed}s linear infinite;
        }
      `}</style>

      <div className={`${bgColor} ${textColor} text-xs py-2 overflow-hidden`}>
        <div className="animate-marquee whitespace-nowrap">
          <span className="mx-8">{text}</span>
          <span className="mx-8">{text}</span>
          <span className="mx-8">{text}</span>
          <span className="mx-8">{text}</span>
        </div>
      </div>
    </>
  )
}
