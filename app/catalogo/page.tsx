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
  // Estado para los estados (nuevo/reacondicionado)
  const [selectedConditions, setSelectedConditions] = useState<string[]>([])
  // Estado para el rango de precio
  const [priceRange, setPriceRange] = useState<{ min: number | null, max: number | null }>({ min: null, max: null })

  // 1. Al cargar, leemos la URL
  useEffect(() => {
    const categoryParam = searchParams.get("category")
    if (categoryParam) {
      setSelectedCategories(categoryParam.split(','))
    } else {
      setSelectedCategories([])
    }
  }, [searchParams])

  // Manejo de categorías
  const handleCategoryChange = (category: string) => {
    let newCategories: string[]
    if (selectedCategories.includes(category)) {
      newCategories = selectedCategories.filter((c) => c !== category)
    } else {
      newCategories = [...selectedCategories, category]
    }
    setSelectedCategories(newCategories)

    if (newCategories.length > 0) {
        router.push(`/catalogo?category=${newCategories.join(',')}`, { scroll: false })
    } else {
        router.push(`/catalogo`, { scroll: false })
    }
  }

  // Manejo de estado (Nuevo/Reacondicionado)
  const handleConditionChange = (condition: string) => {
    if (selectedConditions.includes(condition)) {
      setSelectedConditions(selectedConditions.filter((c) => c !== condition))
    } else {
      setSelectedConditions([...selectedConditions, condition])
    }
  }

  const handlePriceChange = (min: number | null, max: number | null) => {
    setPriceRange({ min, max })
  }

  // Filtramos los productos
  const filteredProducts = productos.filter((producto) => {
    // Filtro por categoría
    const matchesCategory = selectedCategories.length === 0 || 
      selectedCategories.some(cat => producto.nombre.toLowerCase().includes(cat));
    
    // Filtro por estado
    const matchesCondition = selectedConditions.length === 0 || 
      selectedConditions.includes(producto.estado);

    // Filtro por precio (soporta min o max opcionalmente)
    const min = priceRange.min ?? 0;
    const max = priceRange.max ?? Infinity;
    const matchesPrice = producto.precio >= min && producto.precio <= max;

    return matchesCategory && matchesCondition && matchesPrice;
  })

  return (
    <div className="min-h-screen bg-white pt-20"> 
      <FilterSidebar 
        className="mt-0"
        selectedCategories={selectedCategories} 
        selectedConditions={selectedConditions}
        onCategoryChange={handleCategoryChange}
        onConditionChange={handleConditionChange}
        onPriceChange={handlePriceChange}
        onClearFilters={() => {
            setSelectedCategories([])
            setSelectedConditions([])
            setPriceRange({ min: null, max: null })
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
  
        {filteredProducts.length > 0 ? (
          <ProductGrid products={filteredProducts} />
        ) : (
          <div className="py-20 text-center">
            <p className="text-red-500 text-2xl font-light">No se encontraron productos con los filtros seleccionados.</p>
            <button 
              onClick={() => {
                setSelectedCategories([])
                setSelectedConditions([])
                setPriceRange({ min: null, max: null })
                router.push('/catalogo', { scroll: false })
              }}
              className="mt-4 text-gray-500 hover:text-gray-800 underline transition-colors"
            >
              Limpiar todos los filtros
            </button>
          </div>
        )}
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