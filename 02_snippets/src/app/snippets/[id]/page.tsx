import { db } from "@/db";
import { notFound } from "next/navigation";

async function SnippetDetailPage({ params }: { params: { id: string } }) {
  const snippet = await db.snippet.findFirst({
    where: {
      id: parseInt(params.id),
    },
  });
  if (!snippet) {
    return notFound();
  }
  return (
    <div>
      <div className="m-4 flex items-center justify-between">
        <h1 className="text-xl font-bold">{snippet.title}</h1>
        <div className="flex gap-4">
          {/* TODO: make buttons work */}
          <button className="rounded border p-2">Edit</button>
          <button className="rounded border p-2">Delete</button>
        </div>
      </div>
      <pre className="rounded border border-gray-200 bg-gray-200 p-3">
        <code>{snippet.code}</code>
      </pre>
    </div>
  );
}

export default SnippetDetailPage;
