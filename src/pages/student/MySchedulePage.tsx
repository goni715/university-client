import { useGetMyEnrolledCoursesQuery } from "../../redux/features/student/studentCourseManagementApi";


const MySchedulePage = () => {
    const { data: enrolledCourseData } = useGetMyEnrolledCoursesQuery(undefined);



    return (
      <>
        <div>
          {enrolledCourseData?.data?.map((item:any, i:number) => (
            <>
              <div key={i} style={{marginBottom: "20px"}}>
                <div>Title: {item?.course?.title}</div>
                <div>Section: {item?.offeredCourse?.section}</div>
                <div>
                    Days: 
                  {item?.offeredCourse?.days?.map((day: string, inx: number) => (
                    <span key={inx}>{day + " "}</span>
                  ))}
                </div>
                <div>Start Time: {item?.offeredCourse?.startTime}</div>
                <div>EndTime: {item?.offeredCourse?.endTime}</div>
              </div>
            </>
          ))}
        </div>
      </>
    );
};

export default MySchedulePage;