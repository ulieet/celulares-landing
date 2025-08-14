"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { productos, type ProductosTarjeta } from "@/data/productos"

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

export default function ProductGrid() {
  return (
    <div className="min-h-screen bg-white p-10">
      <h1 className="text-3xl font-bold text-gray-900 text-center mb-10 uppercase tracking-wider">
        Nuestros Productos
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full">
        {productos.map((producto: ProductosTarjeta, index) => (
          <motion.div
            key={producto.id}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="flex flex-col"
          >
            <Card className="flex flex-col py-8 bg-white shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300 overflow-hidden h-full">
              
              <CardTitle className="text-[22px] font-semibold text-gray-900 tracking-tight leading-tight text-center mb-4">
                {producto.nombre}
              </CardTitle>

              <div className="relative w-full h-60 mb-4">
                <Image
                  alt={producto.nombre}
                  src={producto.imagen || "/placeholder.svg"}
                  fill
                  className="object-contain"
                  priority
                />
              </div>


              <CardContent className="flex-1">
                {producto.precioContado ? (
                  <div className="text-center mb-2 ">
                    <span className="text-black font-bold text-2xl">
                      ${producto.precioContado.toLocaleString("es-AR")}
                    </span>
                    <span className="text-gray-500 line-through ml-2">
                      ${producto.precio.toLocaleString("es-AR")}
                    </span>
                    <div className="text-red-600 text-sm">
                      {calcularDescuentoContado(producto.precio, producto.precioContado)}% OFF contado
                    </div>
                  </div>
                ) : (
                  <p className="text-lg text-gray-700 mb-2 text-center">
                    ${producto.precio.toLocaleString("es-AR")}
                  </p>
                )}

                <p className="text-gray-600 text-center text-sm">
                  en {producto.cuotas.match(/\d+/)} cuotas sin interés de{" "}
                  {formatearPrecio(producto.precio, Number(producto.cuotas.match(/\d+/)))} 💳
                </p>

                {producto.envioGratis && (
                  <p className="mt-1 text-green-500 font-medium text-center">Envío gratis</p>
                )}
                {producto.agotado && (
                  <p className="mt-2 text-gray-400 font-semibold text-center">Agotado</p>
                )}
              </CardContent>

              <CardFooter>
                <Button
                  disabled={producto.agotado}
                  className={`w-full h-12 font-medium transition-all duration-300 ${
                    producto.agotado
                      ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                      : "bg-blue-500 hover:to-red-500 text-white shadow-md hover:shadow-lg"
                  }`}
                >
                  {producto.agotado ? "No disponible" : "Ver más"}
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
