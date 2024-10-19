import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForn from "../../components/form/PHForn";
import PHInput from "../../components/form/PHInput";
import { Button } from "antd";

const CreateAcademicSemesterPage = () => {

    const onSubmit : SubmitHandler<FieldValues> = (data) => {
        console.log(data);
    }
    return (
        <>
         <PHForn onSubmit={onSubmit}>
            <PHInput type="text" name="name" label="Name"/>
            <Button htmlType="submit">Submit</Button>
        </PHForn>  
        </>
    );
};

export default CreateAcademicSemesterPage;