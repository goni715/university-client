import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForn from "../../components/form/PHForn";
import { Button, Col, Flex } from "antd";
import PHSelect from "../../components/form/PHSelect";
import { semesterOptions } from "../../constants/semester";
import { monthOptions } from "../../constants/global";
import { zodResolver } from "@hookform/resolvers/zod";
import { AcademicSemesterSchema } from "../../schemas/academicManagement.schema";
import { useAddAcademicSemesterMutation } from "../../redux/features/academicSemester/academicSemesterApi";
import { ErrorToast, LoadingToast, SuccessToast } from "../../helper/ValidationHelper";



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
      const res = await addAcademicSemester(semesterData).unwrap();
      SuccessToast("Academic Semester Create Success", toastId);

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
            <PHForn onSubmit={onSubmit} resolver={zodResolver(AcademicSemesterSchema)}>
              <PHSelect name="name" label="Name" options={semesterOptions}/>
              <PHSelect name="year" label="Year" options={yearOptions}/>
              <PHSelect name="startMonth" label="Start Month" options={monthOptions} />
              <PHSelect name="endMonth" label="End Month" options={monthOptions} />
              <Button htmlType="submit">Submit</Button>
            </PHForn>
          </Col>
        </Flex>
      </>
    );
};

export default CreateAcademicSemesterPage;