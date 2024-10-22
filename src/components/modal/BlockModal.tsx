import { Button, Modal } from "antd";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hook/hook";
import { SetBlockModalOpen } from "../../redux/features/modal/modalSlice";

const BlockModal = () => {
    const {blockModalOpen} = useAppSelector((state)=>state.modal);
    const dispatch = useAppDispatch();
    const [loading, setLoading] = useState(false);

   
  const handleCancel = () => {
    dispatch(SetBlockModalOpen(false));
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
            loading={loading}
            // onClick={handleOk}
          >
            Confirm
          </Button>
        ]}
      >
      </Modal>
    </>
  );
};

export default BlockModal;
