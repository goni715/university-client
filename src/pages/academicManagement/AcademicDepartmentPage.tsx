import { Button, Table, TableColumnsType, TableProps } from "antd";
import { useState } from "react";
import { TQueryParam } from "../../types";
import { useGetAllDepartmentsQuery } from "../../redux/features/academicDepartment/academicDepartmentApi";
import { useGetAllAcademicFacultiesQuery } from "../../redux/features/academicFaculty/academicFacultyApi";


interface DataType {
    name: string;
    year: string;
    startMonth: string;
    endMonth: string;
}

type TDepartmentData = {
  _id: string;
  name: string;
  academicFaculty: Record<string, unknown>
}



const AcademicDepartmentPage = () => {
    const [params, setParams] = useState<TQueryParam[]>([]);
    const { data: departmentData, isLoading, isFetching } = useGetAllDepartmentsQuery(params);
    const { data:facultyData } = useGetAllAcademicFacultiesQuery(undefined);



    const tableData = departmentData?.data?.map(({ _id, name, academicFaculty} : TDepartmentData)=> ({
        id: _id,
        key:_id,
        name,
        academicFacultyName: academicFaculty?.name,
    }));



    const filtersArray = facultyData?.data?.map(({_id, name})=> ({
       text: name,
       value:_id
    }));



      
      const columns: TableColumnsType<DataType> = [
        {
          title: 'Name',
          key: "name",
          dataIndex: 'name'
        },
        {
          title: 'Academic Faculty',
          key: "academicFaculty",
          dataIndex: 'academicFacultyName',
          filters: filtersArray
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

 
      const onChange : TableProps<DataType>['onChange'] = (_pagination, filters, _sorter, extra) => {
        //console.log('params', pagination, filters, sorter, extra);
       // console.log({filters, extra});
        if(extra.action === 'filter'){
          const queryParams : TQueryParam[] = [];
          filters.academicFaculty?.forEach((item)=> {
            queryParams.push({ name: 'academicFaculty', value: item })
          });

          setParams(queryParams);
        }
      };


      // if(isLoading){
      //   return <p>Loading...</p>
      // }


    return (
      <>
        <Table loading={isFetching} columns={columns} dataSource={tableData} onChange={onChange} />
      </>
    );
};

export default AcademicDepartmentPage;