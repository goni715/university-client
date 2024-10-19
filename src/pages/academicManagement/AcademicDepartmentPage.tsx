import { Button, Table, TableColumnsType, TableProps } from "antd";
import { useGetAllSemestersQuery } from "../../redux/features/academicSemester/academicSemesterApi";
import { useState } from "react";
import { TQueryParam } from "../../types";
import { useGetAllDepartmentsQuery } from "../../redux/features/academicDepartment/academicDepartmentApi";


interface DataType {
    name: string;
    year: string;
    startMonth: string;
    endMonth: string;
}


const AcademicDepartmentPage = () => {
    const [params, setParams] = useState<TQueryParam[]>([]);
    const { data: departmentData, isLoading, isFetching } = useGetAllDepartmentsQuery(params);

    const tableData = departmentData?.data?.map(({ _id, name, academicFaculty, year, startMonth, endMonth})=> ({
        id: _id,
        key:_id,
        name,
        academicFacultyName: academicFaculty?.name,
        year,
        startMonth,
        endMonth
    }));


      
      const columns: TableColumnsType<DataType> = [
        {
          title: 'Name',
          key: "name",
          dataIndex: 'name',
          filters: [
            {
              text: 'Autumn',
              value: 'Autumn',
            },
            {
              text: 'Summer',
              value: 'Summer',
            },
            {
              text: 'Fall',
              value: 'Fall',
            }
          ]
        },
        {
          title: 'Year',
          key: "year",
          dataIndex: 'academicFacultyName',
          filters: [
            {
              text: '2024',
              value: '2024',
            },
            {
              text: '2025',
              value: '2025',
            },
            {
              text: '2027',
              value: '2027',
            }
          ]
        }
      ];

 
      const onChange : TableProps<DataType>['onChange'] = (_pagination, filters, _sorter, extra) => {
        //console.log('params', pagination, filters, sorter, extra);
        //console.log({filters, extra});
        if(extra.action === 'filter'){
          const queryParams : TQueryParam[] = [];
          filters.name?.forEach((item)=> {
            queryParams.push({ name: 'name', value: item })
          });

          filters.year?.forEach((item)=> {
            queryParams.push({ name: 'year', value: item })
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