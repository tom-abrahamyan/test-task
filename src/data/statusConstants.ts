import type { StatusKey } from "@/data/types";

export const STATUS_LABELS: Record<StatusKey, string> = {
  new: "Новая",
  rejected: "Отклонено",
  review: "На рассмотрении",
  inProgress: "В работе",
  waitingParts: "Ожидают запчасти",
  ready: "Готово",
  closed: "Закрыто",
};


