import { PRIORITY } from "@/data/contants";
import type { SelectPriorityProps } from "@/data/types";

const priority = Object.values(PRIORITY);

const SelectPriority = ({ value, onChange }:SelectPriorityProps) => {
  return (
    <div>
      <label className="font-medium text-gray-700">Приоритет</label>
      <select
        name="priority"
        value={value}
        onChange={onChange}
        className="w-full mt-1 p-3 border rounded-lg bg-gray-50"
      >
        <option value="">Выберите приоритет</option>

        {priority.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectPriority;
