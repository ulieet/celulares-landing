"use client"

import { useState, useEffect, Suspense } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import ProductGrid from "@/components/productgrid"
import FilterSidebar from "@/components/filterbar"
import { productos } from "@/data/productos"

function CatalogoContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  
  // Estado para las categorías seleccionadas
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])

  // 1. Al cargar, leemos la URL y soportamos múltiples categorías separadas por comas
  useEffect(() => {
    const categoryParam = searchParams.get("category")
    if (categoryParam) {
      // Convertimos "iphone,mac" en ["iphone", "mac"]
      setSelectedCategories(categoryParam.split(','))
    } else {
      setSelectedCategories([])
    }
  }, [searchParams])

  // 2. Función corregida para SELECCIÓN MÚLTIPLE
  const handleCategoryChange = (category: string) => {
    let newCategories: string[]

    if (selectedCategories.includes(category)) {
      // Si ya estaba seleccionada, la sacamos del array
      newCategories = selectedCategories.filter((c) => c !== category)
    } else {
      // Si no estaba, la agregamos al array existente
      newCategories = [...selectedCategories, category]
    }
    
    setSelectedCategories(newCategories)

    // 3. Actualizamos la URL uniendo las categorías con comas
    if (newCategories.length > 0) {
        router.push(`/catalogo?category=${newCategories.join(',')}`, { scroll: false })
    } else {
        router.push(`/catalogo`, { scroll: false })
    }
  }

  // Filtramos los productos
  const filteredProducts = productos.filter((producto) => {
    if (selectedCategories.length === 0) return true;
    
    // Mostramos el producto si coincide con CUALQUIERA de las categorías seleccionadas
    return selectedCategories.some(cat => 
        producto.nombre.toLowerCase().includes(cat)
    )
  })

  return (
    <div className="min-h-screen bg-white pt-20"> 
      <FilterSidebar 
        className="mt-0"
        selectedCategories={selectedCategories} 
        onCategoryChange={handleCategoryChange}
        onClearFilters={() => {
            setSelectedCategories([])
            router.push('/catalogo', { scroll: false })
        }}
      />
      
      <main className="md:ml-64 p-8 transition-all duration-300">
        <div className="py-10 text-center">
          <h1 className="text-5xl md:text-7xl font-extralight mb-6 tracking-tight text-gray-900">Catálogo</h1>
          <p className="text-xl md:text-2xl text-gray-500 font-light max-w-xl mx-auto">
            {selectedCategories.length > 0 
                ? `Filtros activos: ${selectedCategories.map(c => c.charAt(0).toUpperCase() + c.slice(1)).join(", ")}`
                : "Todos los productos"
            }
          </p>
        </div>
  
        <ProductGrid products={filteredProducts} />
      </main>
    </div>
  )
}

export default function CatalogoPage() {
    return (
        <Suspense fallback={<div className="p-20 text-center">Cargando...</div>}>
            <CatalogoContent />
        </Suspense>
    )
}