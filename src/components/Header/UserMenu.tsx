import { Box, Button, Image } from "@chakra-ui/react";

interface UserMenuProps {
  mobileLogoutOpen: boolean;
  setMobileLogoutOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function UserMenu({
  mobileLogoutOpen,
  setMobileLogoutOpen,
}: UserMenuProps) {
  return (
    <Box display="flex" alignItems="center" gap={4} position="relative">
      {/* User Image */}
      <Box position="relative">
        <Box
          w="36px"
          h="36px"
          borderRadius="full"
          overflow="hidden"
          cursor={{ base: "pointer", md: "default" }}
          onClick={() => setMobileLogoutOpen(!mobileLogoutOpen)}
        >
          <Image
            src="https://st3.depositphotos.com/1158045/13501/i/450/depositphotos_135013744-stock-photo-smiling-nurse-in-the-hospital.jpg"
            alt="User"
            w="100%"
            h="100%"
            objectFit="cover"
          />
        </Box>
        <Box
          position="absolute"
          bottom="-6px"
          right="-6px"
          w="20px"
          h="20px"
          color="white"
          fontSize="13px"
          fontWeight="600"
          bg="red"
          borderRadius="full"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          2
        </Box>

        {/* Mobile Logout Button */}
        {mobileLogoutOpen && (
          <Button
            display={{ base: "flex", md: "none" }}
            position="absolute"
            top="calc(100% + 8px)"
            right="0"
            w="120px"
            variant="outline"
            borderColor="#e5e7eb"
            bg="white"
            color="black"
            fontSize="sm"
            px={3}
            py={1.5}
            alignItems="center"
            gap={2}
            _hover={{ bg: "#f3f4f6" }}
            onClick={() => console.log("Logout clicked")}
          >
            <Box as="svg" w="16px" h="16px" viewBox="0 0 24 24">
              <path
                d="M16 17l5-5-5-5v10zM4 4h8v2H6v12h6v2H4V4z"
                fill="currentColor"
              />
            </Box>{" "}
            Выйти
          </Button>
        )}
      </Box>

      {/* Desktop Logout */}
      <Button
        w="119px"
        h="40px"
        variant="outline"
        borderColor="#e5e7eb"
        color="black"
        fontSize="sm"
        px={3}
        py={1.5}
        display={{ base: "none", md: "flex" }}
        alignItems="center"
        gap={2}
        _hover={{ bg: "#f3f4f6" }}
      >
        <Box as="svg" w="16px" h="16px" viewBox="0 0 24 24">
          <path
            d="M16 17l5-5-5-5v10zM4 4h8v2H6v12h6v2H4V4z"
            fill="currentColor"
          />
        </Box>{" "}
        Выйти
      </Button>
    </Box>
  );
}
