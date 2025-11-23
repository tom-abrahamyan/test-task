import type { ReactNode } from "react";
import { Box, IconButton } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

const scaleIn = keyframes`
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
`;

export const Modal = ({ open, onClose, children }: ModalProps) => {
  if (!open) return null;

  return (
    <Box
      position="fixed"
      inset={0}
      bg="rgba(0,0,0,0.5)"
      backdropFilter="blur(4px)"
      display="flex"
      alignItems="center"
      justifyContent="center"
      zIndex={50}
      onClick={onClose}
    >
      <Box
        bg="white"
        borderRadius="xl"
        w="90%"
        maxW={{ base: "1007px", sm: "90%" }}
        h="90vh"
        maxH={{ base: "741px", sm: "85vh" }}
        p={6}
        boxShadow="0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)"
        position="relative"
        overflowY="auto"
        animation={`${scaleIn} 0.2s ease-out`}
        onClick={(e) => e.stopPropagation()}
      >
        <IconButton
          aria-label="Закрыть"
          icon={<Box as="span">✕</Box>}
          position="absolute"
          top={4}
          right={4}
          variant="ghost"
          color="gray.500"
          fontSize="xl"
          _hover={{ color: "black" }}
          onClick={onClose}
        />

        {children}
      </Box>
    </Box>
  );
};
