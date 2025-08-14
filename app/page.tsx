import Navbar from "@/components/navigation/navbar"
import Hero from "@/components/navigation/hero"
import Features from "@/components/navigation/features"
import Contact from "@/components/navigation/contact"
import Footer from "@/components/navigation/footer"
import Grids from "@/components/navigation/herogrids"
import Slider from "@/components/navigation/hero-slide-content"

import ProductGrid from "@/components/navigation/productgrid"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Slider/>
      
      
      <Hero />
      <Grids/>
      <ProductGrid/>
      <Features />
      

      <Contact />
      <Footer />
    </div>
  )
}
