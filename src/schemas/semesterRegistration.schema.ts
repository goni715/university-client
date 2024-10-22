import { z } from "zod";
const NonWhiteSpaceRegex = /^\S*$/;

export const createSemesterRegistrationSchema = z.object({
  academicSemester: z
    .string({
      required_error: "Select an Academic Semester",
    })
    .min(1, { message: "Select an Academic Semester" }),
  status: z
    .string({
      required_error: "Select a Status",
    })
    .min(1, { message: "Select a Status" }),
  startDate: z
    .string({
      required_error: "Select Start Date",
    })
    .min(1, "Select Start Date"),
  endDate: z
    .string({
      required_error: "Select End Date",
    })
    .min(1, "Select End Date"),
  minCredit: z
    .string({
      required_error: "Min Credit is required",
    })
    .min(1, { message: "Min Credit is required" })
    .trim()
    .refine((value) => NonWhiteSpaceRegex.test(value), {
      message: "Min Credit Could not contain White space",
    })
    .refine((value) => /^\d+$/.test(value), {
      message: "Min Credit must only contain Numbers",
    }),

  maxCredit: z
    .string({
      required_error: "Max Credit is required",
    })
    .min(1, { message: "Max Credit is required" })
    .trim()
    .refine((value) => NonWhiteSpaceRegex.test(value), {
      message: "Max Credit Could not contain White space",
    })
    .refine((value) => /^\d+$/.test(value), {
      message: "Max Credit must only contain Numbers",
    }),
});
