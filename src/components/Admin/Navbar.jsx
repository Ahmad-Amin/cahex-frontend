import React from "react";

const Navbar = () => {
  return (
    <div className="w-full bg-white flex flex-row h-16 fixed gap-20 z-10">
      <div className="w-1/6 text-[#202224] p-4 font-impact flex items-center justify-center">
        <h1 className="text-3xl">CAHEX</h1>
      </div>
      <div className="w-4/12 flex items-center">
        <div class="w-full mx-auto">
          <div class="relative flex items-center w-full h-11 rounded-full focus-within:shadow-lg bg-[#f5f6fa] overflow-hidden border border-[#d5d5d5]">
            <div class="grid place-items-center h-full w-12 text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            <input
              class="peer h-full w-full outline-none bg-[#f5f6fa] text-sm text-gray-700 pr-2"
              type="text"
              id="search"
              placeholder="Search something.."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
