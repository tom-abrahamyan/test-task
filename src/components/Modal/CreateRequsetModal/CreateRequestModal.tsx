import { useRequestForm } from "./useRequestForm";
import { Modal } from "./Modal";
import { RequestForm } from "./RequsetForm";
import type { Action } from "@/data/types";

interface CreateRequestModalProps {
  open: boolean;
  setModalOpen: (value: boolean) => void;
  dispatch: React.Dispatch<Action>;
}



export const CreateRequestModal = ({ open, setModalOpen, dispatch }:CreateRequestModalProps) => {
  const { form, handleChange, addFiles, submit } = useRequestForm();

  const handleSubmit = () => {
    const ticket = submit();
    if (!ticket) return alert("Заполните аптеку!");

    dispatch({ type: "addRequest", payload: ticket });
    setModalOpen(false);
  };

  return (
    <Modal open={open} onClose={() => setModalOpen(false)}>
      <h2 className="text-2xl font-semibold mb-6">Создание заявки</h2>

      <RequestForm
        form={form}
        handleChange={handleChange}
        addFiles={addFiles}
      />

      <div className="mt-6 flex gap-4">
        <button className="px-5 py-2 bg-blue-600 text-white rounded-lg" onClick={handleSubmit}>
          Создать заявку
        </button>
        <button className="px-5 py-2 bg-gray-200 rounded-lg" onClick={() => setModalOpen(false)}>
          Отмена
        </button>
      </div>
    </Modal>
  );
};
