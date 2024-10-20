import { z } from "zod";

export const AcademicSemesterSchema = z.object({
  name: z.string({
    required_error: "Please select a Name",
  }),
  year: z.string({
    required_error: "Please select a Year",
  }),
  startMonth: z.string({
    required_error: "Please select a Start Month",
  }),
  endMonth: z.string({
    required_error: "Please select a End Month",
  }),
});

export const AcademicFacultySchema = z.object({
  name: z
    .string({
      required_error: "Name is required !",
    })
    .min(1, { message: "Name is required !" }),
});



export const AcademicDepartmentSchema = z.object({
  name: z
    .string({
      required_error: "Name is required !",
    })
    .min(1, { message: "Name is required !" }),
  academicFaculty: z
    .string({
      required_error: "Academic Faculty is required !",
    })
    .min(1, { message:"Academic Faculty is required !" }),
});
