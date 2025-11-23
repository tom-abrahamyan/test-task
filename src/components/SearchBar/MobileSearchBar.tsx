import { SearchIcon } from "@chakra-ui/icons";
import { Box, Button, Text } from "@chakra-ui/react";
import { useState } from "react";
import SearchInput from "./SearchInput";

interface Props {
  text: string;
  setText: (val: string) => void;
  onOpenModal: () => void;
}

const MobileSearchBar = ({ text, setText, onOpenModal }: Props) => {
  const [openSearch, setOpenSearch] = useState(false);
  return (
    <Box>
      {openSearch && <SearchInput text={text} setText={setText} />}
      <Box
        position="fixed"
        bottom="15px"
        right="0"
        display={{ base: "flex", md: "none" }}
        flexDirection="column"
        alignItems="end"
        mt={4}
        px={4}
      >
        <Button
          w="100px"
          fontWeight="400"
          mb={2}
          onClick={()=> setOpenSearch(!openSearch)}
        >
          <SearchIcon color="#1C1C1C" />{" "}
          <Text ml="5px" fontSize="16px">
            Поиск
          </Text>
        </Button>

        <Button
          onClick={onOpenModal}
          w="190px"
          px={4}
          py={2}
          fontWeight="400"
          fontSize="16px"
          borderRadius="base"
          bg="#1C1C1C"
          color="white"
          _hover={{ bg: "gray.800" }}
        >
          + Создать новую заявку
        </Button>
      </Box>
    </Box>
  );
};

export default MobileSearchBar;
