import { useGetFacultyEnrolledCoursesQuery } from "../../redux/features/faculty/facultyCourseManagementApi";


const MyCoursesPage = () => {
    const { data } = useGetFacultyEnrolledCoursesQuery(undefined);
    console.log(data);
    return (
        <>
           <h1>This is My Courses Page</h1> 
        </>
    );
};

export default MyCoursesPage;