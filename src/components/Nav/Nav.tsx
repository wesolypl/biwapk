import Link from "next/link";
import { FaMap, FaPlus } from "react-icons/fa6";

export const Nav = () => {
  return (
    <header className="flex w-full h-12">
      <nav className="container flex mx-auto justify-between items-center text-blue-600">
        <Link
          href="/"
          className="font-bold hover:text-blue-700 transition-colors text-lg"
        >
          Biwapk
        </Link>
        <ul className="flex items-center gap-4">
          <li>
            <Link
              href="/"
              className="flex gap-2 content-center items-center hover:text-blue-700 transition-colors"
            >
              <FaMap className="text-xl" />
              Mapa
            </Link>
          </li>
          <li>
            <Link
              href="/edit"
              className="flex gap-2 items-center rounded-md bg-blue-600 text-white py-1 px-2 hover:bg-blue-700 transition-colors"
            >
              <FaPlus className="text-xl" />
              Dodaj
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
