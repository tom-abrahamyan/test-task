import type { RequestFormProps } from "@/data/types";
import FileUpload from "./FileUpload";
import SelectCategory from "./SelectCategory";
import SelectPharmacy from "./SelectPharmacy";
import SelectPriority from "./SelectPriority";
import TextInputs from "./TextInputs";

export const RequestForm = ({ form, handleChange, addFiles }:RequestFormProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="flex flex-col gap-4">
        <SelectPharmacy value={form.pharmacyCode} onChange={handleChange} />
        <SelectCategory value={form.category} onChange={handleChange} />
      </div>

      <div className="flex flex-col gap-4">
        <SelectPriority value={form.priority} onChange={handleChange} />
        <TextInputs
          topic={form.topic}
          description={form.description}
          onChange={handleChange}
        />

        <FileUpload files={form.files} addFiles={addFiles} />
      </div>
    </div>
  );
};
