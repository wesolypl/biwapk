import { buttonClasses } from "@/styles";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { FaMap, FaPlus, FaUser } from "react-icons/fa6";

export const Nav = async () => {
  const session = await getServerSession();
  return (
    <header className="flex w-full h-12 flex-shrink-0">
      <nav className="container flex mx-auto justify-between items-center text-blue-600 px-2">
        <Link
          href="/"
          className="font-bold hover:text-blue-700 transition-colors text-lg"
        >
          Biwapka
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
            <Link href="/edit" className={buttonClasses}>
              <FaPlus className="text-xl" />
              Dodaj
            </Link>
          </li>
          <li>
            {session ? (
              <Link href="/api/auth/signout">
                <FaUser />
              </Link>
            ) : (
              <Link href="/api/auth/signin">
                <FaUser />
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};
