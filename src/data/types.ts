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

export interface FileUploadProps {
  files: File[];
  addFiles: (files: File[]) => void;
}

export interface SelectPharmacyProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export interface SelectCategoryProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export interface SelectPriorityProps {
  value: Priority;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export interface TextInputsProps {
  topic: string;
  description: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}
