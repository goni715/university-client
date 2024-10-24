import { z } from 'zod';
const NonWhiteSpaceRegex = /^\S*$/;


const startTimeStringSchema = z.string({
    required_error: "Please select Start Time"
})
.min(1, { message: "Please select Start Time"})
.refine(
  (value) => {
    const regex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/; // 00-09 10-19 20-23
    return regex.test(value); //return true or false
  },
  {
    message: 'Invalid time format , expected "HH:MM" in 24 hours format',
  },
);


const endTimeStringSchema = z.string({
    required_error: "Please select End Time"
})
.min(1, { message: "Please select End Time"})
.refine(
  (value) => {
    const regex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/; // 00-09 10-19 20-23
    return regex.test(value); //return true or false
  },
  {
    message: 'Invalid time format , expected "HH:MM" in 24 hours format',
  },
);

export const createOfferedCourseSchema = z
  .object({
    semesterRegistration: z
      .string({
        required_error: "Semester Registration is required",
      })
      .min(1, { message: "Semester Registration is required" }),
    academicFaculty: z
    .string({
      required_error: "Academic Faculty is required",
    })
    .min(1, { message: "Academic Faculty is required" }),
    academicDepartment: z
    .string({
      required_error: "Academic Department is required",
    })
    .min(1, { message: "Academic Department is required" }),
    course: z
    .string({
      required_error: "Course is required",
    })
    .min(1, { message: "Course is required" }),
    faculty: z
    .string({
      required_error: "Faculty required",
    })
    .min(1, { message: "Faculty required" }),
    maxCapacity: z
      .string({
        required_error: "Max Capacity is required",
      })
      .min(1, { message: "Max Capacity is required" })
      .trim()
      .refine((value) => NonWhiteSpaceRegex.test(value), {
        message: "Max Capacity Could not contain White space",
      })
      .refine((value) => /^\d+$/.test(value), {
        message: "Max Capacity must only contain Numbers",
      }),
    section: z
      .string({
        required_error: "Section is required",
      })
      .min(1, { message: "Section is required" })
      .trim()
      .refine((value) => NonWhiteSpaceRegex.test(value), {
        message: "Section could not contain White space",
      })
      .refine((value) => /^\d+$/.test(value), {
        message: "Section must only contain Numbers",
      }),
    days: z.array(
        z.string(),
        {message: 'Select Days'}
    ).nonempty('Select Days'),
    startTime: startTimeStringSchema,
    endTime: endTimeStringSchema,
  })

  .superRefine((values, ctx) => {
    const { startTime, endTime } = values;
    
    // Create Date objects using the provided startTime and endTime
    const start = new Date(`2024-01-01T${startTime}:00`);
    const end = new Date(`2024-01-01T${endTime}:00`);
    
    if (end <= start) {
      // Set the error on the `endTime` field
      ctx.addIssue({
          path: ["endTime"],
          message: "End time must be later than start time!",
          code:  z.ZodIssueCode.custom,
      });
      
      // Alternatively, you could set the error on `startTime`
      ctx.addIssue({
        path: ['startTime'],
        message: "Start time must be before end time!",
        code: z.ZodIssueCode.custom,
      });
    }
  });







//   .refine(
//     (values) => {
//       const { startTime, endTime } = values;
//       //startTime = 10:30  =>  2024-01-01T10:30:00
//       //endTime = 12:30  =>  2024-01-01T12:30:00

//       // Create Date objects using the provided startTime and endTime
//       const start = new Date(`2024-01-01T${startTime}:00`);
//       const end = new Date(`2024-01-01T${endTime}:00`);
//       console.log("Yes");

//       if(end > start){
//         console.log("Right");
//         return true;
//       }
//       else{
//         console.log('Wrong');
//         return false
//       }
//     },
//     {
//       message: "Start time should be before End time !  ",
//     }
//   )