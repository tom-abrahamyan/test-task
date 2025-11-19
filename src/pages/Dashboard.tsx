import { useReducer, useState } from "react";
import Header from "@/components/Header/Header";
import SearchBar from "@/components/SearchBar/SearchBar";
import StatusTabs from "@/components/StatusTabs/StatusTabs";
import RequestsTable from "@/components/RequestsTable/RequestsTable";
import { data } from "@/data/mockData";
import { tabStatusMap, type Tab } from "@/data/contants";
import { CreateRequestModal } from "@/components/Modal/CreateRequsetModal/CreateRequestModal";
import type { TicketData, Action } from "@/data/types";
import StatusBadge from "@/components/StatusBadge/StatusBadge";

// Reducer function
const newRequestReducer = (
  state: TicketData[],
  action: Action
): TicketData[] => {
  switch (action.type) {
    case "addRequest":
      return [...state, action.payload];
    default:
      return state;
  }
};
export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<Tab>("All");
  const [searchText, setSearchText] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [requestData, dispatch] = useReducer(newRequestReducer, data);

  const filteredData = requestData
    .filter((d) =>
      activeTab === "All" ? true : tabStatusMap[activeTab]?.includes(d.status)
    )
    .filter((d) => {
      if (!searchText) return true;
      const lowerSearch = searchText.toLowerCase();
      return (
        d.topic.toLowerCase().includes(lowerSearch) ||
        d.number.toLowerCase().includes(lowerSearch)
      );
    });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <SearchBar
        onOpenModal={() => setModalOpen(true)}
        setSearch={setSearchText}
      />

      {modalOpen && (
        <CreateRequestModal
          open={modalOpen}
          setModalOpen={setModalOpen}
          dispatch={dispatch}
        />
      )}

      <StatusTabs active={activeTab} setActive={setActiveTab} />

      {/* Desktop Table */}
      <div className="hidden md:block">
        <RequestsTable data={filteredData} />
      </div>

      {/* Mobile Cards */}
      <div className="block md:hidden px-4 mt-4 space-y-3">
        {filteredData.map((row) => (
          <div
            key={row.id}
            className="bg-white rounded-lg shadow p-4 flex flex-col gap-2"
          >
            <div className="flex justify-between items-center">
              <span className="font-medium text-sm">{row.number}</span>
              <StatusBadge status={row.status} />
            </div>
            <div className="text-xs text-gray-600">
              <p>
                <span className="font-medium">Аптека:</span> {row.pharmacy.code}{" "}
                - {row.pharmacy.address}
              </p>
              <p>
                <span className="font-medium">Создана:</span>{" "}
                {row.created.toLocaleString()}
              </p>
              <p>
                <span className="font-medium">Приоритет:</span> {row.priority}
              </p>
              <p>
                <span className="font-medium">Тема:</span> {row.topic}
              </p>
              <p>
                <span className="font-medium">Категория:</span> {row.category}
              </p>
              {row.technician && (
                <p>
                  <span className="font-medium">Техник:</span> {row.technician}
                </p>
              )}
              {row.reaction && (
                <p className="text-green-600">
                  <span className="font-medium">Реакция:</span> {row.reaction}
                </p>
              )}
              {row.solution && (
                <p className="text-green-600">
                  <span className="font-medium">Решение:</span> {row.solution}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
