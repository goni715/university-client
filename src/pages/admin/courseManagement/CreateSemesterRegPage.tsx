import { FieldValues, SubmitHandler } from "react-hook-form";
import { Button, Col, Flex } from "antd";
import { zodResolver } from "@hookform/resolvers/zod";
import { semesterOptions, semesterStatusOptions } from "../../../constants/semester";
import { ErrorToast, LoadingToast, SuccessToast } from "../../../helper/ValidationHelper";
import PHForm from "../../../components/form/PHForm";
import { AcademicSemesterSchema } from "../../../schemas/academicManagement.schema";
import PHSelect from "../../../components/form/PHSelect";
import { monthOptions } from "../../../constants/global";
import { useAddAcademicSemesterMutation, useGetAllSemestersQuery } from "../../../redux/features/admin/academicManagement/academicSemester/academicSemesterApi";
import PHDatePicker from "../../../components/form/PHDatePicker";
import PHInput from "../../../components/form/PHInput";
import { createSemesterRegistrationSchema } from "../../../schemas/semesterRegistration.schema";



const currentYear = new Date().getFullYear();
const yearOptions = [0, 1, 2, 3, 4].map((item)=> ({
  value: String(currentYear + item),
  label: String(currentYear + item)
}));




const CreateSemesterRegPage = () => {
    const { data: semesterData, isLoading } = useGetAllSemestersQuery([
        {name: "sort", value: 'year'}
    ]);
    const academicSemesterOptions = semesterData?.data?.map((item) => ({
      value: item?._id,
      label: `${item?.name} ${item?.year}`,
    }));
    



  const onSubmit : SubmitHandler<FieldValues> = (data) => {
    const newSemesterData = {
      ...data,
      minCredit: Number(data.minCredit),
      maxCredit: Number(data.maxCredit)
    }

    console.log(newSemesterData);
//       const name = semesterOptions[Number(data?.name) -1 ]?.label;
//       const semesterData = {
//         name,
//         code: data.name,
//         year: data.year,
//         startMonth: data.startMonth,
//         endMonth: data.endMonth,
//       }

    //  const toastId = LoadingToast('Processing...') 

    // try {
    //   await addAcademicSemester(semesterData).unwrap();
    //   SuccessToast("Academic Semester Create Success", toastId);
    //   return true;
    // } catch (err: any) {
    //   if (err?.status === 409) {
    //     ErrorToast("This Semester is already existed", toastId);
    //   } else {
    //     ErrorToast("Something Went Wrong", toastId);
    //   }
    // }
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