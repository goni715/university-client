import { useGetStudentAllOfferedCoursesQuery } from "../../redux/features/student/studentCourseManagementApi";
import convertOfferedCourse from "../../utils/convertOfferedCourse";


const StudentOfferedCoursesPage = () => {
    const { data:offeredCoursesData } = useGetStudentAllOfferedCoursesQuery(undefined);

    const offeredCourses = convertOfferedCourse(offeredCoursesData?.data);
    console.log(offeredCourses);
      




    return (
        <>
            This is All Offered Courses Page
        </>
    );
};

export default StudentOfferedCoursesPage;