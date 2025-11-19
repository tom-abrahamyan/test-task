import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  return (
    <header className="w-full border-b bg-white px-4 md:px-6 py-3 relative z-50">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <button
            className="md:hidden p-2 rounded hover:bg-gray-100"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex gap-6 text-sm">
            <a className="text-gray-700 hover:text-black cursor-pointer">
              Заявки
            </a>
            <a className="text-gray-700 hover:text-black cursor-pointer">
              Отчёты
            </a>

            <div className="relative group cursor-pointer">
              <span className="text-gray-700 group-hover:text-black">
                Справочники ▾
              </span>
              <div className="absolute left-0 top-6 hidden group-hover:block bg-white border shadow rounded p-2 text-sm">
                <div className="hover:bg-gray-100 px-2 py-1 rounded cursor-pointer">
                  Категории
                </div>
                <div className="hover:bg-gray-100 px-2 py-1 rounded cursor-pointer">
                  Техники
                </div>
              </div>
            </div>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-8 h-8 rounded-full bg-gray-300" />
          <button className="flex items-center gap-2 px-3 py-1.5 border rounded hover:bg-gray-100 text-sm">
            ⎋ Выйти
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden mt-2 bg-white border shadow-md rounded flex flex-col gap-2 p-4">
          <a className="text-gray-700 hover:text-black cursor-pointer">
            Заявки
          </a>
          <a className="text-gray-700 hover:text-black cursor-pointer">
            Отчёты
          </a>

          <div className="border-t my-2" />

          <button
            className="flex justify-between w-full text-gray-700 hover:text-black cursor-pointer px-2 py-1 rounded"
            onClick={() => setSubmenuOpen(!submenuOpen)}
          >
            Справочники ▾
          </button>

          {submenuOpen && (
            <div className="flex flex-col gap-1 mt-1 pl-4">
              <div className="hover:bg-gray-100 px-2 py-1 rounded cursor-pointer">
                Категории
              </div>
              <div className="hover:bg-gray-100 px-2 py-1 rounded cursor-pointer">
                Техники
              </div>
            </div>
          )}
        </div>
      )}
    </header>
  );
}
