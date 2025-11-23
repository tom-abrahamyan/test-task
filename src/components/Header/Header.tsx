import { Box, Flex } from "@chakra-ui/react";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";
import UserMenu from "./UserMenu";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileLogoutOpen, setMobileLogoutOpen] = useState(false);

  return (
    <Box
      as="header"
      w="100%"
      h="86px"
      borderBottomWidth="1px"
      borderColor="#D9E1EC"
      bg="white"
      px={{ base: 4, md: 6 }}
      py={3}
      position="relative"
      zIndex={50}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    
    >
      <Flex w="100%" justify="space-between" align="center">
        {/* Mobile Menu */}
        <MobileMenu
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />

        {/* Desktop Menu */}
        <DesktopMenu />

        {/* User Menu */}
        <UserMenu
          mobileLogoutOpen={mobileLogoutOpen}
          setMobileLogoutOpen={setMobileLogoutOpen}
        />
      </Flex>
    </Box>
  );
}
