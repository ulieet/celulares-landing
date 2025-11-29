"use client"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown } from "lucide-react"

interface FilterSidebarProps extends React.HTMLAttributes<HTMLElement> {
  selectedCategories: string[];
  onCategoryChange: (category: string) => void;
  onClearFilters: () => void;
}

export default function FilterSidebar({ 
  className, 
  selectedCategories = [], 
  onCategoryChange,
  onClearFilters 
}: FilterSidebarProps) {
  
  // Categorías reales de Apple
  const categories = ["iPhone", "iPad", "Mac", "Watch", "AirPods"];

  return (
    <aside className={`w-64 bg-white p-6 h-screen overflow-y-auto fixed left-0 top-20 border-r z-40 hidden md:block ${className}`}>
      <div className="flex justify-between items-center mb-6 mt-4">
        <h2 className="text-xl font-bold">Filtros</h2>
        {selectedCategories.length > 0 && (
            <button onClick={onClearFilters} className="text-xs text-blue-600 hover:underline">
                Limpiar
            </button>
        )}
      </div>

      <Collapsible defaultOpen>
        <CollapsibleTrigger className="flex justify-between w-full text-left py-2 font-medium hover:text-blue-600 transition-colors">
          Categorías
          <ChevronDown className="h-4 w-4" />
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-3 space-y-3 pl-1">
          {categories.map((cat) => (
            <div key={cat} className="flex items-center space-x-2">
              <Checkbox 
                id={cat} 
                checked={selectedCategories.includes(cat.toLowerCase())}
                onCheckedChange={() => onCategoryChange ? onCategoryChange(cat.toLowerCase()) : null}
              />
              <label 
                htmlFor={cat} 
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
              >
                {cat}
              </label>
            </div>
          ))}
        </CollapsibleContent>
      </Collapsible>

      <Collapsible defaultOpen className="mt-6">
        <CollapsibleTrigger className="flex justify-between w-full text-left py-2 font-medium hover:text-blue-600 transition-colors">
          Precio
          <ChevronDown className="h-4 w-4" />
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-3 space-y-2">
          <div className="flex gap-2">
             <input type="number" className="w-full border rounded px-2 py-1 text-sm" placeholder="Min" />
             <input type="number" className="w-full border rounded px-2 py-1 text-sm" placeholder="Max" />
          </div>
          <Button variant="outline" size="sm" className="w-full mt-2">Aplicar</Button>
        </CollapsibleContent>
      </Collapsible>
    </aside>
  )
}