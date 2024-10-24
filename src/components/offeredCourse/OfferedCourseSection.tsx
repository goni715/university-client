import { Button, Col, Row } from "antd";
import { useEnrollCourseMutation } from "../../redux/features/student/studentCourseManagementApi";
import { ErrorToast, LoadingToast, SuccessToast } from "../../helper/ValidationHelper";


const OfferedCourseSection = ( {section} : any) => {
    const [ enrollCourse, {isLoading} ] = useEnrollCourseMutation();

    console.log(section);

    
      
    const handleEnrollCourse = async (id:string) => {
        const toastId = LoadingToast("Processing...")
        try{
            await enrollCourse({
               offeredCourse: id
            }).unwrap();
            SuccessToast("Enrolled Success", toastId);
        }catch(err){
            ErrorToast("Something Went Wrong", toastId)
        }  
    }


    return (
      <>
        <Row
          justify="space-between"
          align="middle"
          style={{ borderTop: "solid #d4d4d4 2px", padding: "10px" }}
        >
          <Col span={5}>Section: {section?.section}</Col>
          <Col span={5}>
            Days:{" "}
            {section.days?.map((day:string, inx:number) => (
              <span key={inx}>{day + " "}</span>
            ))}
          </Col>
          <Col span={5}>Start Time: {section?.startTime}</Col>
          <Col span={5}>End Time: {section?.endTime}</Col>
          <Button
            onClick={() => handleEnrollCourse(section?._id)}
            disabled={isLoading}
          >
            Enroll
          </Button>
        </Row>
      </>
    );
};

export default OfferedCourseSection;