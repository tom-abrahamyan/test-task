import { PharmacyArray } from "@/data/contants";
import { FormControl, FormLabel, Select } from "@chakra-ui/react";
import { useRequestFormContext } from "../Context/useRequestFormContext";

const SelectPharmacy = () => {
  const { form, handleChange } = useRequestFormContext();

  return (
    <FormControl>
      <FormLabel fontSize="12px" fontWeight="400" color="#1C1C1C">
        Аптека
      </FormLabel>
      <Select
        name="pharmacyCode"
        value={form.pharmacyCode}
        onChange={handleChange}
        mt="8px"
        color="#000"
        borderRadius="8px"
        borderColor="#B0B0B0"
        placeholder="Выберите аптеку от которой исходит заявка"
        _placeholder={{ color: "#B0B0B0" }}
        _focusVisible={{ borderColor: "#B0B0B0", boxShadow: "none" }}
      >
        {PharmacyArray.map((pharmacy) => (
          <option key={pharmacy.code} value={pharmacy.code}>
            {pharmacy.code} {pharmacy.address}
          </option>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectPharmacy;
