import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const images = [
  "/images/trade.png",
  "/images/applelogo.png",
  "/images/airpods.png",
];

export default function Grids() {
  return (
    <div className="grid md:grid-cols-3 gap-y-10 gap-x-2 mt-10">
  {images.map((src, index) => (
    <Card key={index} className="hover:shadow-lg transition-shadow mx-2">
      <CardContent className="p-4">
        <Image
          src={src}
          alt={`Imagen ${index + 1}`}
          width={400}
          height={300}
          className="rounded-lg object-cover"
          priority={index === 0}
        />
      </CardContent>
    </Card>
  ))}
</div>

  );
}
