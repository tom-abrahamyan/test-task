import type { Tab } from "@/data/contants";
import type { Dispatch, SetStateAction } from "react";
import { TAB_LABELS } from "@/data/contants";
import { tabs } from "@/data/contants";
import { Button, Flex, Text } from "@chakra-ui/react";
import { FiFilter } from "react-icons/fi";

interface StatusTabsProps {
  active: Tab;
  setActive: Dispatch<SetStateAction<Tab>>;
}

export default function StatusTabs({ active, setActive }: StatusTabsProps) {
  return (
    <Flex px={{ base: 4, md: 6 }} mt={4} borderBottom="1px solid #DBE5F2" pb="21px">
      <Flex
        align="start"
        gap={2}
        flexWrap={{ base: "nowrap", md: "wrap" }}
        borderRight={{ base: "none", md: "3px solid #D9E1EC" }}
        pr={{ base: "0", md: "27px" }}
        flexDirection={{ base: "row-reverse", md: "row" }}
        overflowX="auto"
        whiteSpace="nowrap"
        minWidth={0}
        css={{
          WebkitOverflowScrolling: "touch",
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {tabs.map((t) => {
          const isActive = active === t;
          return (
            <Button
              flexShrink={0}
              key={t}
              onClick={() => setActive(t)}
              px={3}
              py={1.5}
              w={{ base: "", md: "" }}
              h={{ base: "32px", md: "40px" }}
              fontWeight="400"
              fontSize={{ md: "12px", lg: "16px" }}
              borderWidth="1px"
              borderRadius="base"
              bg={isActive ? "black" : "#F1F1F1"}
              color={isActive ? "white" : "#1C1C1C"}
              borderColor={isActive ? "black" : "#e5e7eb"}
              _hover={isActive ? { bg: "black" } : { bg: "#f3f4f6" }}
            >
              {TAB_LABELS[t]}
            </Button>
          );
        })}
        <Button
         flexShrink={0}
          w="36px"
          h="32px"
          fontSize="16px"
          fontWeight="400"
          color="#1C1C1C"
          bg="#F1F1F1"
          display={{ base: "block", md: "none" }}
        >
        <FiFilter size={16} />
        </Button>
      </Flex>
      <Button
        w={{ base: "36px", md: "223px" }}
        h={{ base: "32px", md: "40px" }}
        fontSize={{ md: "10px", lg: "16px" }}
        fontWeight="400"
        color="#1C1C1C"
        bg="#F1F1F1"
        ml="24px"
        display={{ base: "none", md: "flex" }}
      >
        <Text>
          <FiFilter size={16} />
        </Text>

        <Text display={{ base: "none", md: "block" }} ml="10px">
          Показать только мои
        </Text>
      </Button>
    </Flex>
  );
}
