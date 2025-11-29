import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

interface FilterSidebarProps extends React.HTMLAttributes<HTMLElement> {}

export default function FilterSidebar({ className }: FilterSidebarProps) {
  return (
    <aside className={`w-75 bg-white  p-4 h-screen overflow-y-auto fixed left-0 border-2`}>
      <h2 className="text-4xl font-bold mb-6 mt-40">Filtros</h2>


      <Collapsible defaultOpen>
        <CollapsibleTrigger className="w-full text-left py-7 font-medium hover:bg-gray-100 rounded mt-20">
          Categorías
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-2 space-y-2">
          <Checkbox id="cat1" /> <label htmlFor="cat1">Electrónica</label><br />
          <Checkbox id="cat2" /> <label htmlFor="cat2">Accesorios</label><br />
          <Checkbox id="cat3" /> <label htmlFor="cat3">Hogar</label>
        </CollapsibleContent>
      </Collapsible>

    
      <Collapsible defaultOpen>
        <CollapsibleTrigger className="w-full text-left py-2 font-medium hover:bg-gray-100 rounded mt-4">
          Precio
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-2 space-y-2">
          <label className="block">Min:</label>
          <input type="number" className="w-full border rounded px-2 py-1" placeholder="0" />
          <label className="block mt-2">Max:</label>
          <input type="number" className="w-full border rounded px-2 py-1" placeholder="1000" />
        </CollapsibleContent>
      </Collapsible>

      <Button className="mt-6 w-full">Aplicar filtros</Button>
    </aside>
  )
}
