import { PRIORITY } from "@/data/contants";
import { FormControl, FormLabel, Select } from "@chakra-ui/react";
import { useRequestFormContext } from "../Context/useRequestFormContext";

const priority = Object.values(PRIORITY);

const SelectPriority = () => {
  const { form, handleChange } = useRequestFormContext();

  return (
    <FormControl mt="16px">
      <FormLabel fontSize="12px" fontWeight="400" color="#1C1C1C">
        Приоритет
      </FormLabel>
      <Select
        name="priority"
        value={form.priority}
        onChange={handleChange}
        mt="8px"
        color="#000"
        borderRadius="8px"
        borderColor="#B0B0B0"
        placeholder="Выберите приоритет"
        _placeholder={{ color: "#B0B0B0" }}
        _focusVisible={{ borderColor: "#9ca3af", boxShadow: "none" }}
      >
        {priority.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectPriority;
