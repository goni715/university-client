import { FieldValues, SubmitHandler } from "react-hook-form";
import { Button, Col, Flex } from "antd";
import { zodResolver } from "@hookform/resolvers/zod";
import { semesterStatusOptions } from "../../../constants/semester";
import { ErrorToast, LoadingToast, SuccessToast } from "../../../helper/ValidationHelper";
import PHForm from "../../../components/form/PHForm";
import PHSelect from "../../../components/form/PHSelect";
import PHDatePicker from "../../../components/form/PHDatePicker";
import PHInput from "../../../components/form/PHInput";
import { createSemesterRegistrationSchema } from "../../../schemas/semesterRegistration.schema";
import { useGetAllSemestersQuery } from "../../../redux/features/admin/academicManagement/academicSemester/academicSemesterApi";
import { useCreateSemesterRegistrationMutation } from "../../../redux/features/admin/courseManagement/semesterRegistration/semesterRegistrationApi";







const CreateSemesterRegPage = () => {
    const { data: semesterData, isLoading } = useGetAllSemestersQuery([
        {name: "sort", value: 'year'}
    ]);
    const academicSemesterOptions = semesterData?.data?.map((item) => ({
      value: item?._id,
      label: `${item?.name} ${item?.year}`,
    }));


    const [createSemesterRegistration] = useCreateSemesterRegistrationMutation();
    



  const onSubmit : SubmitHandler<FieldValues> = async(data) => {
    const newSemesterData = {
      ...data,
      minCredit: Number(data.minCredit),
      maxCredit: Number(data.maxCredit)
    }

     const toastId = LoadingToast('Creating...') 

    try {
      await createSemesterRegistration(newSemesterData).unwrap();
      SuccessToast("Academic Semester Create Success", toastId);
      return true;
    } catch (err: any) {
      if(err?.status === 400){
        ErrorToast(err?.data?.message, toastId)
      }
      else{
        ErrorToast("Something Went Wrong", toastId)
      } 
    }
  }



    return (
      <>
        <Flex justify="center" align="center" style={{minHeight: '80vh'}}>
          <Col span={6}>
            <PHForm onSubmit={onSubmit} resolver={zodResolver(createSemesterRegistrationSchema)}>
              <PHSelect name="academicSemester" label="Academic Semester" options={academicSemesterOptions} disabled={isLoading}/>
              <PHSelect name="status" label="Semseter Status" options={semesterStatusOptions}/>
              <PHDatePicker name="startDate" label="Start Date" />
              <PHDatePicker name="endDate" label="End Date" />
              <PHInput type="text" name="minCredit" label="Min Credit"/>
              <PHInput type="text" name="maxCredit" label="Max Credit"/>
              <Button htmlType="submit">Submit</Button>
            </PHForm>
          </Col>
        </Flex>
      </>
    );
};

export default CreateSemesterRegPage;