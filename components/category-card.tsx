"use client"

interface CategoryCardProps {
  title: string
  image: string
  href: string
  backgroundColor?: string
}

export function CategoryCard({ title, image, href, backgroundColor = "from-blue-500 to-blue-600" }: CategoryCardProps) {
  return (
    <a href={href}>
      <div
        className={`relative h-80 rounded-3xl overflow-hidden cursor-pointer group bg-gradient-to-br ${backgroundColor}`}
      >
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />

        <div className="absolute inset-0 overflow-hidden">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-3xl font-bold text-white drop-shadow-lg">{title}</h3>
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
      </div>
    </a>
  )
}
