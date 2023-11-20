"use server";

import { z } from "zod";
import { auth } from "@/auth";
import type { CreateTopicFormState } from "@/types";
import type { Topic } from "@prisma/client";
import paths from "@/path";
import { db } from "@/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const createTopicSchema = z.object({
  name: z
    .string()
    .min(3)
    .regex(/[a-z-]/, {
      message: "must be lower case letters or dashes without spaces",
    }),
  description: z.string().min(10),
});

export async function createTopic(
  _formState: CreateTopicFormState,
  formData: FormData,
): Promise<CreateTopicFormState> {
  const session = await auth();
  if (!session || !session.user) {
    return {
      errors: {
        _form: ["you must be signed in to create a topic"],
      },
    };
  }
  const result = createTopicSchema.safeParse({
    name: formData.get("name"),
    description: formData.get("description"),
  });
  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  let topic: Topic;
  try {
    topic = await db.topic.create({
      data: {
        slug: result.data.name,
        description: result.data.description,
      },
    });
  } catch (err) {
    if (err instanceof Error) {
      return {
        errors: {
          _form: [err.message],
        },
      };
    }
    return {
      errors: {
        _form: ["something went wrong"],
      },
    };
  }
  revalidatePath(paths.home());
  redirect(paths.topicShow(topic.slug));
}
