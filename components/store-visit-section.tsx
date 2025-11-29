import { MapPin, Clock, User, ShieldCheck, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

export function StoreVisitSection() {
  return (
    <section className="w-full px-4 py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* ... (resto del código del header y grid de features igual) ... */}
        <div className="text-center mb-16 md:mb-20">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground mb-6 text-pretty">
            Visita nuestro showroom
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-16">
            {/* ... (contenido de los items igual) ... */}
             <div className="group">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-foreground/5 flex items-center justify-center group-hover:bg-foreground/10 transition-colors duration-300">
                <MapPin className="w-6 h-6 text-foreground" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2">Ubicación Céntrica</h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  En pleno centro de La Plata, con fácil acceso por transporte público.
                </p>
              </div>
            </div>
          </div>

          <div className="group">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-foreground/5 flex items-center justify-center group-hover:bg-foreground/10 transition-colors duration-300">
                <Clock className="w-6 h-6 text-foreground" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2">Horario Extendido</h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Lunes a viernes de 10:00 a 19:00 hs y sábados de 10:00 a 14:00 hs.
                </p>
              </div>
            </div>
          </div>

          <div className="group">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-foreground/5 flex items-center justify-center group-hover:bg-foreground/10 transition-colors duration-300">
                <User className="w-6 h-6 text-foreground" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2">Atención Personalizada</h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Nuestros asesores te guiarán y despejarán todas tus dudas.
                </p>
              </div>
            </div>
          </div>

          <div className="group">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-foreground/5 flex items-center justify-center group-hover:bg-foreground/10 transition-colors duration-300">
                <ShieldCheck className="w-6 h-6 text-foreground" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2">Compra Segura</h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Verifica tu equipo antes de finalizar la compra y obtené garantía oficial.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mb-12">
          <div className="bg-card rounded-3xl overflow-hidden shadow-sm border border-border">
            <div className="p-4 md:p-6 border-b border-border">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-foreground" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Nos encontrás en</p>
                  <p className="text-base md:text-lg font-semibold text-foreground">
                    Calle 7 Nº 680, La Plata
                  </p>
                </div>
              </div>
            </div>
            <div className="relative w-full h-[400px] md:h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3279.9618054079895!2d-57.95867952345696!3d-34.92049577282311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e62f9dede3c5%3A0x2d64adbeaec47c2d!2sCalle%207%20680%2C%20La%20Plata%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1700000000000!5m2!1ses!2sar"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>

        {/* CTA Buttons - AQUÍ APLICAMOS EL CAMBIO */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="w-full sm:w-auto text-base md:text-lg px-8 py-6 rounded-full font-medium bg-gray-900 text-white hover:bg-blue-600 hover:scale-105 transition-all duration-300"
          >
            <Calendar className="w-5 h-5 mr-2" strokeWidth={2} />
            Agendar Visita
          </Button>
        </div>
      </div>
    </section>
  )
}