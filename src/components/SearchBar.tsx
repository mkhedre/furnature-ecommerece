import { ChevronDown, Search } from "lucide-react";
import { useState } from "react";

const SearchBar = () => {
  const categories = ["All", "Clocks", "Furniture", "Lighting", "Tables"];
  const [selectedCategory, setSelectedCategory] = useState("All");
  return (
    <form className="relative w-full">
      <input
        type="text"
        placeholder="Search for products"
        className="bg-white w-full border border-black/10 min-w-[200px] focus:border-y-amber-300 h-[46px] rounded-4xl placeholder:text-gray-500 pl-2"
      />
      <input type="hidden" />
      <div className="absolute top-0 right-10">
        <div className="relative group">
          <button
            onClick={() => setSelectedCategory("All")}
            className="flex items-center justify-between px-4 gap-1 h-[42px] w-[140px] border-l border-black/10 text-gray-400 text-xs uppercase bg-transparent"
          >
            <span>{selectedCategory}</span>
            <ChevronDown size={14} />
          </button>
          <div className="absolute top-[41px] left-0 z-50 bg-white shadow-md w-[220px] p-3 invisible opacity-0 transform translate-y-4 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out pointer-events-none group-hover:pointer-events-auto">
            <ul className="text-[#838383]">
              <li>
                <a href="#" className="block py-2 text-sm hover:text-primary">
                  Deutsch
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 text-sm hover:text-primary">
                  French
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 text-sm hover:text-primary">
                  Requires WPML plugin
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <button className="absolute top-0 bottom-0 w-[46px] h-full bg-amber-300 rounded-r-[35px] flex items-center justify-between text-white transition-all duration-300 right-0">
        <span className="sr-only">Search</span>
        <Search />
      </button>
    </form>
  );
};

export default SearchBar;
