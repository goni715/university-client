import { Button, Pagination, Space, Table, TableColumnsType, TableProps } from "antd";
import { useState } from "react";
import { TQueryParam } from "../../../types";
import { useGetAllStudentsQuery } from "../../../redux/features/admin/student/studentApi";

interface DataType {
  name: string;
  year: string;
  startMonth: string;
  endMonth: string;
}

type TStudentData = {
  _id: string;
  id: string;
  fullName: string;
  email:string;
};

const StudentListPage = () => {
  const [params, setParams] = useState<TQueryParam[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const {
    data: studentData,
    isFetching,
  } = useGetAllStudentsQuery([
    { name: "limit", value:3} ,
    { name: "page", value: currentPage },
    { name: "sort", value: "id" },
    ...params
  ]);

  const total = studentData?.meta?.total;
  //const pageLimit = studentData?.meta?.limit;



  const tableData = studentData?.data?.map(
    ({ _id, id, fullName, email }: TStudentData) => ({
      _id: _id,
      key: _id,
      name:fullName,
      id,
      email
    })
  );



  const columns: TableColumnsType<DataType> = [
    {
      title: "Name",
      key: "name",
      dataIndex: "name",
    },
    {
      title: "ID",
      key: "id",
      dataIndex: "id",
    },
    {
      title: "Email",
      key: "email",
      dataIndex: "email",
    },
    {
      title: "Action",
      key: "action",
      dataIndex: "action",
      render: () => (
        <>
          <Space>
            <Button>Details</Button>
            <Button>Update</Button>
            <Button>Block</Button>
          </Space>
        </>
      ),
      width: '1%'
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


  //handlePagination
  const handlePagination = (page:number) => {
    setCurrentPage(page)
  };

  return (
    <>
      <Table
        loading={isFetching}
        columns={columns}
        dataSource={tableData}
        pagination={false}
        onChange={onChange}
      />
      <br />
     <Pagination align="end" onChange={handlePagination} current={currentPage} defaultCurrent={1} defaultPageSize={3} total={total} />
    </>
  );
};

export default StudentListPage;
