import { useGetStudentAllOfferedCoursesQuery } from "../../redux/features/student/studentCourseManagementApi";


const StudentOfferedCoursesPage = () => {
    const { data:offeredCoursesData } = useGetStudentAllOfferedCoursesQuery(undefined);

    const result = offeredCoursesData?.data?.map((item)=> ({
        title: item
    }))
    return (
        <>
            This is All Offered Courses Page
        </>
    );
};

export default StudentOfferedCoursesPage;