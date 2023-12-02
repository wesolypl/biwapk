import Link from "next/link";
import { createPlace } from "../../actions/actions";
import { CreateForm } from "@/components/CreateForm";

export default async function Edit() {
  return (
    <div className="container flex mx-auto px-8 py-24">
      <div className="flex flex-col border shadow-sm max-w-auto min-w-[50%] mx-auto p-4">
        <h2>Dodaj nowe miejsce</h2>
        <p>Wypełnij poniższy formularz</p>
        <CreateForm />
        <Link href="/" className="mt-4">
          Wstecz
        </Link>
      </div>
    </div>
  );
}
