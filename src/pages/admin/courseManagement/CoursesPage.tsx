import { Table, TableColumnsType } from "antd";
import { useGetAllCoursesQuery } from "../../../redux/features/admin/courseManagement/course/courseApi";
import AssignFacultyModel from "../../../components/modal/AssignFacultyModel";

interface TTableData {
  _id: string;
  title: string;
  code: number;
}

type TCourseData = {
  _id: string;
  title: string;
  code: number;
};

const CoursesPage = () => {
    const { data: coursesData, isFetching } = useGetAllCoursesQuery([
        {name: "sort", value: 'code'}
    ]);

  const tableData = coursesData?.data?.map(({ _id, title, code }: TCourseData) => ({
    _id: _id,
    key: _id,
    title,
    code
  }));

  const columns: TableColumnsType<TTableData> = [
    {
      title: "Title",
      key: "title",
      dataIndex: "title",
    },
    {
        title: "Code",
        key: "code",
        dataIndex: "code",
      },
    {
      title: "Action",
      key: "action",
      dataIndex: "action",
      render: (_param, {_id}) => (
        <>
            <AssignFacultyModel courseId={_id}/>
        </>
      ),
    },
  ];

  return (
    <>
      <Table loading={isFetching} columns={columns} dataSource={tableData} />
    </>
  );
};

export default CoursesPage;
