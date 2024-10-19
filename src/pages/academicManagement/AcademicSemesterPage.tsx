import { Table, TableColumnsType } from "antd";
import { useGetAllSemestersQuery } from "../../redux/features/academicSemester/academicSemesterApi";


interface DataType {
    key: React.Key;
    name: string;
    age: number;
    address: string;
}


const AcademicSemesterPage = () => {
    const { data: semesterData } = useGetAllSemestersQuery(undefined);

    const tableData = semesterData?.data?.map(({ _id, name, code, year, startMonth, endMonth})=> ({
        id: _id,
        name,
        code,
        year,
        startMonth,
        endMonth
    }));


      
      const columns: TableColumnsType<DataType> = [
        {
          title: 'Name',
          dataIndex: 'name',
          showSorterTooltip: { target: 'full-header' },
          filters: [
            {
              text: 'Joe',
              value: 'Joe',
            },
            {
              text: 'Jim',
              value: 'Jim',
            },
            {
              text: 'Submenu',
              value: 'Submenu',
              children: [
                {
                  text: 'Green',
                  value: 'Green',
                },
                {
                  text: 'Black',
                  value: 'Black',
                },
              ],
            },
          ],
          // specify the condition of filtering result
          // here is that finding the name started with `value`
          onFilter: (value, record) => record.name.indexOf(value as string) === 0,
          sorter: (a, b) => a.name.length - b.name.length,
          sortDirections: ['descend'],
        },
        {
          title: 'Year',
          dataIndex: 'year',
        },
        {
          title: 'Start Month',
          dataIndex: 'startMonth'
        },
        {
            title: 'End Month',
            dataIndex: 'endMonth'
          },
      ];

 


    return (
      <>
        <Table columns={columns} dataSource={tableData} />
      </>
    );
};

export default AcademicSemesterPage;