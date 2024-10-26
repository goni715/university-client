import { Button, Col, Flex } from "antd";
import { useGetFacultyEnrolledCoursesQuery } from "../../redux/features/faculty/facultyCourseManagementApi";
import facultySemesterOptions from "../../utils/facultySemesterOptions";
import PHForm from "../../components/form/PHForm";
import PHSelect from "../../components/form/PHSelect";
import facultyCourseOptions from "../../utils/facultyCourseOptions";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { FieldValues, SubmitHandler } from "react-hook-form";


const MyCoursesPage = () => {
    const { data, isLoading } = useGetFacultyEnrolledCoursesQuery(undefined);
    const semesterOptions = facultySemesterOptions(data?.data);
    const courseOptions = facultyCourseOptions(data?.data);
    const navigate = useNavigate()


    
const fiterSchema = z.object({
    semesterRegistration: z.string({
      required_error: "Please Select a Semester",
    }),
    course: z.string({
        required_error: "Select a Course",
      })
  });

  const onSubmit : SubmitHandler<FieldValues> = (data) => {
    navigate(`/faculty/courses/${data.semesterRegistration}/${data.course}`)
  }



    return (
      <>
        <Flex justify="center" align="center" style={{ minHeight: "80vh" }}>
          <Col span={6}>
            <PHForm
              onSubmit={onSubmit}
              resolver={zodResolver(fiterSchema)}
            >
              <PHSelect
                name="semesterRegistration"
                label="Semester"
                options={semesterOptions}
                disabled={isLoading}
              />
               <PHSelect
                name="course"
                label="Course"
                options={courseOptions}
                disabled={isLoading}
              />
              <Button htmlType="submit">Submit</Button>
            </PHForm>
          </Col>
        </Flex>
      </>
    );
};

export default MyCoursesPage;