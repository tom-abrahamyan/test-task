import { useEffect, useState } from "react";

interface SearchBarProps {
  onOpenModal: () => void;
  setSearch: (text: string) => void;
}

export default function SearchBar({ onOpenModal, setSearch }: SearchBarProps) {
  const [text, setText] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => setSearch(text), 300);
    return () => clearTimeout(timeout);
  }, [text, setSearch]);

  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between mt-4 px-4 md:px-6 gap-3 md:gap-0">
      
 
      <input
        placeholder="Поиск по номеру или теме заявки"
        className="w-full md:max-w-xl border rounded px-4 py-2 text-sm"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

  
      <div className="flex flex-col md:flex-row w-full md:w-auto gap-2 md:gap-3 mt-2 md:mt-0">
        <button className="flex-1 md:flex-none px-3 py-2 border rounded bg-white hover:bg-gray-100 text-sm">
          ⬇ Экспорт
        </button>

        <button
          onClick={onOpenModal}
          className="flex-1 md:flex-none px-4 py-2 bg-black text-white rounded hover:bg-gray-800 text-sm"
        >
          + Создать новую заявку
        </button>
      </div>
    </div>
  );
}
