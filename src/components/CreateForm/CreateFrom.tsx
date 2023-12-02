"use client";

import { createPlace } from "@/actions/actions";
import { useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { redirect } from "next/navigation";

const initialState: { message: string | null; success: boolean | null } = {
  message: null,
  success: null,
};

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      className="bg-green-500 p-2 text-white rounded-md mt-4 hover:bg-green-700 transition-colors"
      aria-disabled={pending}
      disabled={pending}
    >
      {pending ? "Dodawanie..." : "Dodaj"}
    </button>
  );
};

export const CreateForm = () => {
  const [state, formAction] = useFormState(createPlace, initialState);

  useEffect(() => {
    if (state.success) {
      redirect("/");
    }
    return () => {};
  }, [state]);

  return (
    <form action={formAction} className="flex flex-col flex-grow-0">
      <label htmlFor="name" className="flex flex-col">
        Nazwa:
        <input name="name" type="text" className="border" />
      </label>
      <label htmlFor="description" className="flex flex-col mt-2">
        Opis:
        <textarea name="description" className="border"></textarea>
      </label>
      <label htmlFor="street" className="flex flex-col mt-2">
        Ulica:
        <input name="street" type="text" className="border" />
      </label>
      <label htmlFor="zipCode" className="flex flex-col mt-2">
        Kod pocztowy:
        <input name="zipCode" type="text" className="border" />
      </label>
      <label htmlFor="city" className="flex flex-col mt-2 ">
        Miasto:
        <input name="city" type="text" className="border" />
      </label>
      <label htmlFor="country" className="flex flex-col mt-2">
        Kraj:
        <input
          name="country"
          type="text"
          className="border"
          defaultValue="Polska"
        />
      </label>
      <SubmitButton />
      <p aria-live="polite" className="sr-only">
        {state?.message}
      </p>
    </form>
  );
};
