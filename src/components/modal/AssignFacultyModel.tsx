import { Button, Modal } from "antd";
import { ErrorToast, LoadingToast, SuccessToast } from "../../helper/ValidationHelper";
import { useState } from "react";
import { useAssignFacultyWithCourseMutation } from "../../redux/features/admin/courseManagement/courseFaculty/courseFacultyApi";
import PHForm from "../form/PHForm";
import PHMultiSelect from "../form/PHMultiSelect";
import { monthOptions } from "../../constants/global";
import { FieldValues, SubmitHandler } from "react-hook-form";

type TProps = {
  courseId: string
}

const AssignFacultyModel = ( {courseId} : TProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ assignFacultyWithCourse, {isLoading}] = useAssignFacultyWithCourseMutation()



  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };




  //handleChancge status
  const onSubmit: SubmitHandler<FieldValues> = async(data) => {
    console.log(data);
  //   const toastId = LoadingToast('Processing...')
  //   try{
  //     await changeStatus({
  //       id: userId,
  //       data: {
  //         status: status === 'in-progress' ? "blocked" : 'in-progress'
  //       }
  //     }).unwrap();
  //     dispatch(SetBlockModalOpen(false));
  //     SuccessToast('Success', toastId);
  //   }
  //   // eslint-disable-next-line @typescript-eslint/no-unused-vars
  //   catch(err){
  //     ErrorToast("Something Went Wrong", toastId)
  //   }
  }; 




  return (
    <>
    <Button onClick={showModal}>
        Assign Faculty
      </Button>
      <Modal
        open={isModalOpen}
        title="Assign Faculties with course"
        closable={false}
        footer={false}
      >
        <PHForm onSubmit={onSubmit}>
          <PHMultiSelect name="faculties" label="Faculties" options={monthOptions}/>
          <div style={{display:"flex", justifyContent:"end", rowGap:"10px"}}>
          <Button key="back" onClick={handleCancel}>
            Cancel{courseId}
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={isLoading}
            htmlType="submit"
          >
            Confirm
          </Button>
          </div>
        </PHForm>
      </Modal>
    </>
  );
};

export default AssignFacultyModel;
