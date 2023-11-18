import { db } from "@/db";
import { redirect } from "next/navigation";

async function createSnippet(formData: FormData) {
  "use server";
  const title = formData.get("title");
  const code = formData.get("code");
  if (!title || !code) return;
  if (title instanceof File || code instanceof File) return;
  try {
    await db.snippet.create({
      data: {
        title,
        code,
      },
    });
  } catch (e) {
    console.error(e);
  } finally {
    redirect("/");
  }
}

function SnippetCreatePage() {
  return (
    <form action={createSnippet}>
      <h3 className="font-bold m-3">Create a Snippet</h3>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <label htmlFor="title" className="w-12">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="border rounded p-2 w-full"
          />
        </div>
        <div className="flex gap-4">
          <label htmlFor="code" className="w-12">
            Code
          </label>
          <textarea
            id="code"
            name="code"
            className="border rounded p-2 w-full"
          />
        </div>
        <button className="rounded p-2 bg-blue-200" type="submit">
          Create
        </button>
      </div>
    </form>
  );
}

export default SnippetCreatePage;
