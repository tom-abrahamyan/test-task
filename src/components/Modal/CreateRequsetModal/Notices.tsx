import { Box, Flex, ListItem, Text, UnorderedList } from "@chakra-ui/react";

const Notices = () => {
  return (
    <Flex
      mt={{base:"0", md:"16px"}}
      fontSize="10px"
      fontWeight="400"
      gap="12px"
      flexDirection={{ base: "column", md: "column", lg: "row" }}
    >
      <Box w={{ md: "220px" }} p="10px" borderRadius="10px" bg="#FFFAD4">
        <Text>⚠️ Заявка нужна, если:</Text>
        <UnorderedList  fontSize="10px" mt="15px">
          <ListItem>
            температура в камере выше допустимой нормы (+2…+8 °C) и не
            восстанавливается;
          </ListItem>
          <ListItem>
            оборудование издаёт необычные шумы (гул, стук, вибрация);
          </ListItem>
          <ListItem>есть ошибка на дисплее или аварийный сигнал;</ListItem>
          <ListItem>дверь не закрывается/сломаны уплотнители;</ListItem>
          <ListItem>
            холодильник не включается или выключается самопроизвольно.
          </ListItem>
        </UnorderedList>
      </Box>
      <Box w={{ md: "220px" }} p="10px" borderRadius="10px" bg="#FFEAEA">
        <Text>❌ Заявку создавать не нужно, если:</Text>
        <UnorderedList  fontSize="10px" mt="15px">
          <ListItem>
            просто загружено много товара, и температура временно повысилась;
          </ListItem>
          <ListItem>
            дверь была оставлена открытой, и холодильник «догоняет» температуру;
          </ListItem>
          <ListItem>
            требуется только разморозка (согласно регламенту её выполняет
            персонал аптеки).
          </ListItem>
        </UnorderedList>
      </Box>
    </Flex>
  );
};

export default Notices;
