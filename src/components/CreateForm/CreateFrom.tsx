"use client";

import { createPlace } from "@/actions/actions";
import { useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { redirect } from "next/navigation";
import { buttonClasses, inputClasses, labelClasses } from "@/styles";

const initialState: { message: string | null; success: boolean | null } = {
  message: null,
  success: null,
};

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      className={`${buttonClasses} mt-4`}
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
      <label htmlFor="name" className={labelClasses}>
        Nazwa*:
        <input name="name" type="text" className={inputClasses} required />
      </label>
      <label htmlFor="description" className={labelClasses}>
        Opis*:
        <br />
        Możesz podać np.: informacje o warunkach, finansach, dane kontaktowe.
        <textarea name="description" className={inputClasses}></textarea>
      </label>
      <label htmlFor="street" className={labelClasses}>
        Ulica*:
        <input name="street" type="text" className={inputClasses} required />
      </label>
      <label htmlFor="zipCode" className={labelClasses}>
        Kod pocztowy*:
        <input name="zipCode" type="text" className={inputClasses} required />
      </label>
      <label htmlFor="city" className={labelClasses}>
        Miasto*:
        <input name="city" type="text" className={inputClasses} required />
      </label>
      <label htmlFor="country" className={labelClasses}>
        Kraj*:
        <input
          name="country"
          type="text"
          className={inputClasses}
          defaultValue="Polska"
          required
        />
      </label>
      <SubmitButton />
      <p aria-live="polite" className="sr-only">
        {state?.message}
      </p>
    </form>
  );
};
