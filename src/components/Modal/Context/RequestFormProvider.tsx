import type { RequestFormProviderProps } from "@/data/types";
import { RequestFormContext } from "./RequestFormContext";
import { useRequestForm } from "./useRequestForm";

export const RequestFormProvider = ({ children }:RequestFormProviderProps) => {
  const formState = useRequestForm();

  return (
    <RequestFormContext.Provider value={formState}>
      {children}
    </RequestFormContext.Provider>
  );
};
