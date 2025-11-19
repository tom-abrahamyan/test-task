import { categories } from "@/data/contants";
import type { SelectCategoryProps } from "@/data/types";

const SelectCategory = ({ value, onChange }:SelectCategoryProps) => {
  return (
    <>
      <div>
        <label className="font-medium text-gray-700">Категория заявки</label>
        <select
          name="category"
          value={value}
          onChange={onChange}
          className="w-full mt-1 p-3 border rounded-lg bg-gray-50"
        >
          <option value="">Выберите категорию</option>

          {categories.map((item) => (
            <option key={item.name} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default SelectCategory;
