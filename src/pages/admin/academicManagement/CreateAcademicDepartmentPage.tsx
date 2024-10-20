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
import PHSelect from "../../../components/form/PHSelect";
import PHForm from "../../../components/form/PHForm";
import { useGetAllAcademicFacultiesQuery } from "../../../redux/features/admin/academicManagement/academicFaculty/academicFacultyApi";

const CreateAcademicDepartmentPage = () => {
  const { data: facultyData } = useGetAllAcademicFacultiesQuery(undefined);
  const academicFacultyOptions = facultyData?.data?.map((item) => ({
    value: item?._id,
    label: item?.name,
  }));

  const [addAcademicDepartment] = useAddAcademicDepartmentMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = LoadingToast("Creating...");
    try {
      await addAcademicDepartment(data).unwrap();
      SuccessToast("Academic Department Create Success", toastId);
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
            <PHInput type="text" name="name" label="Name" />
            <PHSelect
              name="academicFaculty"
              label="Academic Faculty"
              options={academicFacultyOptions}
            />
            <Button htmlType="submit">Submit</Button>
          </PHForm>
        </Col>
      </Flex>
    </>
  );
};

export default CreateAcademicDepartmentPage;
