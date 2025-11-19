import type { Tab } from "@/data/contants";
import type { Dispatch, SetStateAction } from "react";
import { TAB_LABELS } from "@/data/contants";
import { tabs } from "@/data/contants";

interface StatusTabsProps {
  active: Tab;
  setActive: Dispatch<SetStateAction<Tab>>;
}

export default function StatusTabs({ active, setActive }: StatusTabsProps) {
  return (
    <div className="px-4 md:px-6 mt-4 flex items-center gap-2 flex-wrap">
      {tabs.map((t) => (
        <button
          key={t}
          onClick={() => setActive(t)}
          className={`px-3 py-1.5 rounded text-sm border ${
            active === t
              ? "bg-black text-white border-black"
              : "bg-white hover:bg-gray-100"
          }`}
        >
          {TAB_LABELS[t]}
        </button>
      ))}
    </div>
  );
}
