import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: "🚚",
    title: "Rápido",
    description: "Entregamos en el dia",
  },
  {
    icon: "🎯",
    title: "Preciso",
    description: "Resultados exactos adaptados a tus necesidades",
  },
  
  {
    icon: "🔒",
    title: "Seguro",
    description: "Brindamos una garantia de x dias",
  },
]

export default function Features() {
  return (
    <section id="servicios" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Sobre nuestro servicio</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">Porque confiar en nosotros</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gray-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
