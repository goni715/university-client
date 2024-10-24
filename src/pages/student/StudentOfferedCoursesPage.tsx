import { Button } from "antd";
import { useGetStudentAllOfferedCoursesQuery } from "../../redux/features/student/studentCourseManagementApi";
import convertOfferedCourse from "../../utils/convertOfferedCourse";


const StudentOfferedCoursesPage = () => {
    const { data:offeredCoursesData } = useGetStudentAllOfferedCoursesQuery(undefined);

    const modifiedOfferedCourses = convertOfferedCourse(offeredCoursesData?.data);
    
      




    return (
        <>
            <div>
                {modifiedOfferedCourses?.map((item, i)=>(
                    <>
                      <div key={i}>
                        <h2>{item?.title}</h2>
                        <div>
                            {item?.sections?.map((section, ind)=>(
                                <>
                                  <div key={ind}>
                                    <p>Section: {section?.section}</p>
                                    <div>
                                        days: {section?.days?.map((day, inx)=>(
                                            <span key={inx}>{day+" "}</span>
                                        ))}
                                    </div>
                                    <p>Start Time: {section?.startTime}</p>
                                    <p>End Time: {section?.endTime}</p>
                                    <Button>Enroll</Button>
                                  </div>
                                </>
                            ))}
                        </div>
                      </div>
                    </>
                ))}
            </div>
        </>
    );
};

export default StudentOfferedCoursesPage;