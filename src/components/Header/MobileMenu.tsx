import { Box, Text } from "@chakra-ui/react";

const mobileMenuItems = [
  { label: "Отчёты" },
  { label: "Справочники ▾", submenu: ["Категории", "Техники"] },
];

interface MobileMenuProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MobileMenu({
  mobileMenuOpen,
  setMobileMenuOpen,
}: MobileMenuProps) {
  return (
    <Box display={{ base: "block", md: "none" }} position="relative">
      <Text
        fontWeight={600}
        fontSize="20px"
        color="#374151"
        cursor="pointer"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        Заявки ▾
      </Text>

      {mobileMenuOpen && (
        <Box
          position="absolute"
          left={0}
          top="2.5rem"
          bg="white"
          borderWidth="1px"
          borderColor="#e5e7eb"
          boxShadow="0 1px 3px rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)"
          borderRadius="md"
          p={2}
          fontSize="sm"
        >
          {mobileMenuItems.map((item) => (
            <Box key={item.label} mb={item.submenu ? 2 : 0} position="relative">
              <Text
                px={2}
                py={1}
                borderRadius="md"
                _hover={{ bg: "#f3f4f6" }}
                cursor="pointer"
                onClick={
                  item.submenu ? undefined : () => console.log(item.label)
                }
              >
                {item.label}
              </Text>

              {item.submenu && (
                <Box w="200px" mt={1} ml={2}>
                  {item.submenu.map((sub) => (
                    <Text
                      key={sub}
                      px={2}
                      py={1}
                      borderRadius="md"
                      _hover={{ bg: "#f3f4f6" }}
                      cursor="pointer"
                    >
                      {sub}
                    </Text>
                  ))}
                </Box>
              )}
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
}
