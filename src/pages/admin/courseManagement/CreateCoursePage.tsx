import { FieldValues, SubmitHandler } from "react-hook-form";
import { Button, Col, Flex } from "antd";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorToast, LoadingToast, SuccessToast } from "../../../helper/ValidationHelper";
import PHForm from "../../../components/form/PHForm";
import PHInput from "../../../components/form/PHInput";
import PHMultiSelect from "../../../components/form/PHMultiSelect";
import { courseSchema } from "../../../schemas/course.schema";
import { useCreateCourseMutation, useGetAllCoursesQuery } from "../../../redux/features/admin/courseManagement/course/courseApi";







const CreateCoursePage = () => {
    const { data: coursesData, isLoading } = useGetAllCoursesQuery([
        {name: "sort", value: 'code'}
    ]);
    const preRequisiteCoursesOptions = coursesData?.data?.map((item: { _id: string; title: string; code: number; }) => ({
      value: item?._id,
      label: `${item?.title} ${item?.code}`,
    }));


    const [createCourse, {isLoading: createLoading}] = useCreateCourseMutation();
    



  const onSubmit : SubmitHandler<FieldValues> = async(data) => {

    const courseData = {
      ...data,
      code: Number(data.code),
      credits: Number(data.credits),
      preRequisiteCourses: data.preRequisiteCourses ? data.preRequisiteCourses?.map((item: string) => ({
        course: item,
        isDeleted: false,
      })) : []
    };

     const toastId = LoadingToast('Creating...') 

    try {
      await createCourse(courseData).unwrap();
      SuccessToast("Course Create Success", toastId);
      return true;
    } catch (err: any) {
      console.log(err);
      if(err?.status === 400){
        if(err?.data?.errorSources){
          ErrorToast(err?.data?.errorSources?.[0]?.message, toastId)
        }
        else{
           ErrorToast('Something Went Wrong', toastId)
        }
      }
    }
  }



    return (
      <>
        <Flex justify="center" align="center" style={{minHeight: '80vh'}}>
          <Col span={6}>
            <PHForm onSubmit={onSubmit} resolver={zodResolver(courseSchema)}>
              <PHInput type="text" name="title" label="Title"/>
              <PHInput type="text" name="prefix" label="Prefix"/>
              <PHInput type="text" name="code" label="Code"/>
              <PHInput type="text" name="credits" label="Credits"/>
              <PHMultiSelect name="preRequisiteCourses" label="PreRequisite Courses (Optional)" options={preRequisiteCoursesOptions} disabled={isLoading}/>
              <Button htmlType="submit" disabled={createLoading}>Submit</Button>
            </PHForm>
          </Col>
        </Flex>
      </>
    );
};

export default CreateCoursePage;