import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForn from "../../components/form/PHForn";
import PHInput from "../../components/form/PHInput";
import { Button, Col, Flex } from "antd";
import PHSelect from "../../components/form/PHSelect";

const CreateAcademicSemesterPage = () => {

    const onSubmit : SubmitHandler<FieldValues> = (data) => {
        console.log(data);
    }
    return (
      <>
        <Flex justify="center" align="center">
          <Col span={6}>
            <PHForn onSubmit={onSubmit}>
              <PHSelect label="Name"/>
              <PHInput type="text" name="year" label="Year" />
              <Button htmlType="submit">Submit</Button>
            </PHForn>
          </Col>
        </Flex>
      </>
    );
};

export default CreateAcademicSemesterPage;