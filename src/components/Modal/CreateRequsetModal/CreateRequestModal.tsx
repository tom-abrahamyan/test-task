import { Modal } from "./Modal";
import { RequestFormProvider } from "../Context/RequestFormProvider";
import { CreateRequestFormBody } from "./CreateRequestFormBody";
import type { CreateRequestModalProps } from "@/data/types";

export const CreateRequestModal = ({ open, setModalOpen, dispatch }: CreateRequestModalProps) => {
  const handleClose = () => setModalOpen(false);

  return (
    <Modal open={open} onClose={handleClose}>
      <RequestFormProvider>
        <CreateRequestFormBody dispatch={dispatch} onClose={handleClose} />
      </RequestFormProvider>
    </Modal>
  );
};
