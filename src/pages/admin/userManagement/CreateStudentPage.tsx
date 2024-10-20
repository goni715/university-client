import { Button, Col, Divider, Row } from "antd";
import PHForm from "../../../components/form/PHForm";
import { FieldValues, SubmitHandler } from "react-hook-form";
import PHInput from "../../../components/form/PHInput";
import PHSelect from "../../../components/form/PHSelect";
import { bloodGroupOptions, genderOptions } from "../../../constants/global";

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

const CreateStudentPage = () => {


  const onSubmit : SubmitHandler<FieldValues> = async ( data ) => {
    console.log(data);
  }



  return (
    <>
      <Row>
        <Col span={24}>
          <PHForm onSubmit={onSubmit}>
            <Divider>Personal Information</Divider>
            <Row gutter={8}>
              <Col span={24} md={{span: 12}} lg={{span: 8}}>
                <PHInput type="text" name="name.firstName" label="First Name" />
              </Col>
              <Col span={24} md={{span: 12}} lg={{span: 8}}>
                <PHInput type="text" name="name.middleName" label="Middle Name" />
              </Col>
              <Col span={24} md={{span: 12}} lg={{span: 8}}>
                <PHInput type="text" name="name.lastName" label="Last Name" />
              </Col>
              <Col span={24} md={{span: 12}} lg={{span: 8}}>
                <PHSelect name="gender" label="Gender" options={genderOptions} />
              </Col>
              <Col span={24} md={{span: 12}} lg={{span: 8}}>
                <PHInput type="text" name="dateOfBirth" label="Date of Birth" />
              </Col>
              <Col span={24} md={{span: 12}} lg={{span: 8}}>
                <PHSelect name="bloodGroup" label="Blood Group" options={bloodGroupOptions} />
              </Col>
            </Row>
            <Divider>Contact Information</Divider>
            <Row gutter={8}>
              <Col span={24} md={{span: 12}} lg={{span: 8}}>
                <PHInput type="email" name="email" label="Email" />
              </Col>
              <Col span={24} md={{span: 12}} lg={{span: 8}}>
                <PHInput type="text" name="contactNo" label="Contact No." />
              </Col>
              <Col span={24} md={{span: 12}} lg={{span: 8}}>
                <PHInput type="text" name="emergencyContactNo" label="Emergency Contact No" />
              </Col>
              <Col span={24} md={{span: 12}} lg={{span: 8}}>
                <PHInput type="text" name="presentAddress" label="Present Address" />
              </Col>
              <Col span={24} md={{span: 12}} lg={{span: 8}}>
                <PHInput type="text" name="permanentAddress" label="Permanent Address" />
              </Col>
            </Row>
            <Divider>Guardian Info.</Divider>
            <Row gutter={8}>
              <Col span={24} md={{span: 12}} lg={{span: 8}}>
                <PHInput type="text" name="guardian.fatherName" label="Father Name" />
              </Col>
              <Col span={24} md={{span: 12}} lg={{span: 8}}>
                <PHInput type="text" name="guardian.fatherOccupation" label="Father Occupation" />
              </Col>
              <Col span={24} md={{span: 12}} lg={{span: 8}}>
                <PHInput type="text" name="guardian.fatherContactNo" label="Father Contact No" />
              </Col>
              <Col span={24} md={{span: 12}} lg={{span: 8}}>
                <PHInput type="text" name="guardian.motherName" label="Mother Name" />
              </Col>
              <Col span={24} md={{span: 12}} lg={{span: 8}}>
                <PHInput type="text" name="guardian.motherOccupation" label="Mother Occupation" />
              </Col>
              <Col span={24} md={{span: 12}} lg={{span: 8}}>
                <PHInput type="text" name="guardian.motherContactNo" label="Mother Contact No" />
              </Col>
            </Row>
            <Divider>Local Guardian Info.</Divider>
            <Row gutter={8}>
              <Col span={24} md={{span: 12}} lg={{span: 8}}>
                <PHInput type="text" name="localGuardian.name" label="Name" />
              </Col>
              <Col span={24} md={{span: 12}} lg={{span: 8}}>
                <PHInput type="text" name="localGuardian.occupation" label="Ocupation" />
              </Col>
              <Col span={24} md={{span: 12}} lg={{span: 8}}>
                <PHInput type="text" name="localGuardian.contactNo" label="Contact No" />
              </Col>
              <Col span={24} md={{span: 12}} lg={{span: 8}}>
                <PHInput type="text" name="localGuardian.address" label="Address" />
              </Col>
            </Row>
            <Divider>Academic Information</Divider>
            <Row gutter={8}>
              <Col span={24} md={{span: 12}} lg={{span: 8}}>
                <PHInput type="text" name="admissionSemester" label="Admission Semester" />
              </Col>
              <Col span={24} md={{span: 12}} lg={{span: 8}}>
                <PHInput type="text" name="academicDepartment" label="Academic Department" />
              </Col>
            </Row>
            <Button htmlType="submit">Submit</Button>
          </PHForm>
        </Col>
      </Row>
    </>
  );
};

export default CreateStudentPage;
