"use client"
import ProductGrid from "@/components/productgrid"
import FilterSidebar from "@/components/filterbar"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <FilterSidebar/>
      <main className="ml-64 p-8">
        <div className="py-20 text-center">
          <h1 className="text-7xl font-extralight mb-6 tracking-tight">Catálogo</h1>
          <p className="text-2xl text-gray-500 font-light max-w-xl mx-auto">
            Descubre nuestra colección de productos premium
          </p>
        </div>
  
        {/* Grid */}
        <ProductGrid />
      </main>
    </div>
  )
}
