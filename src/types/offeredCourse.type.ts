export interface TOfferedCourseItem {
    _id: string
    semesterRegistration: string
    academicSemester: string
    academicFaculty: string
    academicDepartment: string
    course: Course
    faculty: string
    maxCapacity: number
    section: number
    days: string[]
    startTime: string
    endTime: string
    createdAt: string
    updatedAt: string
    __v: number
    enrolledCourses: any[]
    completedCourses: CompletedCourse[]
    completedCourseIds: string[]
    isAlreadyEnrolled: boolean
    isPreRequisiteFulfilled: boolean
  }
  
  export interface Course {
    _id: string
    title: string
    prefix: string
    code: number
    credits: number
    preRequisiteCourses: PreRequisiteCourse[]
    isDeleted: boolean
    createdAt: string
    updatedAt: string
  }
  
  export interface PreRequisiteCourse {
    course: string
    isDeleted: boolean
  }
  
  export interface CompletedCourse {
    _id: string
    semesterRegistration: string
    academicSemester: string
    academicFaculty: string
    academicDepartment: string
    offeredCourse: string
    course: string
    student: string
    faculty: string
    isEnrolled: boolean
    courseMarks: CourseMarks
    grade: string
    gradePoints: GradePoints
    isCompleted: boolean
    __v: number
  }
  
  export interface CourseMarks {
    classTest1: number
    midTerm: number
    classTest2: number
    finalTerm: number
  }
  
  export interface GradePoints {
    $numberDecimal: string
  }
  