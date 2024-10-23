import { FieldValues, SubmitHandler } from "react-hook-form";
import { Button, Col, Flex } from "antd";
import { zodResolver } from "@hookform/resolvers/zod";
import { semesterStatusOptions } from "../../../constants/semester";
import { ErrorToast, LoadingToast, SuccessToast } from "../../../helper/ValidationHelper";
import PHForm from "../../../components/form/PHForm";
import PHInput from "../../../components/form/PHInput";
import { createSemesterRegistrationSchema } from "../../../schemas/semesterRegistration.schema";
import { useGetAllSemestersQuery } from "../../../redux/features/admin/academicManagement/academicSemester/academicSemesterApi";
import { useCreateSemesterRegistrationMutation } from "../../../redux/features/admin/courseManagement/semesterRegistration/semesterRegistrationApi";
import PHMultiSelect from "../../../components/form/PHMultiSelect";
import { monthOptions } from "../../../constants/global";
import { courseSchema } from "../../../schemas/course.schema";







const CreateCoursePage = () => {
    const { data: semesterData, isLoading } = useGetAllSemestersQuery([
        {name: "sort", value: 'year'}
    ]);
    const academicSemesterOptions = semesterData?.data?.map((item) => ({
      value: item?._id,
      label: `${item?.name} ${item?.year}`,
    }));


    const [createSemesterRegistration] = useCreateSemesterRegistrationMutation();
    



  const onSubmit : SubmitHandler<FieldValues> = async(data) => {
    let preRequisiteCourses = [];
    if(data.preRequisiteCourses?.length > 0){
        preRequisiteCourses = data.preRequisiteCourses.map((item:string)=> ({
            course: item,
            isDeleted: false
        }))
    }

    const courseData = {
      ...data,
      code: Number(data.code),
      credits: Number(data.credits),
      preRequisiteCourses
    }

  
    //console.log(preRequisiteCourses);

    console.log(courseData);

   

    //  const toastId = LoadingToast('Creating...') 

    // try {
    //   await createSemesterRegistration(newSemesterData).unwrap();
    //   SuccessToast("Academic Semester Create Success", toastId);
    //   return true;
    // } catch (err: any) {
    //   if(err?.status === 400){
    //     ErrorToast(err?.data?.message, toastId)
    //   }
    //   else{
    //     ErrorToast("Something Went Wrong", toastId)
    //   } 
    // }


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
              <PHMultiSelect name="preRequisiteCourses" label="PreRequisite Courses" options={monthOptions}/>
              <Button htmlType="submit">Submit</Button>
            </PHForm>
          </Col>
        </Flex>
      </>
    );
};

export default CreateCoursePage;