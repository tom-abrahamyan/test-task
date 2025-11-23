import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import StatusBadge from "../StatusBadge/StatusBadge";
import { CheckIcon } from "../UI/icons";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { CgShapeRhombus } from "react-icons/cg";
import type { TicketData } from "@/data/types";
import { isToday } from "@/utils/utils";

const priorityIcons = {
  "Критич.": <MdKeyboardDoubleArrowUp color="#B93C3C" size={14} />,
  Высокий: <IoIosArrowUp color="#B93C3C" size={14} />,
  Средний: <CgShapeRhombus color="#CC892A" size={14} />,
  Низкий: <IoIosArrowDown color="#2D60ED" size={14} />,
};

interface RequestsTableProps {
  data: TicketData[];
}

function RequestCard({ row }: { row: TicketData }) {
  return (
    <Box
      bg="#fff"
      color="#1C1C1C"
      borderRadius="5px"
      border="1px solid #DDDDDD"
      p={3}
      display="flex"
      justifyContent="space-between"
      gap={2}
    >
      <Flex flexDirection="column">
        <Text fontWeight="400" fontSize="14px">
          {row.topic}
        </Text>

        <Flex mt="10px" align="center" fontSize="xs" gap={2}>
          <Box
            bg="#F1F1F1"
            color="#000"
            px={2}
            py={0.5}
            borderRadius="4px"
            fontWeight="600"
            fontSize="12px"
          >
            {row.number}
          </Box>
          <Text fontSize="12px" opacity={0.8}>
            {row.pharmacy.address}
          </Text>
        </Flex>
      </Flex>

      <Flex flexDirection="column" alignItems="flex-end">
        <Flex align="center" fontSize="14px" gap={2}>
          {priorityIcons[row.priority]}
          <StatusBadge status={row.status} />
        </Flex>

        {row.solution && (
          <Flex mt="10px" align="center" fontSize="xs" gap={2} color="#22c55e">
            <CheckIcon />
            <Text>{row.solution}</Text>
          </Flex>
        )}
      </Flex>
    </Box>
  );
}

export default function MobileRequestsTable({ data }: RequestsTableProps) {
  const todayData = data.filter((row) => isToday(row.created));
  const otherDaysData = data.filter((row) => !isToday(row.created));

  return (
    <Stack spacing={4}>
      {todayData.length > 0 && (
        <Stack>
          <Text fontSize="14px" letterSpacing="1px" fontWeight="600">
            СЕГОДНЯ
          </Text>

          {todayData.map((row) => (
            <RequestCard key={row.id} row={row} />
          ))}
        </Stack>
      )}

      {otherDaysData.length > 0 && (
        <Stack>
          <Text fontSize="14px" letterSpacing="1px" fontWeight="600">
            ДРУГИЕ ДНИ
          </Text>

          {otherDaysData.map((row) => (
            <RequestCard key={row.id} row={row} />
          ))}
        </Stack>
      )}
    </Stack>
  );
}
