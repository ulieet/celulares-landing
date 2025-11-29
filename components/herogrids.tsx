import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const images = [
  "/images/trade.png",
  "/images/applelogo.png",
  "/images/airpods.png",
];

export default function Grids() {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-6 mt-10">
        {images.map((src, index) => (
          <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-md bg-white overflow-hidden group">
            <CardContent className="p-6">
              {/* Contenedor de imagen con tamaño controlado */}
              <div className="relative w-full h-64 overflow-hidden rounded-lg">
                <Image
                  src={src}
                  alt={`Imagen ${index + 1}`}
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}