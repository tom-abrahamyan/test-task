import FileUpload from "./FileUpload";
import SelectCategory from "./SelectCategory";
import SelectPharmacy from "./SelectPharmacy";
import TextInputs from "./TextInputs";
import { Modal } from "./Modal";
import {
  Button,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { GoPlus } from "react-icons/go";
import { useRequestFormContext } from "../Context/useRequestFormContext";
import { CiFolderOn } from "react-icons/ci";

export const RequestForm = () => {
  const isDesktop = useBreakpointValue({ base: false, md: true });
  const [showFileUpload, setShowFileUpload] = useState(false);
  const { form } = useRequestFormContext();
  return (
    <SimpleGrid
      columns={{ base: 1, md: 2 }}
      gap={6}
      mt={{ base: "24px", md: "32px" }}
    >
      <Stack spacing={4}>
        <SelectPharmacy />
        <SelectCategory />
      </Stack>

      <Stack spacing={4}>
        <TextInputs />
        {isDesktop && <FileUpload />}
        {!isDesktop && (
          <>
            <Button
              mt="175px"
              mb="-15px"
              bg="#F1F1F1"
              alignItems="center"
              gap="2px"
              color="#000"
              fontWeight="400"
              onClick={() => setShowFileUpload(true)}
            >
              {form.files.length > 0 && (
                <Flex alignItems="center" gap="12px" fontSize="16px">
                  <CiFolderOn size="25px" />
                  Прикрепленные файлы
                  <Flex
                    bg="#fff"
                    color="#000"
                    w="20px"
                    h="20px"
                    borderRadius="50%"
                    fontSize="13px"
                    fontWeight="600"
                    alignItems="center"
                    justifyContent="center"
                  >
                    {form.files.length}
                  </Flex>
                </Flex>
              )}
              {form.files.length <= 0 && (
                <Flex alignItems="center">
                  <GoPlus size="25px" /> Прикрепить файлы
                </Flex>
              )}
            </Button>
            <Modal
              open={showFileUpload}
              onClose={() => setShowFileUpload(false)}
            >
              <Heading fontSize="20px" fontWeight="600" marginY="24px">
                Прикрепленные файлы
              </Heading>
              <FileUpload />
            </Modal>
          </>
        )}
      </Stack>
    </SimpleGrid>
  );
};
