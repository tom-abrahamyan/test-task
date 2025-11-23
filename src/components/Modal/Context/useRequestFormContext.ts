import { useContext } from "react";
import { RequestFormContext } from "./RequestFormContext";
import type { RequestFormContextType } from "@/data/types";

export const useRequestFormContext = ():RequestFormContextType => {
  const ctx = useContext(RequestFormContext);
  if (!ctx) {
    throw new Error("useRequestFormContext must be used inside RequestFormProvider");
  }
  return ctx;
};
