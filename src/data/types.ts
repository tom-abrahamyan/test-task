import type { ReactNode } from "react";
import type { Priority } from "./contants";

export interface category {
  name: string;
}

export interface Pharmacy {
  code: string;
  address: string;
}

export type Technician = string | null;
export type Solution = string | null;
export type StatusKey =
  | "new"
  | "rejected"
  | "review"
  | "inProgress"
  | "waitingParts"
  | "ready"
  | "closed";

export interface TicketData {
  id: number;
  number: string;
  pharmacy: Pharmacy;
  created: Date;
  priority: Priority;
  topic: string;
  category: string;
  technician: Technician;
  reaction: string;
  solution: Solution;
  status: StatusKey;
}

export type Action =
  | { type: "addRequest"; payload: TicketData }
  | { type: "deleteRequest"; payload: string }
  | { type: "updateRequest"; payload: TicketData };

export interface TicketFormData {
  pharmacyCode: string;
  category: string;
  topic: string;
  priority: Priority; 
  description: string;
  files: File[];
}

export type FormChangeEvent =
  React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>;

export interface RequestFormProps {
  form: TicketFormData;
  handleChange: (e: FormChangeEvent) => void;
  addFiles: (files: File[]) => void;
}



export interface RequestFormContextType {
  form: {
    pharmacyCode: string;
    category: string;
    topic: string;
    priority: Priority;
    description: string;
    files: File[];
  };
  handleChange: (e: FormChangeEvent) => void;
  addFiles: (files: File[]) => void;
  handleRemove: (index: number) => void;
  submit: () => TicketData | null;
}

export interface RequestFormProviderProps {
  children: ReactNode;
}

export interface CreateRequestModalProps {
  open: boolean;
  setModalOpen: (value: boolean) => void;
  dispatch: React.Dispatch<Action>;
}

export interface CreateRequestFormBodyProps {
  dispatch: React.Dispatch<Action>;
  onClose: () => void;
}

