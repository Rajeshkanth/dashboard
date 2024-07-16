import React from "react";

function MenuItem({ icon, label }) {
  return (
    <div className="flex items-center pl-8 p-4 text-white hover:bg-slate-100 hover:text-black cursor-pointer">
      <div className="mr-4">{icon}</div>
      <div>{label}</div>
    </div>
  );
}

export default MenuItem;
