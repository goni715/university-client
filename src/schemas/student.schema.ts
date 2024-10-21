import { z } from "zod";
const MobileRegx = /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/;

// Custom validation function for capitalized format
const capitalizeValidator = (value: string) => {
  const formattedValue = value
    .split(" ") // Split the string into an array of words
    .map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() // Capitalize first letter and make the rest lowercase
    )
    .join(" ");
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
      message: "First Name must only contain alphabets", //There is no space between two words
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
  fatherName: z
    .string({
      required_error: "Father Name is required",
    })
    .min(1, { message: "Father Name is required" })
    .trim()
    .refine(capitalizeValidator, {
      message: "Father Name must be in capitalize format",
    })
    .refine((value) => /^[A-Za-z\s]+$/.test(value), {
      message: "Father Name must only contain alphabets", //"Name must only contain letters and spaces"
    })
    .refine((value) => value.length <= 40, {
      message: "Fisrt Name maximum 40 characters.",
    }),
  fatherOccupation: z
    .string({
      required_error: "Father Occupation is required",
    })
    .min(1, { message: "Father Occupation is required" })
    .trim()
    .refine((value) => value.length <= 40, {
      message: "Fisrt Occupation maximum 40 characters.",
    }),
  fatherContactNo: z
    .string({
      required_error: "Father Contact No is required",
    })
    .min(1, { message: "Father Contact No is required" })
    .trim()
    .refine((value) => MobileRegx.test(value), {
      message: "Invalid Mobile Number",
    }),
  motherName: z
    .string({
      required_error: "Mother Name is required",
    })
    .min(1, { message: "Mother Name is required" })
    .trim()
    .refine(capitalizeValidator, {
      message: "Mother Name must be in capitalize format",
    })
    .refine((value) => /^[A-Za-z\s]+$/.test(value), {
      message: "Father Name must only contain alphabets", //"Name must only contain letters and spaces"
    })
    .refine((value) => value.length <= 40, {
      message: "Mother Name maximum 40 characters.",
    }),
  motherOccupation: z
    .string({
      required_error: "Mother Occupation is required",
    })
    .min(1, { message: "Mother Occupation is required" })
    .trim()
    .refine((value) => value.length <= 40, {
      message: "Mother Occupation maximum 40 characters.",
    }),
  motherContactNo: z
    .string({
      required_error: "Mother Contact No is required",
    })
    .min(1, { message: "Mother Contact No is required" })
    .trim()
    .refine((value) => MobileRegx.test(value), {
      message: "Invalid Mobile Number",
    }),
});

const createLocalGuardianValidationSchema = z.object({
  name: z.string().trim(),
  occupation: z
    .string({
      required_error: "Occupation is required",
    })
    .min(1, { message: " Occupation is required" })
    .trim()
    .refine((value) => value.length <= 40, {
      message: "Mother Occupation maximum 40 characters.",
    }),
  contactNo: z
    .string({
      required_error: "Contact No is required",
    })
    .min(1, { message: "Contact No is required" })
    .trim()
    .refine((value) => MobileRegx.test(value), {
      message: "Invalid Mobile Number",
    }),
  address: z
    .string({
      required_error: "Address is required",
    })
    .min(1, { message: "Address is required" })
    .trim()
    .refine((value) => value.length <= 60, {
      message: "Address maximum 60 characters.",
    }),
});

// Zod schema for TStudent
export const createStudentSchema = z.object({
    name: createUserNameValidationSchema,
    email: z
      .string({
        required_error: "Email is required"
      })
      .trim()
      .email({ message: "Invalid email address" }),
    gender: z.string({
      required_error: "Please Select a Gender"
    }).min(1, "Please Select a Gender"),
    dateOfBirth: z.string({
      required_error: "Birthday is required"
    }).min(1, "Birthday is required"),
    contactNo: z
    .string({
      required_error: "Contact No is required",
    })
    .min(1, { message: "Contact No is required" })
    .trim()
    .refine((value) => MobileRegx.test(value), {
      message: "Invalid Mobile Number",
    }),
    emergencyContactNo: z
    .string({
      required_error: "Emergency Contact No is required",
    })
    .min(1, { message: "Emergency Contact No is required" })
    .trim()
    .refine((value) => MobileRegx.test(value), {
      message: "Invalid Mobile Number",
    }), 
    bloodGroup:  z.string({
      required_error: "Please Select a Blood Group"
    }).min(1, "Please Select a Blood Group"),
    presentAddress: z
    .string({
      required_error: "Present Address is required",
    })
    .min(1, { message: "Present Address is required" })
    .trim()
    .refine((value) => value.length <= 60, {
      message: "Address maximum 60 characters.",
    }),
    permanentAddress: z
    .string({
      required_error: "Permanent Address is required",
    })
    .min(1, { message: "Permanent Address is required" })
    .trim()
    .refine((value) => value.length <= 60, {
      message: "Address maximum 60 characters.",
    }), 
    guardian: createGuardianValidationSchema,
    localGuardian: createLocalGuardianValidationSchema,
    admissionSemester: z.string({
      required_error: "Select a Admission Semester"
    }).min(1, "Select a Admission Semester"),
    academicDepartment:z.string({
      required_error: "Select a Academic Department"
    }).min(1, "Select a Academic Department"),
    image: z.any()
});
