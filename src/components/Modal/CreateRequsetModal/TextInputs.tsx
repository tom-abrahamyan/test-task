import { VStack, FormControl, FormLabel, Textarea } from "@chakra-ui/react";
import SelectPriority from "./SelectPriority";
import { useRequestFormContext } from "../Context/useRequestFormContext";

const TextInputs = () => {
  const { form, handleChange } = useRequestFormContext();

  return (
    <VStack spacing={4} align="stretch">
      {/* Тема заявки */}
      <FormControl>
        <FormLabel fontSize="12px" fontWeight="400" color="#1C1C1C">
          Тема заявки
        </FormLabel>
        <Textarea
          name="topic"
          value={form.topic}
          minHeight="70px"
          onChange={handleChange}
          color="#000"
          borderRadius="8px"
          borderColor="#B0B0B0"
          placeholder="Дайте заявке краткое название: например, сломался холодильник или не работает кондиционер"
          _placeholder={{ color: "#B0B0B0" }}
          _focusVisible={{ borderColor: "#9ca3af", boxShadow: "none" }}
        />
      </FormControl>

      {/* Select Priority */}
      <SelectPriority />

      {/* Описание проблемы */}
      <FormControl>
        <FormLabel fontSize="12px" fontWeight="400" color="#1C1C1C">
          Описание проблемы
        </FormLabel>
        <Textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          minHeight="164px"
          color="#000"
          borderRadius="8px"
          borderColor="#B0B0B0"
          placeholder={`Кратко опишите проблему:\n\n •  Что случилось?\n •  Дата и время произошедшего?\n •  Сколько длится проблема?\n •  Насколько она влияет на вашу работу?`}
          _placeholder={{ color: "#B0B0B0", whiteSpace: "pre-wrap" }}
          resize="none"
          _focusVisible={{ borderColor: "#9ca3af", boxShadow: "none" }}
          whiteSpace="pre-wrap"
          wordBreak="break-word"
        />
      </FormControl>
    </VStack>
  );
};

export default TextInputs;
