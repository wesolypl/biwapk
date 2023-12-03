import Link from "next/link";
import { CreateForm } from "@/components/CreateForm";
import { buttonClasses, buttonOutlineClasses } from "@/styles";
import { getServerSession } from "next-auth";

export default async function Edit() {
  const session = await getServerSession();

  if (!session) {
    return (
      <div className="container mx-auto p-4">
        <div className="flex flex-col items-start">
          <p>
            Musisz być zalogowany emailem w domenie @zhr.pl, żeby dodawać nowe
            miejsca
          </p>
          <Link href="/api/auth/signin" className={`${buttonClasses} mt-4`}>
            Zaloguj
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container flex mx-auto p-4">
      <div className="flex flex-col border rounded-md shadow-sm max-w-auto min-w-[50%] mx-auto p-4">
        <header>
          <h1 className="text-lg font-bold">Dodaj nowe miejsce</h1>
        </header>
        <main>
          <CreateForm />
        </main>
        <Link href="/" className={`${buttonOutlineClasses} mt-4`}>
          Wstecz
        </Link>
        <footer className="mt-4">
          <p className="text-xs">* Pole wymagane</p>
        </footer>
      </div>
    </div>
  );
}
