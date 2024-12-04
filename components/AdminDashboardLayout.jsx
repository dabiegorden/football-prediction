"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  ClipboardList,
  CreditCard,
  Settings,
  Menu,
  X,
} from "lucide-react";

const SIDEBAR_ITEMS = [
  {
    href: "/admin-dashboard",
    icon: LayoutDashboard,
    label: "Dashboard",
  },
  {
    href: "/admin-dashboard/predictions",
    icon: ClipboardList,
    label: "Predictions",
  },
  {
    href: "/admin-dashboard/users",
    icon: Users,
    label: "Users",
  },
  {
    href: "/admin-dashboard/subscriptions",
    icon: CreditCard,
    label: "Subscriptions",
  },
  {
    href: "/admin-dashboard/settings",
    icon: Settings,
    label: "Settings",
  },
];

export default function AdminLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Mobile & Tablet Sidebar Toggle */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 md:hidden bg-white shadow-md p-2 rounded-full"
      >
        {isSidebarOpen ? <X /> : <Menu />}
      </button>

      {/* Sidebar */}
      <div
        className={`
          fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-lg transition-transform duration-300 
          md:relative md:translate-x-0
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="flex flex-col h-full">
          {/* Logo and Title */}
          <div className="p-6 border-b">
            <h1 className="text-2xl font-bold text-gray-800">
              Admin Dashboard
            </h1>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 py-4 space-y-1">
            {SIDEBAR_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  flex items-center px-6 py-3 transition-colors duration-200
                  ${
                    pathname === item.href
                      ? "bg-blue-50 text-blue-600 border-r-4 border-blue-600"
                      : "text-gray-600 hover:bg-gray-50"
                  }
                `}
              >
                <item.icon className="mr-3" size={20} />
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Logout Button */}
          <div className="p-6 border-t">
            <button
              className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition"
              onClick={() => {
                // TODO: Implement logout logic
                console.log("Logout clicked");
              }}
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <main
        className="flex-1 overflow-y-auto p-6 md:p-10 bg-gray-100"
        onClick={() => {
          // Close sidebar on mobile when clicking main content
          if (isSidebarOpen) setIsSidebarOpen(false);
        }}
      >
        <div className="max-w-7xl mx-auto">{children}</div>
      </main>
    </div>
  );
}
