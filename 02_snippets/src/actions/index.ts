"use server";

import { db } from "@/db";
import type { Snippet } from "@prisma/client";
import { redirect } from "next/navigation";

export async function editSnippet(id: Snippet["id"], code: Snippet["code"]) {
  await db.snippet.update({
    where: { id },
    data: { code },
  });
  redirect(`/snippets/${id}`);
}

export async function deleteSnippet(id: Snippet["id"]) {
  await db.snippet.delete({
    where: { id },
  });
  redirect("/");
}
