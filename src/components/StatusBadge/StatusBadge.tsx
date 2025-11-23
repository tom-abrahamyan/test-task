import type { StatusKey } from "@/data/types";
import { STATUS_LABELS } from "@/data/statusConstants";
import { Box } from "@chakra-ui/react";

interface StatusBadgeProps {
  status: StatusKey;
}

const STATUS_STYLES: Record<
  string,
  { bg: string; color: string }
> = {
  Новая: { bg: "#F0CDFA", color: "#1C1C1C" },
  "В работе": { bg: "#FFEBB3", color: "#1C1C1C" },
  Готово: { bg: "#A2E3A4", color: "#1C1C1C" },
  Закрыто: { bg: "#F1F1F1", color: "#1C1C1C" },
};

export default function StatusBadge({ status }: StatusBadgeProps) {
  const label = STATUS_LABELS[status];
  const style = STATUS_STYLES[label] || {
    bg: "#F1F1F1",
    color: "#1C1C1C",

  };

  return (
    <Box
      
      minHeight="24px"
      as="span"
      px="6px"
      py="2px"
      borderRadius="4px"
      fontSize="14px"
      fontWeight="500"
      bg={style.bg}
      color={style.color}
      textAlign="center"
    >
      {label}
    </Box>
  );
}
