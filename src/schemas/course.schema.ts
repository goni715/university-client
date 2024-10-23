import { z } from "zod";
const NonWhiteSpaceRegex = /^\S*$/;

export const courseSchema = z.object({
  title: z
    .string({
      required_error: "Title is required !",
    })
    .min(1, { message: "Title is required !" })
    .trim(),
  prefix: z
    .string({
      required_error: "Prefix is required !",
    })
    .min(1, { message: "Prefix is required !" })
    .trim(),
  code: z
    .string({
      required_error: "Code is required",
    })
    .min(1, { message: "Code is required" })
    .trim()
    .max(3, "Code can't be more than 3 characters")
    .refine((value) => NonWhiteSpaceRegex.test(value), {
      message: "Code Could not contain White space",
    })
    .refine((value) => /^\d+$/.test(value), {
      message: "Code must only contain Numbers",
    }),
    credits: z
    .string({
      required_error: "Credits required",
    })
    .min(1, { message: "Credits required" })
    .trim()
    .max(3, "Code can't be more than 3 characters")
    .refine((value) => NonWhiteSpaceRegex.test(value), {
      message: "Crdits Could not contain White space",
    })
    .refine((value) => /^\d+$/.test(value), {
      message: "Credits must only contain Numbers",
    }),
    preRequisiteCourses: z.array(z.string()).optional()
});
