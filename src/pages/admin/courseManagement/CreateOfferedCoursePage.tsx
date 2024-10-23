import { Button, Col, Flex } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAddAcademicDepartmentMutation } from "../../../redux/features/admin/academicManagement/academicDepartment/academicDepartmentApi";
import {
  ErrorToast,
  LoadingToast,
  SuccessToast,
} from "../../../helper/ValidationHelper";
import { AcademicDepartmentSchema } from "../../../schemas/academicManagement.schema";
import PHInput from "../../../components/form/PHInput";
import PHForm from "../../../components/form/PHForm";
import { useGetAllAcademicFacultiesQuery } from "../../../redux/features/admin/academicManagement/academicFaculty/academicFacultyApi";
import PHSelectWithWatch from "../../../components/form/PHSelectWithWatch";
import { useState } from "react";



const CreateOfferedCoursePage = () => {
    const [id, setId] = useState('')
  const { data: facultyData, isLoading } = useGetAllAcademicFacultiesQuery(undefined);
  const academicFacultyOptions = facultyData?.data?.map((item) => ({
    value: item?._id,
    label: item?.name,
  }));

  const [addAcademicDepartment] = useAddAcademicDepartmentMutation();


 console.log(id);




  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = LoadingToast("Creating...");
    try {
      await addAcademicDepartment(data).unwrap();
      SuccessToast("Academic Department Create Success", toastId);
      return true;
    } catch (err: any) {
      if (err?.status === 400) {
        ErrorToast("This Department existed", toastId);
      }
      if (err?.status === 500) {
        ErrorToast("Something Went Wrong", toastId);
      }
    }
  };

  return (
    <>
      <Flex justify="center" align="center" style={{ minHeight: "80vh" }}>
        <Col span={6}>
          <PHForm
            onSubmit={onSubmit}
            resolver={zodResolver(AcademicDepartmentSchema)}
          >  
            <PHSelectWithWatch
              name="academicFaculty"
              label="Academic Faculty"
              options={academicFacultyOptions}
              disabled={isLoading}
              setId={setId}
            />
             <PHInput type="text" name="name" label="Name" disabled={!id} />
            <Button htmlType="submit">Submit</Button>
          </PHForm>
        </Col>
      </Flex>
    </>
  );
};



export default CreateOfferedCoursePage;