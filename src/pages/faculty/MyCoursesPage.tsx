import { useGetFacultyEnrolledCoursesQuery } from "../../redux/features/faculty/facultyCourseManagementApi";
import facultySemesterOptions from "../../utils/facultySemesterOptions";


const MyCoursesPage = () => {
    const { data } = useGetFacultyEnrolledCoursesQuery(undefined);
    const semesterOptions = facultySemesterOptions(data?.data);
    console.log(semesterOptions);



    return (
        <>
           <h1>This is My Courses Page</h1> 
        </>
    );
};

export default MyCoursesPage;