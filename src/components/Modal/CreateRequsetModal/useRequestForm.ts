import { useState } from "react";
import { PharmacyArray } from "@/data/contants";
import type { Priority } from "@/data/contants";
import type { FormChangeEvent, TicketData } from "@/data/types";

export const useRequestForm = () => {
  const [form, setForm] = useState({
    pharmacyCode: "",
    category: "",
    topic: "",
    priority: "" as Priority,
    description: "",
    files: [] as File[],
  });

  const handleChange = (e: FormChangeEvent) => {
    const target = e.target;
    const value =
      target instanceof HTMLInputElement && target.type === "checkbox"
        ? target.checked
        : target.value;

    setForm((prev) => ({
      ...prev,
      [target.name]: value,
    }));
  };

  const addFiles = (files: File[]) => {
    setForm((prev) => ({
      ...prev,
      files: [...prev.files, ...files],
    }));
  };

  const submit = (): TicketData | null => {
    const pharmacy = PharmacyArray.find((p) => p.code === form.pharmacyCode);
    if (!pharmacy) return null;

    return {
      id: Date.now(),
      number: String(Date.now()),
      pharmacy,
      priority: form.priority,
      created: new Date(),
      topic: form.topic,
      category: form.category,
      technician: null,
      reaction: "",
      solution: "",
      status: "new",
    };
  };

  return { form, handleChange, addFiles, submit };
};
