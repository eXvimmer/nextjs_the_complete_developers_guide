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
  return <div>{snippet.title}</div>;
}

export default SnippetDetailPage;
