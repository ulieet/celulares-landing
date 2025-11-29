"use client"

import Image from "next/image"
import Link from "next/link" // Importamos Link
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CreditCard } from "lucide-react"
import { ProductosTarjeta } from "@/data/productos"

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

function formatearPrecio(precioTotal: number, cuotas: number): string {
  const montoCuota = precioTotal / cuotas
  return montoCuota.toLocaleString("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 2,
  })
}

function calcularDescuentoContado(precioOriginal: number, precioContado: number): number {
  return Math.round(((precioOriginal - precioContado) / precioOriginal) * 100)
}

interface ProductGridProps {
  products: ProductosTarjeta[]
}

export default function ProductGrid({ products }: ProductGridProps) {
  
  if (!products || products.length === 0) {
    return (
      <div className="text-center py-20 bg-gray-50">
        <h2 className="text-2xl font-bold text-gray-400">No hay productos que coincidan con tu búsqueda.</h2>
      </div>
    )
  }

  return (
    <div className="bg-gray-50 p-6 md:p-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-7xl mx-auto">
        {products.map((producto, index) => {
          const cuotas = Number(producto.cuotas.match(/\d+/)) || 1
          const descuento = producto.precioContado
            ? calcularDescuentoContado(producto.precio, producto.precioContado)
            : 0

          return (
            <motion.div
              key={producto.id}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.05 }}
              className="h-full"
            >
              <Card className="group flex flex-col h-full overflow-hidden border-0 shadow-sm hover:shadow-xl transition-all duration-300 bg-white rounded-2xl">
                
                {/* Imagen */}
                <div className="relative w-full aspect-square bg-gray-50 p-6 overflow-hidden">
                  {descuento > 0 && !producto.agotado && (
                    <span className="absolute top-3 left-3 z-10 bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-sm">
                      {descuento}% OFF
                    </span>
                  )}

                  {producto.envioGratis && !producto.agotado && (
                    <span className="absolute top-3 right-3 z-10 bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wide shadow-sm">
                      Envío Gratis
                    </span>
                  )}
                  
                  <div className="relative w-full h-full transition-transform duration-500 group-hover:scale-110">
                    <Image
                      alt={producto.nombre}
                      src={producto.imagen || "/placeholder.svg"}
                      fill
                      className={`object-contain ${producto.agotado ? "opacity-50 grayscale" : ""}`}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>

                  {producto.agotado && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-100/50 backdrop-blur-[1px] z-20">
                      <span className="bg-gray-800 text-white px-4 py-2 rounded-md font-bold text-sm uppercase">
                        Sin Stock
                      </span>
                    </div>
                  )}
                </div>

                {/* Info */}
                <CardContent className="flex-1 flex flex-col p-5">
                  <h3 className="text-lg font-bold text-gray-800 leading-tight mb-4 group-hover:text-blue-600 transition-colors line-clamp-2 min-h-[3rem]">
                    {producto.nombre}
                  </h3>

                  <div className="mt-auto space-y-3">
                    <div className="flex flex-col">
                        {producto.precioContado ? (
                            <div className="flex items-baseline gap-2">
                                <span className="text-2xl font-extrabold text-gray-900">
                                    ${producto.precioContado.toLocaleString("es-AR")}
                                </span>
                                <span className="text-sm text-gray-400 line-through">
                                    ${producto.precio.toLocaleString("es-AR")}
                                </span>
                            </div>
                        ) : (
                            <span className="text-2xl font-extrabold text-gray-900">
                                ${producto.precio.toLocaleString("es-AR")}
                            </span>
                        )}
                        {producto.precioContado && (
                             <p className="text-xs text-green-600 font-medium">Precio de contado</p>
                        )}
                    </div>

                    <div className="flex items-center gap-2 text-gray-600 bg-blue-50/50 p-2 rounded-lg border border-blue-100">
                        <CreditCard className="w-4 h-4 text-blue-500 flex-shrink-0" />
                        <p className="text-xs">
                          <span className="font-bold text-blue-700">{cuotas} cuotas</span> de {formatearPrecio(producto.precio, cuotas)}
                        </p>
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="p-5 pt-0">
                  {producto.agotado ? (
                    <Button
                      disabled
                      className="w-full font-semibold rounded-xl h-11 bg-gray-200 text-gray-400"
                    >
                      No disponible
                    </Button>
                  ) : (
                    <Button
                      asChild
                      className="w-full font-semibold rounded-xl transition-all duration-300 h-11 bg-gray-900 text-white hover:bg-blue-600 hover:shadow-lg hover:-translate-y-0.5"
                    >
                      {/* Aquí redirigimos al catálogo */}
                      <Link href="/catalogo">
                        Ver detalles
                      </Link>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}