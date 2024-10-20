import { FieldValues, SubmitHandler } from "react-hook-form";
import { Button, Col, Flex } from "antd";
import { zodResolver } from "@hookform/resolvers/zod";
import { semesterOptions } from "../../../constants/semester";
import { ErrorToast, LoadingToast, SuccessToast } from "../../../helper/ValidationHelper";
import PHForm from "../../../components/form/PHForm";
import { AcademicSemesterSchema } from "../../../schemas/academicManagement.schema";
import PHSelect from "../../../components/form/PHSelect";
import { monthOptions } from "../../../constants/global";
import { useAddAcademicSemesterMutation } from "../../../redux/features/admin/academicManagement/academicSemester/academicSemesterApi";



const currentYear = new Date().getFullYear();
const yearOptions = [0, 1, 2, 3, 4].map((item)=> ({
  value: String(currentYear + item),
  label: String(currentYear + item)
}));




const CreateAcademicSemesterPage = () => {
  const [ addAcademicSemester ] = useAddAcademicSemesterMutation()

  const onSubmit : SubmitHandler<FieldValues> = async (data) => {
      const name = semesterOptions[Number(data?.name) -1 ]?.label;
      const semesterData = {
        name,
        code: data.name,
        year: data.year,
        startMonth: data.startMonth,
        endMonth: data.endMonth,
      }

     const toastId = LoadingToast('Processing...') 

    try {
      await addAcademicSemester(semesterData).unwrap();
      SuccessToast("Academic Semester Create Success", toastId);
      return true;
    } catch (err: any) {
      if (err?.status === 409) {
        ErrorToast("This Semester is already existed", toastId);
      } else {
        ErrorToast("Something Went Wrong", toastId);
      }
    }
  }



    return (
      <>
        <Flex justify="center" align="center">
          <Col span={6}>
            <PHForm onSubmit={onSubmit} resolver={zodResolver(AcademicSemesterSchema)}>
              <PHSelect name="name" label="Name" options={semesterOptions}/>
              <PHSelect name="year" label="Year" options={yearOptions}/>
              <PHSelect name="startMonth" label="Start Month" options={monthOptions} />
              <PHSelect name="endMonth" label="End Month" options={monthOptions} />
              <Button htmlType="submit">Submit</Button>
            </PHForm>
          </Col>
        </Flex>
      </>
    );
};

export default CreateAcademicSemesterPage;