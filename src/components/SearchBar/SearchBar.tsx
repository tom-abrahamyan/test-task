import { useEffect, useState } from "react";
import DesktopSearchBar from "./DesktopSearchBar";
import MobileSearchBar from "./MobileSearchBar";

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
    <>
      <DesktopSearchBar text={text} setText={setText} onOpenModal={onOpenModal} />
      <MobileSearchBar  text={text} setText={setText} onOpenModal={onOpenModal} />
    </>
  );
}
