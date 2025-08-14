"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { X, Filter, Search } from "lucide-react"
import ProductGrid from "@/components/navigation/productgrid"
import { productos } from "@/data/productos"

export default function CatalogPage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [showFilters, setShowFilters] = useState(false)

  const categories = Array.from(new Set(productos.map(p => p.categoria))).map(c => ({
    id: c,
    label: c.charAt(0).toUpperCase() + c.slice(1),
    count: productos.filter(p => p.categoria === c).length,
  }))

  const toggleCategory = (id: string, checked: boolean) =>
    setSelectedCategories(prev => checked ? [...prev, id] : prev.filter(c => c !== id))

  const clearFilters = () => { setSelectedCategories([]); setSearchTerm("") }

  return (
    <div className="min-h-screen bg-white p-8">
      {/* Header */}
      <header className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
        <h1 className="text-3xl font-bold text-gray-900">Catálogo</h1>

        <div className="flex gap-2 items-center relative">
          <Search className="h-5 w-5 text-gray-400 absolute left-2 top-1/2 -translate-y-1/2" />
          <Input
            placeholder="Buscar productos..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="pl-8 w-64 border-gray-200"
          />
          <Button variant="outline" size="sm" className="md:hidden" onClick={() => setShowFilters(!showFilters)}>
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      </header>

      {/* Filtros */}
      <aside className={`${showFilters ? "block" : "hidden"} md:block mb-6`}>
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-semibold text-gray-900">Filtros</h2>
          {(selectedCategories.length > 0 || searchTerm) && (
            <Button variant="ghost" size="sm" onClick={clearFilters} className="text-gray-500 hover:text-gray-700">
              <X className="h-4 w-4 mr-1" /> Limpiar
            </Button>
          )}
        </div>

        <div className="space-y-3">
          {categories.map(c => (
            <div key={c.id} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Checkbox
                  id={c.id}
                  checked={selectedCategories.includes(c.id)}
                  onCheckedChange={checked => toggleCategory(c.id, checked as boolean)}
                />
                <label htmlFor={c.id} className="text-sm text-gray-700 cursor-pointer">{c.label}</label>
              </div>
              <span className="text-xs text-gray-400">{c.count}</span>
            </div>
          ))}
        </div>
      </aside>

      {/* Grid de productos */}
      <ProductGrid/>
    </div>
  )
}
