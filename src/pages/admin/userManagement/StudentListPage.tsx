import { Button, Table, TableColumnsType, TableProps } from "antd";
import { useState } from "react";
import { TQueryParam } from "../../../types";
import { useGetAllStudentsQuery } from "../../../redux/features/admin/student/studentApi";

interface DataType {
  name: string;
  year: string;
  startMonth: string;
  endMonth: string;
}

type TDepartmentData = {
  _id: string;
  name: string;
  academicFaculty: Record<string, unknown>;
};

const StudentListPage = () => {
  const [params, setParams] = useState<TQueryParam[]>([]);
  
  const {
    data: studentData,
    isLoading,
    isFetching,
  } = useGetAllStudentsQuery(undefined);

  const tableData = studentData?.data?.map(
    ({ _id, fullName, academicFaculty }: TDepartmentData) => ({
      id: _id,
      key: _id,
      name:fullName,
      academicFacultyName: academicFaculty?.name,
    })
  );



  const columns: TableColumnsType<DataType> = [
    {
      title: "Name",
      key: "name",
      dataIndex: "name",
    },
    {
      title: "Academic Faculty",
      key: "academicFaculty",
      dataIndex: "academicFacultyName",
    },
    {
      title: "Action",
      key: "action",
      dataIndex: "action",
      render: () => (
        <>
          <div>
            <Button>Update</Button>
          </div>
        </>
      ),
    },
  ];

  const onChange: TableProps<DataType>["onChange"] = (
    _pagination,
    filters,
    _sorter,
    extra
  ) => {
    //console.log('params', pagination, filters, sorter, extra);
    // console.log({filters, extra});
    if (extra.action === "filter") {
      const queryParams: TQueryParam[] = [];
      filters.academicFaculty?.forEach((item) => {
        queryParams.push({ name: "academicFaculty", value: item });
      });

      setParams(queryParams);
    }
  };


  return (
    <>
      <Table
        loading={isFetching}
        columns={columns}
        dataSource={tableData}
        onChange={onChange}
      />
    </>
  );
};

export default StudentListPage;
