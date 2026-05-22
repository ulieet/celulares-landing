import Logo from "./logo"
import { MenuToggle } from "./menu-toggle" 
import NavLinks from "./nav-links"

export default function Navbar() {
  return (
    <nav className="border-b bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo container */}
          <div className="flex-1 flex items-center">
            <Logo />
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex flex-none items-center justify-center">
            <NavLinks />
          </div>

          {/* Mobile Menu / Right Spacer */}
          <div className="flex-1 flex justify-end items-center">
            <MenuToggle />
          </div>
        </div>
      </div>
    </nav>
  )
}
