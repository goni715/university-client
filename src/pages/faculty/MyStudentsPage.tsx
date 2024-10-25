import { useParams } from "react-router-dom";
import { useGetFacultyEnrolledCoursesQuery } from "../../redux/features/faculty/facultyCourseManagementApi";
import { Button, Table, TableColumnsType } from "antd";

type TTableDataType = {
  name: string;
  key: string;
  id: string
}


const MyStudentsPage = () => {
  const { semesterRegistrationId, courseId } = useParams();
  const { data: facultyCoursesData, isFetching } = useGetFacultyEnrolledCoursesQuery([
    { name: 'semesterRegistration', value: semesterRegistrationId },
    { name: 'course', value: courseId }
  ]);

  const tableData = facultyCoursesData?.data?.map(({ _id, student} : any)=> ({
    key:_id,
    _id,
    name: student?.fullName,
    id: student?.id
}));

console.log(tableData);


  
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
        title: 'End Month',
        key: "endMonth",
        dataIndex: 'endMonth'
    },
    {
        title: 'Action',
        key: "action",
        dataIndex: 'action',
        render: () => (
          <>
          <div>
            <Button>Update</Button>
          </div>
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