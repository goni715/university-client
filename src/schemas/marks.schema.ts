import { z } from "zod";
const NonWhiteSpaceRegex = /^\S*$/;

export const marksSchema = z.object({
    classTest1: z
    .string()
    .trim()
    .max(2, "ClassTest 1 can't be more than 2 characters")
    .transform((val) => (val === '' ? '0' : val))
    .refine((value) => NonWhiteSpaceRegex.test(value), {
      message: "ClassTest 1 Could not contain White space",
    })
    .refine((value) => /^\d+$/.test(value), {
      message: "ClassTest must only contain Numbers",
    })
    .refine(value => Number(value) <= 10, {
        message: "ClassTest1 maximum 10 marks",
    })
    .default("0")
});
