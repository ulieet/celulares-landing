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
    nombre: "iPhone X",
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
    nombre: "iPhone XS",
    precio: 899999,
    precioContado: 809999,
    imagen: "/images/iphone.png",
    cuotas: "18 cuotas",
    envioGratis: true,
    agotado: false,
  },
  {
    id: 3,
    nombre: "iPhone 13 Pro",
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
    nombre: "iPad Pro 12.9",
    precio: 199999,
    precioContado: 183999,
    imagen: "/images/ipad.jpg",
    cuotas: "12 cuotas",
    envioGratis: true,
    agotado: true,
  },
  {
    id: 5,
    nombre: "Apple Watch Series 8",
    precio: 89999,
    precioContado: 84599,
    imagen: "/images/air.png", // Usamos una imagen genérica si no tienes la de watch
    descuento: 10,
    cuotas: "9 cuotas",
    envioGratis: false,
    agotado: false,
  },
  {
    id: 6,
    nombre: "AirPods Pro (2da Gen)", // Reemplazamos Cámara por AirPods
    precio: 54999,
    precioContado: 50000,
    imagen: "/images/airpods.png",
    cuotas: "6 cuotas",
    envioGratis: true,
    agotado: false,
  },
  {
    id: 7,
    nombre: "MacBook Pro M2",
    precio: 25999,
    precioContado: 24699,
    imagen: "/images/macbook.jpg",
    descuento: 25,
    cuotas: "3 cuotas",
    envioGratis: false,
    agotado: false,
  },
  {
    id: 8,
    nombre: "AirPods Max", // Reemplazamos Monitor por AirPods Max
    precio: 179999,
    precioContado: 165599,
    imagen: "/images/airpods.png",
    cuotas: "12 cuotas",
    envioGratis: true,
    agotado: false,
  },
]