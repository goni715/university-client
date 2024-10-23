import { Button, Modal } from "antd";
import { useAppDispatch, useAppSelector } from "../../redux/hook/hook";
import { SetBlockModalOpen } from "../../redux/features/modal/modalSlice";
import { useChangeStatusMutation } from "../../redux/features/admin/userManagement/userManagementApi";
import { ErrorToast, LoadingToast, SuccessToast } from "../../helper/ValidationHelper";

const AssignFacultyModel = () => {
  const dispatch = useAppDispatch();
  const { blockModalOpen } = useAppSelector((state)=>state.modal);
  const { userId, status } = useAppSelector((state)=>state.user);
  const [ changeStatus, {isLoading} ] = useChangeStatusMutation();

   
  const handleCancel = () => {
    dispatch(SetBlockModalOpen(false));
  };




  //handleChancge status
  const handleChangeStatus = async() => {
    const toastId = LoadingToast('Processing...')
    try{
      await changeStatus({
        id: userId,
        data: {
          status: status === 'in-progress' ? "blocked" : 'in-progress'
        }
      }).unwrap();
      dispatch(SetBlockModalOpen(false));
      SuccessToast('Success', toastId);
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    catch(err){
      ErrorToast("Something Went Wrong", toastId)
    }
  }; 




  return (
    <>
      <Modal
        open={blockModalOpen}
        title="Are you sure"
        closable={false}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={isLoading}
            onClick={handleChangeStatus}
          >
            Confirm
          </Button>
        ]}
      >
      </Modal>
    </>
  );
};

export default AssignFacultyModel;
