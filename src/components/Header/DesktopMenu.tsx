import { Box, Flex, Text } from "@chakra-ui/react";

export default function DesktopMenu() {
  return (
    <Flex
      ml="130px"
      as="nav"
      display={{ base: "none", md: "flex" }}
      fontSize="16px"
      fontWeight="400"
      lineHeight="29px"
      align="center"
    >
      <Text color="#1C1C1C" cursor="pointer" _hover={{ color: "black" }}>
        Заявки
      </Text>
      <Text
        ml="14px"
        mr="35px"
        color="#B0B0B0"
        cursor="pointer"
        _hover={{ color: "black" }}
      >
        Отчеты
      </Text>

      <Box position="relative" cursor="pointer" role="group">
        <Text
          color="#B0B0B0"
          _groupHover={{ color: "black" }}
          transition="color 0.2s"
        >
          Справочники ▾
        </Text>
        <Box
          position="absolute"
          left={0}
          top="1.5rem"
          display="none"
          bg="white"
          borderWidth="1px"
          borderColor="#e5e7eb"
          boxShadow="0 1px 3px rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)"
          borderRadius="md"
          p={2}
          fontSize="sm"
          _groupHover={{ display: "block" }}
        >
          <Text px={2} py={1} borderRadius="md" _hover={{ bg: "#f3f4f6" }}>
            Категории
          </Text>
          <Text px={2} py={1} borderRadius="md" _hover={{ bg: "#f3f4f6" }}>
            Техники
          </Text>
        </Box>
      </Box>
    </Flex>
  );
}
