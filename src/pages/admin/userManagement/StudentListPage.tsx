import { Button, Pagination, Space, Table, TableColumnsType, TableProps } from "antd";
import { useState } from "react";
import { TQueryParam } from "../../../types";
import { useGetAllStudentsQuery } from "../../../redux/features/admin/student/studentApi";
import { useNavigate } from "react-router-dom";
import BlockModal from "../../../components/modal/BlockModal";
import { useAppDispatch } from "../../../redux/hook/hook";
import { SetBlockModalOpen } from "../../../redux/features/modal/modalSlice";


type TStudentData = {
  _id: string;
  id: string;
  fullName: string;
  email:string;
  contactNo: string
};

const StudentListPage = () => {
  const [params, setParams] = useState<TQueryParam[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const {
    data: studentData,
    isFetching,
    isLoading
  } = useGetAllStudentsQuery([
    { name: "limit", value:3} ,
    { name: "page", value: currentPage },
    { name: "sort", value: "id" },
    ...params
  ]);

  const total = studentData?.meta?.total;
  const pageLimit = studentData?.meta?.limit;



  const tableData = studentData?.data?.map(
    ({ _id, id, fullName, email, contactNo }: TStudentData) => ({
      _id: _id,
      key: _id,
      name:fullName,
      id,
      email,
      contactNo
    })
  );



  const columns: TableColumnsType<TStudentData> = [
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
      title: "Contact No",
      key: "contact",
      dataIndex: "contactNo",
    },
    {
      title: "Action",
      key: "action",
      dataIndex: "action",
      render: (_param, {_id}) =>{
        return (
          <>
          <Space>
            <Button>Details</Button>
            <Button onClick={()=>navigate(`/admin/update-student/${_id}`)}>Update</Button>
            <Button onClick={()=> dispatch(SetBlockModalOpen(true))}>Block</Button>
          </Space>
        </>
      )},
      width: '1%'
    },
  ];

  const onChange: TableProps<TStudentData>["onChange"] = (
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
      {
        isLoading ? (
          <> ...</>
        ): (
          <>
            <Pagination align="end" onChange={handlePagination} current={currentPage} defaultPageSize={pageLimit} total={total} />
          </>
        )
      }

      <BlockModal/>
    </>
  );
};

export default StudentListPage;
