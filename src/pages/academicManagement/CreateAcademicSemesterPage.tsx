import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForn from "../../components/form/PHForn";
import PHInput from "../../components/form/PHInput";
import { Button, Col, Flex } from "antd";
import PHSelect from "../../components/form/PHSelect";

const nameOptions = [
  {
    value: "01",
    label: "Autumn",
  },
  {
    value: "02",
    label: "Summer",
  },
  {
    value: "03",
    label: "Fall",
  },
]


const CreateAcademicSemesterPage = () => {

    const onSubmit : SubmitHandler<FieldValues> = (data) => {
      const name = nameOptions[Number(data.name) -1 ].label;
      const semesterData = {
        name,
        code: data.name
      }
      
      console.log(semesterData);
    }






    return (
      <>
        <Flex justify="center" align="center" >
          <Col span={6}>
            <PHForn onSubmit={onSubmit}>
              <PHSelect name="name" label="Name" options={nameOptions}/>
              <PHSelect name="startMonth" label="Start Month" options={nameOptions}/>
              <PHSelect name="endMOnth" label="End Month" options={nameOptions}/>
              <PHInput type="text" name="year" label="Year" />
              <Button htmlType="submit">Submit</Button>
            </PHForn>
          </Col>
        </Flex>
      </>
    );
};

export default CreateAcademicSemesterPage;