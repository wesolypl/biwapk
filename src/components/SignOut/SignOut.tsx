"use client";

import { buttonOutlineClasses } from "@/styles";
import { signOut } from "next-auth/react";
import { FaRightFromBracket } from "react-icons/fa6";

export const SignOut = () => {
  return (
    <div>
      <button
        onClick={() => signOut()}
        className={`${buttonOutlineClasses} px-8 py-4`}
      >
        Wyloguj <FaRightFromBracket />
      </button>
    </div>
  );
};
