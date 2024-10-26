import { Button, Modal } from "antd";
import {
  ErrorToast,
  LoadingToast,
  SuccessToast,
} from "../../helper/ValidationHelper";
import { useState } from "react";
import PHForm from "../form/PHForm";
import { FieldValues, SubmitHandler } from "react-hook-form";
import PHInput from "../form/PHInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { marksSchema } from "../../schemas/marks.schema";
import { useUpdateEnrollCourseMarksMutation } from "../../redux/features/faculty/facultyCourseManagementApi";

const UpdateMarksModal = ({ record }: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    semesterRegistration,
    offeredCourse,
    studentId,
    courseMarks: { classTest1, midTerm, classTest2, finalTerm },
  } = record;

  const marksDefaultValues = {
    classTest1: String(classTest1),
    midTerm: String(midTerm),
    classTest2: String(classTest2),
    finalTerm: String(finalTerm),
  };

  const [ updateEnrollCourseMarks, { isLoading }] = useUpdateEnrollCourseMarksMutation()

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  //handleChancge status
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const payload = {
      semesterRegistration,
      offeredCourse,
      student: studentId,
      courseMarks: {
        classTest1: Number(data.classTest1),
        midTerm: Number(data.midTerm),
        classTest2: Number(data.classTest2),
        finalTerm: Number(data.finalTerm)
      },
    };

    const toastId = LoadingToast('Processing...')

    try{
      await updateEnrollCourseMarks(payload).unwrap();

      handleCancel();//close modal
      SuccessToast('Success', toastId);
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    catch(err){
      ErrorToast("Something Went Wrong", toastId)
    }
  };

  return (
    <>
      <Button onClick={showModal}>Update Marks</Button>
      <Modal
        open={isModalOpen}
        title="Update Marks"
        closable={false}
        footer={false}
      >
        <PHForm
          onSubmit={onSubmit}
          defaultValues={marksDefaultValues}
          resolver={zodResolver(marksSchema)}
        >
          <PHInput type="text" name="classTest1" label="Class Text 1" />
          <PHInput type="text" name="midTerm" label="Mid Term" />
          <PHInput type="text" name="classTest2" label="Class Text 2" />
          <PHInput type="text" name="finalTerm" label="Final Term" />
          <div
            style={{ display: "flex", justifyContent: "end"}}
          >
            <Button key="back" onClick={handleCancel} style={{marginRight: '10px'}}>
              Cancel
            </Button>
            <Button
              key="submit"
              type="primary"
              htmlType="submit"
              disabled={isLoading}
            >
              Confirm
            </Button>
          </div>
        </PHForm>
      </Modal>
    </>
  );
};

export default UpdateMarksModal;
