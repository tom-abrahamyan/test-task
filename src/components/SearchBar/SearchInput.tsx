import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

interface Props {
  text: string;
  setText: (val: string) => void;
}

const SearchInput = ({text,setText}:Props) => {
  return (
    <InputGroup w="100%" h="40px" mr="13px" mt={{base:"16px", md:"0"}}>
      <InputLeftElement pointerEvents="none">
        <SearchIcon color="gray.400" />
      </InputLeftElement>

      <Input
        placeholder="Поиск по номеру или теме заявки"
        borderWidth="1px"
        borderColor="#D9E1EC"
        borderRadius="4px"
        bg="white"
        px={4}
        py={2}
        fontSize="sm"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </InputGroup>
  );
};

export default SearchInput;
