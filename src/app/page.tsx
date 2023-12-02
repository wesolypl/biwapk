import prisma from "@/lib/prisma";
import dynamic from "next/dynamic";
import Link from "next/link";
import { FaPlus } from "react-icons/fa6";

const MapComponent = dynamic(() => import("@/components/Map"), { ssr: false });

export default async function Home() {
  const places = await prisma.place.findMany();

  return (
    <main className="flex flex-col h-full relative">
      <MapComponent places={places} />

      <Link
        href="/edit"
        className="bg-blue-600 p-3 text-white rounded-full hover:bg-blue-700 transition-colors absolute bottom-2 lg:bottom-10 right-2 lg:right-10 z-[2000] text-2xl lg:text-4xl"
      >
        <FaPlus />
      </Link>
    </main>
  );
}
