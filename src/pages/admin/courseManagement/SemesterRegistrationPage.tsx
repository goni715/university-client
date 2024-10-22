import { Button, Dropdown, Table, TableColumnsType, TableProps, Tag } from "antd";
import { useState } from "react";
import { TQueryParam } from "../../../types";
import { useGetAllSemesterRegistrationsQuery } from "../../../redux/features/admin/courseManagement/semesterRegistration/semesterRegistrationApi";
import moment from "moment";
import { SuccessToast } from "../../../helper/ValidationHelper";


interface TTableDataType {
    name: string;
    status: string;
    startDate: string;
    endDate: string;
}


interface TSemesterData {
    _id: string;
    academicSemester: Record<string, unknown>;
    status: string;
    startMonth: string;
    endMonth: string;
    startDate: string;
    endDate: string;
}


const SemesterRegistrationPage = () => {
    const { data: semesterData, isLoading, isFetching } = useGetAllSemesterRegistrationsQuery(undefined);


    const tableData = semesterData?.data?.map(({ _id, academicSemester, status, startDate, endDate} : TSemesterData)=> ({
        id: _id,
        key:_id,
        name: `${academicSemester?.name} ${academicSemester?.year}`,
        status,
        startDate: moment(startDate).format('MMMM Do YYYY'),
        endDate: moment(endDate).format('MMMM Do YYYY')
    }));



//status dropdown items
    const items = [
      {
        key: 'UPCOMING',
        label: 'Upcoming',
      },
      {
        key: 'ONGOING',
        label: 'Ongoing',
      },
      {
        key: 'ENDED',
        label: 'Ended',
      },
    ];

// update status
const handleClick = ({ key }:{key:string}) => {
  SuccessToast(`Click on item ${key}`);
};



      
      const columns: TableColumnsType<TTableDataType> = [
        {
          title: "Name",
          key: "name",
          dataIndex: "name",
        },
        {
          title: "Status",
          key: "status",
          dataIndex: "status",
          render: (_param, { status }) => {
            return (
              <Tag
                color={`${
                  (status === "UPCOMING" && "blue") ||
                  (status === "ONGOING" && "green") ||
                  (status === "ENDED" && "red")
                }`}
              >
                {status}
              </Tag>
            );
          },
        },
        {
          title: "Start Date",
          key: "startDate",
          dataIndex: "startDate",
        },
        {
          title: "End Date",
          key: "endDate",
          dataIndex: "endDate",
        },
        {
          title: "Action",
          key: "action",
          dataIndex: "action",
          render: (_param, {status}) => (
            <>
              <Dropdown
                menu={{
                  items,
                  selectable: true,
                  defaultSelectedKeys: [status],
                  onClick:handleClick
                }}
              >
                <Button>Change Status</Button>
              </Dropdown>
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

export default SemesterRegistrationPage;