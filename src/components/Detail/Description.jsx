import { useStoreProducts } from "@/zustand/store";
import { Card, Skeleton } from "@nextui-org/react";

export default function Description() {
  const { detail } = useStoreProducts();

  return (
    <div className="w-full">
      <h2 className="text-xl font-bold">Descripción</h2>
      {!detail.description ? (
        // Muestra el esqueleto mientras los datos están cargando
        <Card className="w-full  p-2" radius="lg">
          <Skeleton className="rounded-lg">
            <div className="h-6  rounded-lg bg-default-300"></div>
          </Skeleton>
        </Card>
      ) : (
        // Muestra los datos reales una vez se han obtenido
        <p className="text-sm pt-4">{detail.description}</p>
      )}
      {detail.category === "Carteras" && (
        <section className="py-5">
          <h2 className="text-xl font-bold">Medidas</h2>
          <p className="text-sm pt-4">{detail.measures}</p>
        </section>
      )}
    </div>
  );
}
