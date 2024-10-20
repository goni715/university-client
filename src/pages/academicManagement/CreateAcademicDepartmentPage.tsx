import { Button, Col, Flex } from "antd";
import PHForn from "../../components/form/PHForn";
import PHSelect from "../../components/form/PHSelect";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { AcademicDepartmentSchema } from "../../schemas/academicManagement.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import PHInput from "../../components/form/PHInput";
import { useGetAllAcademicFacultiesQuery } from "../../redux/features/academicFaculty/academicFacultyApi";
import { useAddAcademicDepartmentMutation } from "../../redux/features/academicDepartment/academicDepartmentApi";
import { ErrorToast, LoadingToast, SuccessToast } from "../../helper/ValidationHelper";


const CreateAcademicDepartmentPage = () => {
  const {data:facultyData} = useGetAllAcademicFacultiesQuery(undefined);
  const academicFacultyOptions = facultyData?.data?.map((item) => ({
    value: item?._id,
    label: item?.name
  }));

  const [addAcademicDepartment] = useAddAcademicDepartmentMutation();


  const onSubmit : SubmitHandler<FieldValues> = async(data) => {
    console.log(data);
    const toastId = LoadingToast('Creating...');
    try{
      await addAcademicDepartment(data).unwrap();
      SuccessToast('Academic Department Create Success', toastId);
    }catch(err:any){
      if(err?.status===400){
        ErrorToast('This Department existed', toastId);
      }
      if(err?.status===500){
        ErrorToast('Something Went Wrong', toastId);
      }
    }
  }


    return (
      <>
        <Flex justify="center" align="center" style={{ minHeight: "80vh" }}>
          <Col span={6}>
            <PHForn
              onSubmit={onSubmit}
              resolver={zodResolver(AcademicDepartmentSchema)}
            >
              <PHInput type="text" name="name" label="Name" />
              <PHSelect name="academicFaculty" label="Academic Faculty" options={academicFacultyOptions} />
              <Button htmlType="submit">Submit</Button>
            </PHForn>
          </Col>
        </Flex>
      </>
    );
};

export default CreateAcademicDepartmentPage;