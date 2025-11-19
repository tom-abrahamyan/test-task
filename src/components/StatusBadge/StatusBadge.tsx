import type { StatusKey } from "@/data/types";
import { STATUS_LABELS } from "@/data/statusConstants";

interface StatusBadgeProps {
  status: StatusKey;
}

const STATUS_STYLES: Record<string, string> = {
  "Новая": "bg-purple-100 text-purple-700",
  "В работе": "bg-yellow-100 text-yellow-700",
  "Готово": "bg-green-100 text-green-700",
  "Закрыто": "bg-gray-100 text-gray-700",
};

export default function StatusBadge({ status }: StatusBadgeProps) {
  const label = STATUS_LABELS[status];
  const style = STATUS_STYLES[label] || "";

  return (
    <span className={`px-3 py-1 rounded text-xs font-medium ${style}`}>
      {label}
    </span>
  );
}
