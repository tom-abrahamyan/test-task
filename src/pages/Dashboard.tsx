import { useReducer, useState } from "react";
import Header from "@/components/Header/Header";
import SearchBar from "@/components/SearchBar/SearchBar";
import StatusTabs from "@/components/StatusTabs/StatusTabs";
import RequestsTable from "@/components/RequestsTable/RequestsTable";
import { data } from "@/data/mockData";
import { tabStatusMap, type Tab } from "@/data/contants";
import { CreateRequestModal } from "@/components/Modal/CreateRequsetModal/CreateRequestModal";
import type { TicketData, Action } from "@/data/types";
import { Box } from "@chakra-ui/react";
import MobileRequestsTable from "@/components/RequestsTable/MobileRequestsTable";

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
    <Box w="100%" minH="100vh" bg="#fff">
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

      <Box display={{ base: "none", md: "block" }}>
        <RequestsTable data={filteredData} />
      </Box>
      <Box display={{ base: "block", md: "none" }} px={4} mt={4}>
        <MobileRequestsTable data={filteredData} />
      </Box>
    </Box>
  );
}
