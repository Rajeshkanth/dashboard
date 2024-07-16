import React from "react";
import MenuItem from "./MenuItem";
import { FiHome, FiUser, FiSettings, FiInfo } from "react-icons/fi";

const menuItems = [
  { icon: <FiHome />, label: "Home" },
  { icon: <FiUser />, label: "Profile" },
  { icon: <FiSettings />, label: "Settings" },
  { icon: <FiInfo />, label: "About" },
];

function Sidebar() {
  return (
    <div className="h-full w-1/6 left-0 bg-blue-500">
      {menuItems.map((item, index) => (
        <MenuItem key={index} icon={item.icon} label={item.label} />
      ))}
    </div>
  );
}

export default Sidebar;
