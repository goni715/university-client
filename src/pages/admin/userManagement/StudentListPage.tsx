import { useGetAllStudentsQuery } from "../../../redux/features/admin/student/studentApi";


const StudentListPage = () => {
    const { data } = useGetAllStudentsQuery(undefined);
    console.log(data);
    return (
        <>
            This is Student List Page
        </>
    );
};

export default StudentListPage;