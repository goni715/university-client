import { Button, Col, Flex } from "antd";
import { useGetFacultyEnrolledCoursesQuery } from "../../redux/features/faculty/facultyCourseManagementApi";
import facultySemesterOptions from "../../utils/facultySemesterOptions";
import PHForm from "../../components/form/PHForm";
import PHSelect from "../../components/form/PHSelect";
import facultyCourseOptions from "../../utils/facultyCourseOptions";


const MyCoursesPage = () => {
    const { data, isLoading } = useGetFacultyEnrolledCoursesQuery(undefined);
    const semesterOptions = facultySemesterOptions(data?.data);
    const courseOptions = facultyCourseOptions(data?.data);


    console.log(courseOptions);

  const onSubmit = (data) => {
    console.log(data);
  }



    return (
      <>
        <Flex justify="center" align="center" style={{ minHeight: "80vh" }}>
          <Col span={6}>
            <PHForm
              onSubmit={onSubmit}
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