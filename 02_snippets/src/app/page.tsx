import { db } from "@/db";
import Link from "next/link";

export default async function Home() {
  const snippets = await db.snippet.findMany();

  return (
    <div>
      <div className="m-2 flex items-center justify-between">
        <h1 className="text-xl font-bold">Snippets</h1>
        <Link className="rounded border p-2" href="/snippets/new">
          New
        </Link>
      </div>
      <div className="flex flex-col gap-2">
        {snippets.map((s) => (
          <Link
            className="flex items-center justify-between rounded border p-2"
            href={`/snippets/${s.id}`}
            key={s.id}
          >
            <div>{s.title}</div>
            <div>View</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
