"use server";

import { z } from "zod";
import type { CreateTopicFormState } from "@/types";

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
