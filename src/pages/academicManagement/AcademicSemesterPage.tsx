import { Table, TableColumnsType, TableProps } from "antd";
import { useGetAllSemestersQuery } from "../../redux/features/academicSemester/academicSemesterApi";
import { useState } from "react";


interface DataType {
    name: string;
    year: string;
    startMonth: string;
    endMonth: string;
}


const AcademicSemesterPage = () => {
    const [params, setParams] = useState([]);
    const { data: semesterData } = useGetAllSemestersQuery(params);

    const tableData = semesterData?.data?.map(({ _id, name, year, startMonth, endMonth})=> ({
        id: _id,
        key:_id,
        name,
        year,
        startMonth,
        endMonth
    }));


      
      const columns: TableColumnsType<DataType> = [
        {
          title: 'Name',
          key: "name",
          dataIndex: 'name',
          showSorterTooltip: { target: 'full-header' },
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
          dataIndex: 'year',
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
        },
        {
          title: 'Start Month',
          key: "startMonth",
          dataIndex: 'startMonth'
        },
        {
            title: 'End Month',
            key: "endMonth",
            dataIndex: 'endMonth'
          },
      ];

 
      const onChange : TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
        //console.log('params', pagination, filters, sorter, extra);
        //console.log({filters, extra});
        if(extra.action === 'filter'){
          const queryParams : any[] = [];
          filters.name?.forEach((item)=> {
            queryParams.push({ name: 'name', value: item })
          });

          filters.year?.forEach((item)=> {
            queryParams.push({ name: 'year', value: item })
          });

          setParams(queryParams);
        }
      };


    return (
      <>
        <Table columns={columns} dataSource={tableData} onChange={onChange} />
      </>
    );
};

export default AcademicSemesterPage;