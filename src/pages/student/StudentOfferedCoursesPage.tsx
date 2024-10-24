import { Col, Row } from "antd";
import { useGetStudentAllOfferedCoursesQuery } from "../../redux/features/student/studentCourseManagementApi";
import convertOfferedCourse from "../../utils/convertOfferedCourse";
import OfferedCourseSection from "../../components/offeredCourse/OfferedCourseSection";


const StudentOfferedCoursesPage = () => {
    const { data:offeredCoursesData, isLoading } = useGetStudentAllOfferedCoursesQuery(undefined);
    const modifiedOfferedCourses = convertOfferedCourse(offeredCoursesData?.data);


   if(isLoading){
    return <h1>Loading...</h1>
   }

    return (
        <>
            <Row gutter={[0, 20]}>
                {modifiedOfferedCourses?.map((item, i)=>(
                    <>
                      <Col span={24} key={i} style={{ border: 'solid #d4d4d4 2px' }}>
                        <div style={{ padding: '10px' }}>
                        <h2>{item?.title}</h2>
                        </div>
                        <div>
                            {(item?.sections)?.map((section,idx)=>(
                                <>
                                 <OfferedCourseSection key={idx} section={section}/>
                                </>
                            ))}
                        </div>
                      </Col>
                    </>
                ))}
            </Row>
        </>
    );
};

export default StudentOfferedCoursesPage;