import { CategoryCard } from "@/components/category-card"

export function CategoriesGrid() {
  const categories = [
    {
      id: "iphone",
      title: "iPhone",
      image: "/images/iphone.jpg",
      href: "/catalogo?category=iphone", 
      backgroundColor: "from-slate-700 to-slate-800",
    },
    {
      id: "ipad",
      title: "iPad",
      image: "/images/ipad.jpg",
      href: "/catalogo?category=ipad",
      backgroundColor: "from-gray-700 to-gray-800",
    },
    {
      id: "mac",
      title: "Mac",
      image: "/images/macbook.jpg",
      href: "/catalogo?category=macbook",
      backgroundColor: "from-stone-600 to-stone-700",
    },
  ]

  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Explora nuestras categorías</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              title={category.title}
              image={category.image}
              href={category.href}
              backgroundColor={category.backgroundColor}
            />
          ))}
        </div>
      </div>
    </section>
  )
}