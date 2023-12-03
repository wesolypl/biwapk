"use client";

import { buttonOutlineClasses } from "@/styles";
import { ClientSafeProvider, signIn } from "next-auth/react";
import { FaGoogle } from "react-icons/fa6";

type SignInProps = {
  provider: ClientSafeProvider;
};

export const SignIn = (props: SignInProps) => {
  const { provider } = props;
  return (
    <div>
      <button
        onClick={() => signIn(provider.id)}
        className={`${buttonOutlineClasses} px-8 py-4`}
      >
        Zaloguj się z {provider.name} <FaGoogle />
      </button>
    </div>
  );
};
