
import Hero from "@/components/hero"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Grids from "@/components/herogrids"
import Slider from "@/components/hero-slide-content"
import { StoreVisitSection } from "@/components/store-visit-section"
import ProductGrid from "@/components/productgrid"
import { CategoriesGrid } from "@/components/categories-grid"


export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Slider/>
      
      
      <Hero />
      <Grids/>
      <CategoriesGrid/>

      <ProductGrid/>
      
      <Contact />
      <StoreVisitSection/>
      <Footer />
    </div>
  )
}
