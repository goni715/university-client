import { Button, Col, Divider, Form, Input, Row } from "antd";
import PHForm from "../../../components/form/PHForm";
import { Controller, FieldValues, SubmitHandler } from "react-hook-form";
import PHInput from "../../../components/form/PHInput";
import PHSelect from "../../../components/form/PHSelect";
import { bloodGroupOptions, genderOptions } from "../../../constants/global";
import { useGetAllDepartmentsQuery } from "../../../redux/features/admin/academicManagement/academicDepartment/academicDepartmentApi";
import PHDatePicker from "../../../components/form/PHDatePicker";
import { useGetAllSemestersQuery } from "../../../redux/features/admin/academicManagement/academicSemester/academicSemesterApi";
import { useCreateStudentMutation } from "../../../redux/features/admin/userManagement/userManagementApi";
import { ErrorToast, LoadingToast, SuccessToast } from "../../../helper/ValidationHelper";
import { zodResolver } from "@hookform/resolvers/zod";
import { createStudentSchema } from "../../../schemas/student.schema";

const studentDummyData = {
  password: "",
  studentData: {
    name: {
      firstName: "Evan",
      middleName: "Ahmed",
      lastName: "Nayok",
    },
    email: "gon6@gmail.com",
    gender: "male",
    dateOfBirth: "2000-01-01",
    bloodGroup: "A+",

    contactNo: "123-456-7890",
    emergencyContactNo: "098-765-4321",
    presentAddress: "Gopalganj, Dhaka",
    permanentAddress: "Saidpur, Nilphamari",

    guardian: {
      fatherName: "James Doe",
      fatherOccupation: "Engineer",
      fatherContactNo: "111-222-3333",
      motherName: "Jane Doe",
      motherOccupation: "Doctortttr",
      motherContactNo: "444-555-6666",
    },
    localGuardian: {
      name: "Uncle Bob",
      occupation: "Teacher",
      contactNo: "777-888-9999",
      address: "9101 Pine Street, Springfield, IL",
    },
    admissionSemester: "66f672b05661c240a320c439",
    academicDepartment: "66f64ec6a85e6a248170887e",
  },
};


const studentDefaultValues = {
    name: {
      firstName: "Evan",
      middleName: "Ahmed",
      lastName: "Nayok",
    },
    email: "jaman1@gmail.com",
    gender: "male",
    // //dateOfBirth: "2000-01-01",
    bloodGroup: "A+",

    contactNo: "01793837035",
    emergencyContactNo: "01793837035",
    presentAddress: "Gopalganj, Dhaka",
    permanentAddress: "Saidpur, Nilphamari",

    guardian: {
      fatherName: "James Doe",
      fatherOccupation: "Engineer",
      fatherContactNo: "01793837035",
      motherName: "Jane Doe",
      motherOccupation: "Doctortttr",
      motherContactNo: "01793837035",
    },
    localGuardian: {
      name: "Uncle Bob",
      occupation: "Teacher",
      contactNo: "01793837035",
      address: "9101 Pine Street, Springfield, IL",
    },
    //admissionSemester: "66f672b05661c240a320c439",
    //academicDepartment: "66f64ec6a85e6a248170887e",
 
};

