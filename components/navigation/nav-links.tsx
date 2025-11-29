import Link from "next/link"

const links = [
  { href: "/", label: "Inicio" },
  { href: "/#servicios", label: "Servicios" },
  { href: "/#contacto", label: "Contacto" },
  { href: "/catalogo", label: "Catalogo" },
]

export default function NavLinks() {
  return (
    <div className="hidden md:flex items-center space-x-10">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-gray-900 hover:text-blue-600 px-3 py-2 text-lg font-semibold tracking-wide transition-all duration-200 ease-in-out transform hover:scale-105"

        >
          {link.label}
        </Link>
      ))}
    </div>
  )
}
