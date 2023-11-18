import { db } from "@/db";

export default async function Home() {
  const snippets = await db.snippet.findMany();

  return (
    <div>
      {snippets.map((s) => (
        <div key={s.id}>{s.title}</div>
      ))}
    </div>
  );
}
