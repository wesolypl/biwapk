import Link from "next/link";
import { CreateForm } from "@/components/CreateForm";
import { buttonOutlineClasses } from "@/styles";

export default async function Edit() {
  return (
    <div className="container flex mx-auto px-4 pt-4">
      <div className="flex flex-col border rounded-md shadow-sm max-w-auto min-w-[50%] mx-auto p-4">
        <header>
          <h1 className="text-lg font-bold">Dodaj nowe miejsce</h1>
          <p className="text-sm">Uzupełnij formularz</p>
          <p className="text-sm">
            W opisie możesz podać np. informacje kontaktowe, warunki.
          </p>
          <p className="text-sm">
            Opis będzie widoczny tylko dla zalogowanych użytkowników.
          </p>
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