const CreateStudentPage = () => {
  const { data: semesterData, isLoading: semesterLoading } = useGetAllSemestersQuery(undefined);
  const {
    data: departmentData, isLoading: deptLoading
  } = useGetAllDepartmentsQuery(undefined, {skip:semesterLoading}); //depending loading
  const academicDepartmentOptions = departmentData?.data?.map((item) => ({
    value: item?._id,
    label: item?.name,
  }));
  const academicSemesterOptions = semesterData?.data?.map((item) => ({
    value: item?._id,
    label: `${item?.name} ${item?.year}`,
  }));

  const [createStudent, {isLoading}] = useCreateStudentMutation();



  //handle student
  const onSubmit : SubmitHandler<FieldValues> = async ( data ) => {
    const payload = {
      password: "student123",
      studentData: data
    }
    const formData = new FormData();
    formData.append('data', JSON.stringify(payload));
    formData.append('image', data?.image)

   const toastId = LoadingToast('Creating...')
    try{
      await createStudent(formData).unwrap();
      SuccessToast('Student Create Success', toastId);

    }catch(err:any){
      if(err?.status === 409){
        ErrorToast('This Email is already existed', toastId)
      }
      else{
        ErrorToast('Something Went Wrong', toastId)
        console.log(err);
      }
    }
    
    //console.log(Object.fromEntries(formData));
  }



  return (
    <>
      <Row>
        <Col span={24}>
          <PHForm onSubmit={onSubmit} defaultValues={studentDefaultValues} resolver={zodResolver(createStudentSchema)}>
            <Divider>Personal Information</Divider>
            <Row gutter={8}>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHInput type="text" name="name.firstName" label="First Name" />
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHInput
                  type="text"
                  name="name.middleName"
                  label="Middle Name (Optional)"
                />
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHInput type="text" name="name.lastName" label="Last Name" />
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHSelect
                  name="gender"
                  label="Gender"
                  options={genderOptions}
                />
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHDatePicker name="dateOfBirth" label="Date of Birth" />
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHSelect
                  name="bloodGroup"
                  label="Blood Group"
                  options={bloodGroupOptions}
                />
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <Controller
                  name="image"
                  render={({ field: {onChange, value, ...field} }) => (
                    <Form.Item label="Picture (Optional)">
                      <Input
                        {...field}
                        value={value?.fileName}
                        type="file"
                        onChange={(e) => onChange(e.target.files?.[0])}
                      />
                    </Form.Item>
                  )}
                />
              </Col>
            </Row>
            <Divider>Contact Information</Divider>
            <Row gutter={8}>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHInput type="text" name="email" label="Email" />
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHInput type="text" name="contactNo" label="Contact No." />
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHInput
                  type="text"
                  name="emergencyContactNo"
                  label="Emergency Contact No"
                />
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHInput
                  type="text"
                  name="presentAddress"
                  label="Present Address"
                />
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHInput
                  type="text"
                  name="permanentAddress"
                  label="Permanent Address"
                />
              </Col>
            </Row>
            <Divider>Guardian Info.</Divider>
            <Row gutter={8}>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHInput
                  type="text"
                  name="guardian.fatherName"
                  label="Father Name"
                />
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHInput
                  type="text"
                  name="guardian.fatherOccupation"
                  label="Father Occupation"
                />
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHInput
                  type="text"
                  name="guardian.fatherContactNo"
                  label="Father Contact No"
                />
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHInput
                  type="text"
                  name="guardian.motherName"
                  label="Mother Name"
                />
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHInput
                  type="text"
                  name="guardian.motherOccupation"
                  label="Mother Occupation"
                />
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHInput
                  type="text"
                  name="guardian.motherContactNo"
                  label="Mother Contact No"
                />
              </Col>
            </Row>
            <Divider>Local Guardian Info.</Divider>
            <Row gutter={8}>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHInput type="text" name="localGuardian.name" label="Name" />
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHInput
                  type="text"
                  name="localGuardian.occupation"
                  label="Ocupation"
                />
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHInput
                  type="text"
                  name="localGuardian.contactNo"
                  label="Contact No"
                />
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHInput
                  type="text"
                  name="localGuardian.address"
                  label="Address"
                />
              </Col>
            </Row>
            <Divider>Academic Information</Divider>
            <Row gutter={8}>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHSelect
                  name="admissionSemester"
                  label="Admission Semester"
                  options={academicSemesterOptions}
                  disabled={semesterLoading}
                />
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHSelect
                  name="academicDepartment"
                  label="Academic Department"
                  options={academicDepartmentOptions}
                  disabled={deptLoading}
                />
              </Col>
            </Row>
            <Button htmlType="submit" disabled={isLoading}>Submit</Button>
          </PHForm>
        </Col>
      </Row>
    </>
  );
};

export default CreateStudentPage;
