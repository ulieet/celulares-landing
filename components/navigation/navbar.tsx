import Logo from "./logo"
import { MenuToggle } from "./menu-toggle" // Importa el nuevo componente
import NavLinks from "./nav-links"

export default function Navbar() {
  return (
    <nav className="border-b bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <MenuToggle />
          <NavLinks/>
          <Logo />

        </div>
      </div>
    </nav>
  )
}
