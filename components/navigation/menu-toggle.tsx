"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"

export function MenuToggle() {
  const [open, setOpen] = React.useState(false)

  // Enlaces corregidos a productos Apple reales
  const navItems = [
    { label: "Inicio", href: "/" },
    { label: "iPhones", href: "/catalogo?category=iphone", hasArrow: true },
    { label: "Macbooks", href: "/catalogo?category=mac", hasArrow: true }, // 'mac' matchea con 'MacBook'
    { label: "iPads", href: "/catalogo?category=ipad", hasArrow: true },
    { label: "Apple Watch", href: "/catalogo?category=watch", hasArrow: true },
    { label: "AirPods", href: "/catalogo?category=airpods", hasArrow: true },
    { label: "Contacto", href: "/#contacto" },
  ]

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" aria-label="Alternar menú de navegación">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="w-full sm:max-w-xs p-0">
        <SheetHeader className="flex flex-row items-center justify-between p-10">
          <SheetTitle className="sr-only">Menú de navegación</SheetTitle>
        </SheetHeader>

        <nav className="grid gap-0 py-4">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between px-6 py-3 text-base font-normal text-gray-800 hover:bg-gray-50 transition-colors duration-200"
            >
              <span>{item.label}</span>
              {item.hasArrow && <ArrowRight className="h-4 w-4 text-gray-500" />}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}