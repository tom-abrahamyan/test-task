import { useCallback } from "react";
import { useRequestFormContext } from "../Context/useRequestFormContext";
import { RequestForm } from "./RequsetForm";
import { Button, Flex, Heading } from "@chakra-ui/react";
import type { CreateRequestFormBodyProps } from "@/data/types";

export const CreateRequestFormBody = ({ dispatch, onClose }: CreateRequestFormBodyProps) => {
  const { submit } = useRequestFormContext();

  const handleSubmit = useCallback(() => {
    const ticket = submit();
    if (!ticket) return alert("Заполните аптеку!");

    dispatch({ type: "addRequest", payload: ticket });
    onClose();
  }, [submit, dispatch, onClose]);

  const buttonBase = {
    px: 5,
    py: 2,
    borderRadius: "5px",
    fontSize: "16px",
    fontWeight: "400",
  };

  return (
    <>
      <Heading fontSize="24px" fontWeight="500" mb="32px" borderBottom={{base: "1px solid #DDDDDD", md:"none"}} pb={{base: "24px", md:"none"}}>
        Создание заявки
      </Heading>

      <RequestForm />

      <Flex mt={6} gap={4}>
        <Button
          w={{base:"100%", md:"156px"}}
          {...buttonBase}
          bg="#1C1C1C"
          color="white"
          _hover={{ bg: "#252525ff" }}
          onClick={handleSubmit}
        >
          Создать заявку
        </Button>

        <Button
          display={{base: "none", md:"block"}}
          {...buttonBase}
          color="#1C1C1C"
          border="1px solid #1C1C1C"
          _hover={{ bg: "#d1d5db" }}
          onClick={onClose}
        >
          Отмена
        </Button>
      </Flex>
    </>
  );
};
