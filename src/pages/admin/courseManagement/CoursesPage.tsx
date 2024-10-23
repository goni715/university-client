import { Button, Table, TableColumnsType } from "antd";
import { useGetAllCoursesQuery } from "../../../redux/features/admin/courseManagement/course/courseApi";

interface TTableData {
  title: string;
  code: number;
}

type TCourseData = {
  _id: string;
  title: string;
  code: number;
};

const CoursesPage = () => {
    const { data: coursesData, isLoading, isFetching } = useGetAllCoursesQuery([
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
      render: () => (
        <>
            <Button>Assign Faculty</Button>
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
