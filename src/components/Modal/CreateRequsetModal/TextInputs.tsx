import type { TextInputsProps } from "@/data/types";

const TextInputs = ({ topic, description, onChange }:TextInputsProps) => {
  return (
    <>
      <div>
        <label className="font-medium text-gray-700">Тема заявки</label>
        <input
          name="topic"
          value={topic}
          onChange={onChange}
          className="w-full mt-1 p-3 border rounded-lg bg-gray-50"
          placeholder="Краткое название"
        />
      </div>

      <div>
        <label className="font-medium text-gray-700">Описание проблемы</label>
        <textarea
          name="description"
          value={description}
          onChange={onChange}
          className="w-full mt-1 p-3 border rounded-lg bg-gray-50 h-28 resize-none"
          placeholder="Опишите проблему..."
        />
      </div>
    </>
  );
};

export default TextInputs;
