"use client";

interface NavSearchBarsProps {
  searchQuery: string;
  setSearchQuery: (e: string) => void;
}

const NavSearchBar: React.FC<NavSearchBarsProps> = ({
  searchQuery,
  setSearchQuery,
}) => {
  const handleIconClick = () => {
    const input = document.getElementById("search-input");
    if (input) {
      input.focus();
    }
  };

  return (
    <div className="sm:w-[300px] md:w-[400px] lg:w-[500px] h-[32px] flex items-center justify-center mx-auto relative">
      <input
        type="text"
        placeholder="Search"
        value={searchQuery}
        className="w-full p-2 border border-gray-300 rounded-md absolute h-full bg-[#F3F4F6] outline-none"
        id="search-input"
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <button
        onClick={handleIconClick}
        className="absolute right-4 top-2 text-gray-300 cursor-text z-10 flex items-center justify-center"
      >
        <img src="/icon/search.png" alt="CyberCraft-Bangladesh-Search-Icon" />
      </button>
    </div>
  );
};

export default NavSearchBar;
