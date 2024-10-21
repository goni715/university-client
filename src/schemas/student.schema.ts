import { z } from "zod";

// Custom validation function for capitalized format
const capitalizeValidator = (value: string) => {
  const formattedValue =
    value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
  if (value !== formattedValue) {
    //throw new Error(`${value} must be in capitalize format`);
    return false;
  }
  return true;
};


//refine custom validation error is occred when-- refine callback function will return false

// Zod schema for TUserName
const createUserNameValidationSchema = z.object({
  firstName: z
    .string({
        required_error: "First Name is required"
    })
    .min(1, {message: "First Name is required"})
    .trim()
    .refine(capitalizeValidator, {
      message: "First Name must be in capitalize format",
    })
    .refine((value) => /^[A-Za-z]+$/.test(value), {
      message: "First Name must only contain alphabets",
    }).refine(value => value.length <= 10, {
      message: "Fisrt Name maximum 10 characters.",
    }),
  middleName: z
    .string()
    .trim()
    .refine((value)=> value.length !== 0, {
      message: "",
    })
    .refine(capitalizeValidator, {
      message: "Middle Name must be in capitalize format",
    })
    .refine((value) => /^[A-Za-z]+$/.test(value), {
      message: "Middle Name must only contain alphabets",
    })
    .refine(value => value.length <= 10, {
      message: "Fisrt Name maximum 10 characters.",
    })
    .optional(),
  lastName: z
    .string({
      required_error: "Last Name is required"
    })
    .min(1, {message: "Last Name is required"})
    .max(10, "Last Name can't be more than 10 characters")
    .trim()
    .refine(capitalizeValidator, {
      message: "Last Name must be in capitalize format",
    })
    .refine((value) => /^[A-Za-z]+$/.test(value), {
      message: "Last Name must only contain alphabets",
    }),
});

// Zod schema for TGuardian
const createGuardianValidationSchema = z.object({
  fatherName: z.string().trim(),
  fatherOccupation: z.string().trim(),
  fatherContactNo: z.string().trim(),
  motherName: z.string().trim(),
  motherOccupation: z.string().trim(),
  motherContactNo: z.string().trim(),
});

const createLocalGuardianValidationSchema = z.object({
  name: z.string().trim(),
  occupation: z.string().trim(),
  contactNo: z.string().trim(),
  address: z.string().trim(),
});

// Zod schema for TStudent
export const createStudentSchema = z.object({
    name: createUserNameValidationSchema,
    email: z
      .string()
      .trim()
      .email({ message: "Invalid email address" }),
    gender: z.string({
      required_error: "Please Select a Gender"
    }).min(1, '"Please Select a Gender"'),
    dateOfBirth: z.string({
      required_error: "Birthday is required"
    }).min(1, "Birthday is required"),
    contactNo: z.string().trim(), //.nonempty('Contact Number is required'),
    emergencyContactNo: z.string().trim(), //.nonempty('Emergency Contact Number is required'),
    bloodGroup: z.string(),
    presentAddress: z.string().trim(), //.nonempty('Present Address is required'),
    permanentAddress: z.string().trim(), //.nonempty('Permanent Address is required'),
    guardian: createGuardianValidationSchema,
    localGuardian: createLocalGuardianValidationSchema,
    admissionSemester: z.string(),
    academicDepartment: z.string(),
});
