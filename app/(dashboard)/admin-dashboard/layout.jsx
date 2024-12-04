import Sidebar from "@/shared/Sidebar";
import React from "react";

const Layout = ({ children }) => {
  return (
    <section className="flex">
      <div>
        <Sidebar />
      </div>
      <main>{children}</main>
    </section>
  );
};

export default Layout;
