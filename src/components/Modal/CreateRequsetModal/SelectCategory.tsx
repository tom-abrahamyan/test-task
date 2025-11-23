import { categories } from "@/data/contants";
import {
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Select,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { useRequestFormContext } from "../Context/useRequestFormContext";
import Notices from "./Notices";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { Modal } from "./Modal";

const SelectCategory = () => {
  const { form, handleChange } = useRequestFormContext();
  const [checked, setChecked] = useState(false);
  const isDesktop = useBreakpointValue({ base: false, md: true });
  const [showNotices, setShowNotices] = useState(false);

  return (
    <FormControl mt={{ base: "10px", md: "46px" }}>
      <FormLabel fontSize="12px" fontWeight="400" color="#1C1C1C">
        Категория заявки
      </FormLabel>
      <Select
        name="category"
        value={form.category}
        onChange={handleChange}
        mt="8px"
        color="#000"
        borderRadius="8px"
        borderColor="#B0B0B0"
        placeholder="Выберите категорию"
        _placeholder={{ color: "#B0B0B0" }}
        _focusVisible={{ borderColor: "#B0B0B0", boxShadow: "none" }}
      >
        {categories.map((item) => (
          <option key={item.name} value={item.name}>
            {item.name}
          </option>
        ))}
      </Select>
      <Flex  mt="17.5px" alignItems="center" justifyContent="space-between">
        <Checkbox
         
          fontSize="14px"
          color="#1C1C1C"
          isChecked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        >
          Гарантийный случай?
        </Checkbox>

        {!isDesktop && form.category && (
          <>
            <Flex  alignItems="center" gap="2px" color="#440AF1" cursor="pointer" onClick={() => setShowNotices(true)}>
              <AiOutlineQuestionCircle size="25px"/> Проверьте себя
            </Flex>
            <Modal open={showNotices} onClose={() => setShowNotices(false)}>
              <Heading fontSize="20px" fontWeight="600" marginY="24px">
                Проверьте себя
              </Heading>
              <Notices />
            </Modal>
          </>
        )}
      </Flex>
      {isDesktop && form.category && <Notices />}
    </FormControl>
  );
};

export default SelectCategory;
