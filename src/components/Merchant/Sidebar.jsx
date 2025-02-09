import { NavLink } from "react-router-dom";
import { BiTachometer } from "react-icons/bi";
import { MdOutlineWindow } from "react-icons/md";
import { BsCash } from "react-icons/bs";
import { IoMdSettings } from "react-icons/io";
import { IoMdLogOut } from "react-icons/io";
import { MdApi } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";

const Sidebar = ({children}) => {
  const menuItems = [
    { name: "Dashboard", path: "/merchant/dashboard", icon: <BiTachometer size={25}/> },
    { name: "Users", path: "/merchant/users", icon: <MdOutlineWindow size={25}/> },
    { name: "Wallet", path: "/merchant/wallet", icon: <BsCash size={25}/> },
    { name: "Transaction", path: "/merchant/transaction", icon: <GrTransaction size={25}/> },
    { name: "API Connection", path: "/merchant/api-connection", icon: <MdApi size={25}/> },
    { name: "Settings", path: "/merchant/settings", icon:    <IoMdSettings size={25}/> },
    { name: "Logout", path: "/logout", icon: <IoMdLogOut size={25}/> },
  ];

  return (
    <div className="flex h-screen">
      <div className="w-1/6 bg-white text-[#202224] p-4 font-jakarta fixed h-screen">
        <nav className="flex flex-col gap-4">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-2 py-3 rounded ${
                  isActive ? "bg-[#2a3e5f] text-white" : "hover:bg-[#3a5685] hover:text-white"
                }`
              }
            >
              <span>{item.icon}</span>
              <span>{item.name}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="w-full flex justify-end">
      <div className="w-5/6 bg-gray-100 p-6">
        {children}
      </div>
      </div>
    </div>
  );
};

export default Sidebar;
