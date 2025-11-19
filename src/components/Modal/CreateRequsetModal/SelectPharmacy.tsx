import { PharmacyArray } from "@/data/contants";
import type { SelectPharmacyProps } from "@/data/types";

const SelectPharmacy = ({ value, onChange }:SelectPharmacyProps) => {
  return (
    <div>
      <label className="font-medium text-gray-700">Аптека</label>
      <select
        name="pharmacyCode"
        value={value}
        onChange={onChange}
        className="w-full mt-1 p-3 border rounded-lg bg-gray-50"
      >
        <option value="">Выберите аптеку</option>

        {PharmacyArray.map((pharmacy) => (
          <option key={pharmacy.code} value={pharmacy.code}>
            {pharmacy.code} {pharmacy.address}
          </option>
        ))}
      </select>
    </div>
  );
};
export default SelectPharmacy;
