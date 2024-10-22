import { Button, Table, TableColumnsType, TableProps } from "antd";
import { useState } from "react";
import { TQueryParam } from "../../../types";
import { useGetAllSemesterRegistrationsQuery } from "../../../redux/features/admin/courseManagement/semesterRegistration/semesterRegistrationApi";


interface TTableDataType {
    name: string;
    status: string;
    startDate: string;
    endDate: string;
}


interface TSemesterData {
    academicSemester: Record<string, unknown>;
    status: string;
    startMonth: string;
    endMonth: string;
    startDate: string;
    endDate: string;
}


const SemesterRegistrationPage = () => {
    const [params, setParams] = useState<TQueryParam[]>([]);
    const { data: semesterData, isLoading, isFetching } = useGetAllSemesterRegistrationsQuery(params);

    console.log(semesterData);

    const tableData = semesterData?.data?.map(({ _id, academicSemester, status, startDate, endDate} : TSemesterData)=> ({
        id: _id,
        key:_id,
        name: `${academicSemester?.name} ${academicSemester?.year}`,
        status,
        startDate,
        endDate
    }));


      
      const columns: TableColumnsType<TTableDataType> = [
        {
          title: 'Name',
          key: "name",
          dataIndex: 'name'
        },
        {
          title: 'Status',
          key: "status",
          dataIndex: 'status'
        },
        {
          title: 'Start Date',
          key: "startDate",
          dataIndex: 'startDate'
        },
        {
            title: 'End Date',
            key: "endDate",
            dataIndex: 'endDate'
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

export default SemesterRegistrationPage;