import type { TicketData } from "./types";
import {PharmacyArray} from "./contants";
import { PRIORITY } from "./contants";
import { categories } from "./contants";

export const data: TicketData[] = [
  {
    id: 1,
    number: "КС-0002",
    pharmacy: PharmacyArray[0],
    created: new Date(2025, 6, 20, 12, 35, 45),
    priority: PRIORITY.HIGH,
    topic: "Поломка кассы",
    category: categories[0].name,
    technician: null,
    reaction: "02:48",
    solution: null,
    status: "new",
  },
  {
    id: 2,
    number: "ХЛ-0002",
    pharmacy: PharmacyArray[1],
    created: new Date(2025, 6, 20, 12, 35, 45),
    priority: PRIORITY.MEDIUM,
    topic: "Холодильник сильно гудит",
    category: categories[1].name,
    technician: "Федоровский Н.",
    reaction: "05:01",
    solution: "01:35:34",
    status: "inProgress",
  },
  {
    id: 3,
    number: "КН-0002",
    pharmacy: PharmacyArray[2],
    created: new Date(2025, 6, 20, 12, 35, 45),
    priority: PRIORITY.LOW,
    topic: "Конденсат на внутреннем блоке",
    category: categories[2].name,
    technician: "Максимов П.",
    reaction: "05:01",
    solution: "02:30:17",
    status: "ready",
  },
  {
    id: 4,
    number: "ПО-0002",
    pharmacy: PharmacyArray[3],
    created: new Date(2025, 6, 20, 12, 35, 45),
    priority: PRIORITY.CRITICAL,
    topic: "Заметили крыс у входа",
    category: categories[3].name,
    technician: "Сидоров Е.",
    reaction: "05:01",
    solution: "02:30:17",
    status: "closed",
  },
];
