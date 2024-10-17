import { useGetAllSemestersQuery } from "../../redux/features/academicSemester/academicSemesterApi";


const AcademicSemesterPage = () => {
    const {data} = useGetAllSemestersQuery(undefined);
    console.log(data);
    return (
        <>
            <h1>This is Academic Semester Page</h1>
        </>
    );
};

export default AcademicSemesterPage;