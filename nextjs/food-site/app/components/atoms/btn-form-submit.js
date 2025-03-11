"use client"

import { useFormStatus } from "react-dom";

export default function BtnFormSubmit({ text }) {
  const { pending } = useFormStatus();
  return (
    <button disabled={pending} type="submit">
      {pending ? 'Submitting...' : text}
    </button>
  )
}
