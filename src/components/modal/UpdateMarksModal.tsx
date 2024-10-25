import { Button, Modal } from "antd";
import { ErrorToast, LoadingToast, SuccessToast } from "../../helper/ValidationHelper";
import { useState } from "react";
import { useAssignFacultyWithCourseMutation } from "../../redux/features/admin/courseManagement/courseFaculty/courseFacultyApi";
import PHForm from "../form/PHForm";
import PHMultiSelect from "../form/PHMultiSelect";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useGetAllFacultiesQuery } from "../../redux/features/admin/faculty/facultyApi";

type TProps = {
  courseId: string
}

const UpdateMarksModal = (props : any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: facultiesData, isLoading } = useGetAllFacultiesQuery(undefined);
  const facultiesOptions = facultiesData?.data?.map((item: { _id: string; fullName: string; }) => ({
    value: item?._id,
    label: item?.fullName,
  }));

  const [ assignFacultyWithCourse, { isLoading:assignLoading }] = useAssignFacultyWithCourseMutation()

console.log(props);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };




  //handleChancge status
  const onSubmit: SubmitHandler<FieldValues> = async(data) => {
    // const toastId = LoadingToast('Processing...')
  
    // try{
    //   await assignFacultyWithCourse({
    //     courseId,
    //     data
    //   }).unwrap();

    //   handleCancel();//close modal
    //   SuccessToast('Success', toastId);
    // }
    // // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // catch(err){
    //   ErrorToast("Something Went Wrong", toastId)
    // }
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
        <PHForm onSubmit={onSubmit}>
          <PHMultiSelect
            name="faculties"
            label="Faculties"
            options={facultiesOptions}
          />
          <div
            style={{ display: "flex", justifyContent: "end", rowGap: "10px" }}
          >
            <Button key="back" onClick={handleCancel}>
              Cancel
            </Button>
            ,
            <Button
              key="submit"
              type="primary"
              loading={isLoading}
              htmlType="submit"
              disabled={assignLoading}
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
