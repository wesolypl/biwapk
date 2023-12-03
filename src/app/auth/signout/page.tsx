import { SignOut } from "@/components/SignOut";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const SignOutPage = async () => {
  const session = await getServerSession();

  if (!session) {
    return redirect("/auth/signin");
  }

  return <SignOut />;
};

export default SignOutPage;
