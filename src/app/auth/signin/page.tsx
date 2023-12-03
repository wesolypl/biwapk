import { SignIn } from "@/components/SignIn";
import { getServerSession } from "next-auth";
import { getProviders } from "next-auth/react";
import { redirect } from "next/navigation";

const SignInPage = async () => {
  const providers = await getProviders();
  const session = await getServerSession();

  if (session) {
    return redirect("/");
  }

  return (
    <>
      {providers &&
        Object.values(providers).map((provider) => (
          <SignIn key={provider.id} provider={provider} />
        ))}
    </>
  );
};

export default SignInPage;
