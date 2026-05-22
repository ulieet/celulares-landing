"use client"
import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown } from "lucide-react"

interface FilterSidebarProps extends React.HTMLAttributes<HTMLElement> {
  selectedCategories: string[];
  selectedConditions: string[];
  onCategoryChange: (category: string) => void;
  onConditionChange: (condition: string) => void;
  onPriceChange: (min: number | null, max: number | null) => void;
  onClearFilters: () => void;
}

export default function FilterSidebar({ 
  className, 
  selectedCategories = [], 
  selectedConditions = [],
  onCategoryChange,
  onConditionChange,
  onPriceChange,
  onClearFilters 
}: FilterSidebarProps) {
  
  const [minPrice, setMinPrice] = useState<string>("")
  const [maxPrice, setMaxPrice] = useState<string>("")

  // Categorías reales de Apple
  const categories = ["iPhone", "iPad", "Mac", "Watch", "AirPods"];
  const conditions = ["Nuevo", "Reacondicionado"];

  const formatDisplayPrice = (value: string) => {
    if (!value) return "";
    const numericValue = value.replace(/\D/g, "");
    return numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/\D/g, "");
    setMinPrice(formatDisplayPrice(rawValue));
    
    const min = rawValue === "" ? null : Number(rawValue);
    const max = maxPrice.replace(/\D/g, "") === "" ? null : Number(maxPrice.replace(/\D/g, ""));
    onPriceChange(min, max);
  };

  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/\D/g, "");
    setMaxPrice(formatDisplayPrice(rawValue));
    
    const min = minPrice.replace(/\D/g, "") === "" ? null : Number(minPrice.replace(/\D/g, ""));
    const max = rawValue === "" ? null : Number(rawValue);
    onPriceChange(min, max);
  };

  const handleClear = () => {
    setMinPrice("")
    setMaxPrice("")
    onClearFilters()
  }

  return (
<aside className={`w-full md:w-64 bg-white p-4 md:p-6 md:h-screen md:overflow-y-auto md:fixed md:left-0 md:top-20 md:border-r z-40 ${className}`}>      
  <div className="flex justify-between items-center mb-6 mt-4">
        <h2 className="text-xl font-bold">Filtros</h2>
        {(selectedCategories.length > 0 || selectedConditions.length > 0 || minPrice !== "" || maxPrice !== "") && (
            <button onClick={handleClear} className="text-xs text-blue-600 hover:underline">
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
          Estado
          <ChevronDown className="h-4 w-4" />
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-3 space-y-3 pl-1">
          {conditions.map((cond) => (
            <div key={cond} className="flex items-center space-x-2">
              <Checkbox 
                id={cond} 
                checked={selectedConditions.includes(cond.toLowerCase())}
                onCheckedChange={() => onConditionChange ? onConditionChange(cond.toLowerCase()) : null}
              />
              <label 
                htmlFor={cond} 
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
              >
                {cond}
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
             <input 
               type="text" 
               inputMode="numeric"
               className="w-full border rounded px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500" 
               placeholder="Min" 
               value={minPrice}
               onChange={handleMinPriceChange}
             />
             <input 
               type="text" 
               inputMode="numeric"
               className="w-full border rounded px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500" 
               placeholder="Max" 
               value={maxPrice}
               onChange={handleMaxPriceChange}
             />
          </div>
        </CollapsibleContent>
      </Collapsible>
    </aside>
  )
}