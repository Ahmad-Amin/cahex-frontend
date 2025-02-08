import React from "react";

const ProfileSettings = () => {
  return (
    <div className=" bg-gray-100 w-full font-jakarta">
      <div className="w-full p-6 bg-white shadow-lg rounded-2xl">
        <h2 className="text-xl font-bold text-black mb-6">Profile</h2>
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4 w-4/5">
            <div>
              <label
                htmlFor="yourName"
                className="block text-sm font-medium text-black"
              >
                Your Name
              </label>
              <input
                type="text"
                id="yourName"
                defaultValue="Charlene Reed"
                className="mt-1 block w-full p-2 border border-[#dfeaf2] rounded-lg shadow-sm outline-none text-[#718ebf]"
              />
            </div>
            <div>
              <label
                htmlFor="userName"
                className="block text-sm font-medium text-black"
              >
                User Name
              </label>
              <input
                type="text"
                id="userName"
                defaultValue="Charlene Reed"
                className="mt-1 block w-full p-2 border border-[#dfeaf2] rounded-lg shadow-sm outline-none text-[#718ebf]"
              />
            </div>
          </div>
          <div className="w-full flex flex-row items-end gap-10">
            <div className="grid grid-cols-2 gap-4 w-4/5">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-black"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  defaultValue="charlenereed@gmail.com"
                  className="mt-1 block w-full p-2 border border-[#dfeaf2] rounded-lg shadow-sm outline-none text-[#718ebf]"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-black"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  defaultValue="********"
                  className="mt-1 block w-full p-2 border border-[#dfeaf2] rounded-lg shadow-sm outline-none text-[#718ebf]"
                />
              </div>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-10 py-2 text-white bg-[#2a3e5f] rounded-lg shadow hover:bg-[#131c2c] outline-none"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileSettings;
