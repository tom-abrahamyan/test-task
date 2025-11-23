import { TheadData } from "@/data/mockData";
import StatusBadge from "../StatusBadge/StatusBadge";
import type { TicketData } from "@/data/types";
import {
  Box,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Text,
} from "@chakra-ui/react";

import { MdOutlineFilterAlt } from "react-icons/md";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { CgShapeRhombus } from "react-icons/cg";
import { CheckIcon } from "../UI/icons";
// import { CheckIcon, InfoIcon, WatchIcon } from "../UI/icons";
// Я не понял, как этим пользоваться.

const priorityIcons = {
  Высокий: <IoIosArrowUp color="#B93C3C" />,
  Средний: <CgShapeRhombus color="#CC892A" />,
  Низкий: <IoIosArrowDown color="#2D60ED" />,
  "Критич.": <MdKeyboardDoubleArrowUp color="#B93C3C" />,
};

interface RequestsTableProps {
  data: TicketData[];
}

export default function RequestsTable({ data }: RequestsTableProps) {
  return (
    <Box px={6} mt={4}>
      <TableContainer borderTopLeftRadius="5px" borderTopRightRadius="5px">
        <Table fontSize="14px" width="100%">
          <Thead borderBottomWidth="1px" borderColor="#DBE5F2" bg="#f1f1f1">
            <Tr p="0">
              {TheadData.map((item) => {
                return (
                  <Th
                    key={item}
                    textAlign="left"
                    w="100%"
                    minH="40px"
                    px="11px"
                  >
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                      width="100%"
                      textTransform="none"
                    >
                      <Text
                        color="#1C1C1C"
                        fontSize="14px"
                        fontWeight="400"
                        mr="13px"
                      >
                        {item}
                      </Text>
                      <MdOutlineFilterAlt size="18px" />
                    </Box>
                  </Th>
                );
              })}
            </Tr>
          </Thead>
          <Tbody>
            {data.map((row) => (
              <Tr
                key={row.id}
                borderBottomWidth="1px"
                borderColor="#e5e7eb"
                _hover={{ bg: "#f9fafb" }}
                w="100%"
                minH="40px"
                px="11px"
              >
                <Td px="11px" py={3}>
                  {row.number}
                </Td>
                <Td px="14px">
                  <Text
                    p="2px"
                    borderRadius="4px"
                    bg="#F1F1F1"
                    display="inline-block"
                    fontWeight="600"
                  >
                    {row.pharmacy.code}
                  </Text>{" "}
                  {row.pharmacy.address}
                </Td>
                <Td px="11px">
                  <Text display="inline-block">
                    {row.created.toLocaleString().slice(0, 9)}
                  </Text>
                  <Text ml="6px" display="inline-block" color="#afafafff">
                    {row.created.toLocaleString().slice(10)}
                  </Text>
                </Td>
                <Td px="12px">
                  <Text display="flex" alignItems="center" gap="12px">
                    {priorityIcons[row.priority]} {row.priority}
                  </Text>
                </Td>
                <Td px="11px">{row.topic}</Td>
                <Td px="11px">{row.category}</Td>
                <Td px="11px">{row.technician}</Td>
                <Td px="11px" color="green.600">
                  {row.reaction && (
                    <Text display="flex" alignItems="center" gap="2px">
                      <CheckIcon />
                      {row.reaction}
                    </Text>
                  )}
                </Td>
                <Td px="11px" color="green.600">
                  <Text>{row.solution}</Text>
                </Td>
                <Td px="11px">
                  <StatusBadge status={row.status} />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}
