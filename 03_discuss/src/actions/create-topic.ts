"use server";

import { z } from "zod";
import type { CreateTopicFormState } from "@/types";
import { auth } from "@/auth";

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
  return { errors: {} };
  // TODO: revalidate the home page
  // throw new Error("TODO: implement createTopic");
}
