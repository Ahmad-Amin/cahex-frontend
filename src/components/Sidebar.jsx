import { NavLink } from "react-router-dom";
import { BiTachometer } from "react-icons/bi";
import { MdOutlineWindow } from "react-icons/md";
import { BsCash } from "react-icons/bs";
import { SiGoogleanalytics } from "react-icons/si";
import { GoPerson } from "react-icons/go";
import { IoMdSettings } from "react-icons/io";
import { IoMdLogOut } from "react-icons/io";

const Sidebar = ({children}) => {
  const menuItems = [
    { name: "Dashboard", path: "/admin/dashboard", icon: <BiTachometer size={25}/> },
    { name: "Merchants", path: "/admin/merchants", icon: <MdOutlineWindow size={25}/> },
    { name: "Transactions", path: "/admin/transactions", icon: <BsCash size={25}/> },
    { name: "API & SDK Integration", path: "/admin/api-sdk", icon: <SiGoogleanalytics size={20}/> },
    { name: "Fraud Detection", path: "/admin/fraud-detection", icon: <GoPerson size={25}/> },
    { name: "Settings", path: "/admin/settings", icon:    <IoMdSettings size={25}/> },
    { name: "Logout", path: "/", icon: <IoMdLogOut size={25}/> },
  ];

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
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
