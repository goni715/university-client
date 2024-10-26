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
  courseMarks: Record<string, unknown>
}


const MyStudentsPage = () => {
  const { semesterRegistrationId, courseId } = useParams();
  const { data: facultyCoursesData, isFetching } = useGetFacultyEnrolledCoursesQuery([
    { name: 'semesterRegistration', value: semesterRegistrationId },
    { name: 'course', value: courseId }
  ]);

  const tableData = facultyCoursesData?.data?.map(({ _id, student, academicSemester, semesterRegistration, offeredCourse, courseMarks} : any)=> ({
    key:_id,
    name: student?.fullName,
    id: student?.id,
    studentId: student?._id,
    semester: academicSemester?.name+" "+ academicSemester?.year,
    semesterRegistration: semesterRegistration?._id,
    offeredCourse: offeredCourse?._id,
    courseMarks
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
        render: (_param, record) => (
          <>
          <UpdateMarksModal record={record} />
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