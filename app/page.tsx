import { MapProvider } from "@/providers/mapProvider";
import { MapComponent } from "@/components/map";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <MapProvider>
        <MapComponent />
      </MapProvider>
    </main>
  );
}
