import type { ReactNode } from "react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const Modal = ({ open, onClose, children }: ModalProps) => {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="
          bg-white rounded-xl 
          w-[90%] max-w-[1007px]      
          h-[90vh] max-h-[741px]        
          p-6 shadow-xl relative animate-scaleIn
          overflow-y-auto             

          sm:max-w-[90%]             
          sm:max-h-[85vh]           
        "
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute right-4 top-4 text-xl text-gray-500 hover:text-black"
          onClick={onClose}
        >
          ✕
        </button>

        {children}
      </div>
    </div>
  );
};
