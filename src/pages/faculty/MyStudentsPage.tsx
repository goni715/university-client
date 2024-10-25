import { useParams } from "react-router-dom";
import { useGetFacultyEnrolledCoursesQuery } from "../../redux/features/faculty/facultyCourseManagementApi";
import { Table, TableColumnsType } from "antd";
import UpdateMarksModal from "../../components/modal/UpdateMarksModal";

type TTableDataType = {
  name: string;
  key: string;
  id: string;
  studentId: string;
  semesterRegistration:string;
  offeredCourse: string;
}


const MyStudentsPage = () => {
  const { semesterRegistrationId, courseId } = useParams();
  const { data: facultyCoursesData, isFetching } = useGetFacultyEnrolledCoursesQuery([
    { name: 'semesterRegistration', value: semesterRegistrationId },
    { name: 'course', value: courseId }
  ]);

  const tableData = facultyCoursesData?.data?.map(({ _id, student, academicSemester, semesterRegistration, offeredCourse} : any)=> ({
    key:_id,
    name: student?.fullName,
    id: student?.id,
    studentId: student?._id,
    semester: academicSemester?.name+" "+ academicSemester?.year,
    semesterRegistration: semesterRegistration?._id,
    offeredCourse: offeredCourse?._id,
}));



  
  const columns: TableColumnsType<TTableDataType> = [
    {
      title: 'Student Name',
      key: "name",
      dataIndex: 'name',
    },
    {
      title: 'Student ID',
      key: "id",
      dataIndex: 'id'
    },
    {
      title: 'Semester',
      key: "semester",
      dataIndex: 'semester'
    },
    {
        title: 'Action',
        key: "action",
        dataIndex: 'action',
        render: (_param,{semesterRegistration, offeredCourse, studentId}) => (
          <>
          <UpdateMarksModal semesterRegistration={semesterRegistration} offeredCourse={offeredCourse} studentId={studentId} />
          </>
        )
    },
  ];


    return (
        <>
          <Table loading={isFetching} columns={columns} dataSource={tableData} />
        </>
    );
};

export default MyStudentsPage;