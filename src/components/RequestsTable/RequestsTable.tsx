import StatusBadge from "../StatusBadge/StatusBadge";
import type { TicketData } from "@/data/types";

interface RequestsTableProps {
  data: TicketData[];
}


export default function RequestsTable({ data }: RequestsTableProps) {
  return (
    <div className="px-6 mt-4">
      <table className="w-full text-sm">
        <thead className="text-gray-600 border-b">
          <tr>
            <th className="py-2 text-left">№</th>
            <th className="text-left">Аптека</th>
            <th className="text-left">Создана</th>
            <th className="text-left">Приоритет</th>
            <th className="text-left">Тема</th>
            <th className="text-left">Категория</th>
            <th className="text-left">Техник</th>
            <th className="text-left">Реакция</th>
            <th className="text-left">Решение</th>
            <th className="text-left">Статус</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id} className="border-b hover:bg-gray-50">
              <td className="py-3">{row.number}</td>
              <td>
                {row.pharmacy.code} - {row.pharmacy.address}
              </td>
              <td>{row.created.toLocaleString()}</td>
              <td>{row.priority}</td>
              <td>{row.topic}</td>
              <td>{row.category}</td>
              <td>{row.technician}</td>
              <td className="text-green-600">{row.reaction}</td>
              <td className="text-green-600">{row.solution}</td>
              <td>
                <StatusBadge status={row.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
