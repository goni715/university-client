import { z } from "zod";
const NonWhiteSpaceRegex = /^\S*$/;

export const marksSchema = z.object({
  classTest1: z
    .string()
    .trim()
    .max(2, "ClassTest 1 can't be more than 2 characters")
    .transform((val) => (val === "" ? "0" : val))
    .refine((value) => NonWhiteSpaceRegex.test(value), {
      message: "ClassTest1 Could not contain White space",
    })
    .refine((value) => /^\d+$/.test(value), {
      message: "ClassTest1 must only contain integer Numbers",
    })
    .refine((value) => Number(value) <= 10, {
      message: "ClassTest1 maximum 10 marks",
    })
    .default("0"),
  midTerm: z
    .string()
    .trim()
    .max(2, "Mid Term can't be more than 2 characters")
    .transform((val) => (val === "" ? "0" : val))
    .refine((value) => NonWhiteSpaceRegex.test(value), {
      message: "Mid Term Could not contain White space",
    })
    .refine((value) => /^\d+$/.test(value), {
      message: "Mid Term must only contain integer Numbers",
    })
    .refine((value) => Number(value) <= 10, {
      message: "Mid Term maximum 10 marks",
    })
    .default("0"),
  classTest2: z
    .string()
    .trim()
    .max(2, "ClassTest2 can't be more than 2 characters")
    .transform((val) => (val === "" ? "0" : val))
    .refine((value) => NonWhiteSpaceRegex.test(value), {
      message: "ClassTest2 Could not contain White space",
    })
    .refine((value) => /^\d+$/.test(value), {
      message: "ClassTest2 must only contain integer Numbers",
    })
    .refine((value) => Number(value) <= 10, {
      message: "ClassTest2 maximum 10 marks",
    })
    .default("0"),
  finalTerm: z
    .string()
    .trim()
    .max(2, "Final Term can't be more than 2 characters")
    .transform((val) => (val === "" ? "0" : val))
    .refine((value) => NonWhiteSpaceRegex.test(value), {
      message: "Final Term Could not contain White space",
    })
    .refine((value) => /^\d+$/.test(value), {
      message: "Final Term must only contain Integer Numbers",
    })
    .refine((value) => Number(value) <= 10, {
      message: "Final Term maximum 10 marks",
    })
    .default("0"),
});
