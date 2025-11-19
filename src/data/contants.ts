import type { StatusKey } from "./types";
import type { Pharmacy } from "./types";
import type { category } from "./types";

export const PRIORITY = {
  HIGH: "Высокий",
  MEDIUM: "Средний",
  LOW: "Низкий",
  CRITICAL: "Критич.",
} as const;

export type Priority = (typeof PRIORITY)[keyof typeof PRIORITY];

export const tabs = [
  "New",
  "Rejected",
  "Review",
  "In progress",
  "Waiting parts",
  "Ready",
  "Closed",
  "All",
] as const;

export type Tab = (typeof tabs)[number];

export const TAB_LABELS: Record<Tab, string> = {
  New: "Новые",
  Rejected: "Отклонены",
  Review: "На рассмотрении",
  "In progress": "В работе",
  "Waiting parts": "Ожидают запчасти",
  Ready: "Готовы",
  Closed: "Закрыты",
  All: "Все статусы",
};

export const tabStatusMap: Record<Exclude<Tab, "All">, StatusKey[]> = {
  New: ["new"],
  Rejected: ["rejected"],
  Review: ["review"],
  "In progress": ["inProgress"],
  "Waiting parts": ["waitingParts"],
  Ready: ["ready"],
  Closed: ["closed"],
};

export const PharmacyArray: Pharmacy[] = [
  {
    code: "065",
    address: "Геленджик Островского 7",
  },
  {
    code: "150",
    address: "Кореновск Красная 108",
  },
  {
    code: "045",
    address: "Тимашевск Интернац 3Б",
  },
  {
    code: "190",
    address: "Геленджик Душистая 24",
  },
  {
    code: "267",
    address: "Анапа Парковая 67к2",
  },
  {
    code: "164",
    address: "РнД Сельмаш 92",
  },
];

export const categories: category[] = [
  {
    name: "Кассы",
  },
  {
    name: "Холодильники",
  },
  {
    name: "Кондиционеры",
  },
  {
    name: "Изм. оборуд.",
  },
  {
    name: "Помещения",
  },
  {
    name: "ИТ",
  },
  {
    name: "Сантехника",
  },
];
