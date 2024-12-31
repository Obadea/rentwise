import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const DashboardLayout = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      {/* <nav>
          <ul>
            <li>Dashboard Link 1</li>
            <li>Dashboard Link 2</li>
          </ul>
        </nav> */}
      <Sidebar />

      {/* Main Content */}
      <main className="w-3/4 p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
