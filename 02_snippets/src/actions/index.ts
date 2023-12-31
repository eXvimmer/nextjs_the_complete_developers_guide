"use server";

import { db } from "@/db";
import type { Snippet } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createSnippet(
  _formState: { message: string },
  formData: FormData,
) {
  const title = formData.get("title");
  const code = formData.get("code");
  if (title instanceof File || code instanceof File) {
    return {
      message: "title and code should contain text data",
    };
  }
  if (!title || title.length < 3) {
    return {
      message:
        "title should be provided and it should be at least 3 characters long",
    };
  }
  if (!code || code.length < 3) {
    return {
      message:
        "code should be provided and it should be at least 3 characters long",
    };
  }
  try {
    await db.snippet.create({
      data: {
        title,
        code,
      },
    });
  } catch (e) {
    console.error(e);
    if (e instanceof Error) {
      return {
        message: e.message,
      };
    }
    return {
      message: "failed to create the snippet",
    };
  }
  revalidatePath("/");
  redirect("/");
}

export async function editSnippet(id: Snippet["id"], code: Snippet["code"]) {
  await db.snippet.update({
    where: { id },
    data: { code },
  });
  revalidatePath(`/snippets/${id}`);
  redirect(`/snippets/${id}`);
}

export async function deleteSnippet(id: Snippet["id"]) {
  await db.snippet.delete({
    where: { id },
  });
  revalidatePath("/");
  redirect("/");
}
