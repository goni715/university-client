import { Button, Table, TableColumnsType } from "antd";
import { useGetAllAcademicFacultiesQuery } from "../../redux/features/academicFaculty/academicFacultyApi";

interface DataType {
  name: string;
}

type TFacultyData = {
  _id: string;
  name: string;
}


const AcademicFacultyPage = () => {
  const {data:facultyData, isLoading, isFetching} = useGetAllAcademicFacultiesQuery(undefined);

  const tableData = facultyData?.data?.map(({_id, name} : TFacultyData)=> ({
    _id: _id,
    key:_id,
    name,
  }))

     
  const columns: TableColumnsType<DataType> = [
    {
      title: 'Name',
      key: "name",
      dataIndex: 'name',
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

export default AcademicFacultyPage;