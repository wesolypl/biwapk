import { buttonClasses, buttonOutlineClasses } from "@/styles";
import Link from "next/link";
import { FaHouse, FaRotateRight } from "react-icons/fa6";

const ErrorPage = ({ searchParams }: { searchParams: { error: string } }) => {
  const { error } = searchParams;

  if (error === "AccessDenied") {
    return (
      <div className="flex flex-col items-center">
        <h1 className="text-lg">
          Dostęp do Biwapki ograniczony został tylko do adresów email w domenie
          @zhr.pl
        </h1>
        <Link href="/auth/signin" className={`${buttonClasses} mt-2`}>
          Spróbuj ponownie <FaRotateRight />
        </Link>
        <Link href="/" className={`${buttonOutlineClasses} mt-2`}>
          Strona głowna <FaHouse />
        </Link>
      </div>
    );
  }
  console.error(error);
  return <>{error}</>;
};
export default ErrorPage;
