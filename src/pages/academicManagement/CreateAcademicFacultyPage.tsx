import { Button, Col, Flex } from "antd";
import PHForn from "../../components/form/PHForn";
import { FieldValues } from "react-hook-form";
import PHInput from "../../components/form/PHInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAddAcademicFacultyMutation } from "../../redux/features/academicFaculty/academicFacultyApi";
import { ErrorToast, LoadingToast, SuccessToast } from "../../helper/ValidationHelper";
import { AcademicFacultySchema } from "../../schemas/academicManagement.schema";


const CreateAcademicFacultyPage = () => {
  const [addAcademicFaculty] = useAddAcademicFacultyMutation()

  
  const onSubmit = async (data: FieldValues) => {
    const toastId = LoadingToast('Creating...');
    try{
      await addAcademicFaculty(data).unwrap();
      SuccessToast('Academic Faculty Create Success', toastId);
    }catch(err:any){
      if(err?.status===400){
        ErrorToast('This Faculty existed', toastId);
      }
      if(err?.status===500){
        ErrorToast('Something Went Wrong', toastId);
      }
    }
  }




    return (
        <>
          <Flex justify="center" align="center">
          <Col span={6}>
            <PHForn onSubmit={onSubmit} resolver={zodResolver(AcademicFacultySchema)}>
              <PHInput type="text" name="name" label="Name" />
              <Button htmlType="submit">Submit</Button>
            </PHForn>
          </Col>
        </Flex>
        </>
    );
};

export default CreateAcademicFacultyPage;