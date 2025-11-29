export interface ProductosTarjeta {
  id: number
  nombre: string
  precio: number
  imagen: string
  descuento?: number
  cuotas: string
  envioGratis: boolean
  agotado: boolean
  precioContado?: number
}

export const productos: ProductosTarjeta[] = [
  {
    id: 1,
    nombre: "Iphone x",
    precio: 299999,
    precioContado: 275999,
    imagen: "/images/iphone.png",
    descuento: 15,
    cuotas: "12 cuotas",
    envioGratis: true,
    agotado: false,
  },
  {
    id: 2,
    nombre: "Iphone xs",
    precio: 899999,
    precioContado: 809999,
    imagen: "/images/iphone.png",
    cuotas: "18 cuotas",
    envioGratis: true,
    agotado: false,
  },
  {
    id: 3,
    nombre: "Iphone 13 pro",
    precio: 45999,
    precioContado: 42829,
    imagen: "/images/iphone.png",
    descuento: 20,
    cuotas: "6 cuotas",
    envioGratis: true,
    agotado: false,
  },
  {
    id: 4,
    nombre: "ipad Pro 12 pulgadas",
    precio: 199999,
    precioContado: 183999,
    imagen: "/images/iphone.png",
    cuotas: "12 cuotas",
    envioGratis: true,
    agotado: true,
  },
  {
    id: 5,
    nombre: "Apple watch",
    precio: 89999,
    precioContado: 84599,
    imagen: "/images/iphone.png",
    descuento: 10,
    cuotas: "9 cuotas",
    envioGratis: false,
    agotado: false,
  },
  {
    id: 6,
    nombre: "Cámara Digital 4K",
    precio: 549999,
    precioContado: 500499,
    imagen: "/images/iphone.png",
    cuotas: "15 cuotas",
    envioGratis: true,
    agotado: false,
  },
  {
    id: 7,
    nombre: "MACBOOK PRO",
    precio: 25999,
    precioContado: 24699,
    imagen: "/images/iphone.png",
    descuento: 25,
    cuotas: "3 cuotas",
    envioGratis: false,
    agotado: false,
  },
  {
    id: 8,
    nombre: "Monitor 4K 27 pulgadas",
    precio: 179999,
    precioContado: 165599,
    imagen: "/images/iphone.png",
    cuotas: "12 cuotas",
    envioGratis: true,
    agotado: false,
  },
]