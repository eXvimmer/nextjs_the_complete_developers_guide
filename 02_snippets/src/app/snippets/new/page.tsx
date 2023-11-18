"use client";

import * as actions from "@/actions";
import { useFormState } from "react-dom";

function SnippetCreatePage() {
  const [formState, action] = useFormState(actions.createSnippet, {
    message: "",
  });

  return (
    <form action={action}>
      <h3 className="m-3 font-bold">Create a Snippet</h3>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <label htmlFor="title" className="w-12">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="w-full rounded border p-2"
          />
        </div>
        <div className="flex gap-4">
          <label htmlFor="code" className="w-12">
            Code
          </label>
          <textarea
            id="code"
            name="code"
            className="w-full rounded border p-2"
          />
        </div>
        {formState.message && (
          <div className="my-2 rounded border border-red-200 bg-red-200 p-2">
            {formState.message}
          </div>
        )}
        <button className="rounded bg-blue-200 p-2" type="submit">
          Create
        </button>
      </div>
    </form>
  );
}

export default SnippetCreatePage;
