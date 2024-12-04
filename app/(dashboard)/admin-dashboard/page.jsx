import React from "react";
import { Users, CreditCard, ClipboardList } from "lucide-react";

export default function AdminDashboardPage() {
  const DASHBOARD_CARDS = [
    {
      icon: Users,
      title: "Total Users",
      value: "1,245",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: CreditCard,
      title: "Active Subscriptions",
      value: "732",
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      icon: ClipboardList,
      title: "Total Predictions",
      value: "3,567",
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600",
    },
  ];

  return (
    <div className="px-4 pt-4">
      <h1 className="text-3xl font-bold mb-6">Dashboard Overview</h1>

      {/* Quick Stats Cards */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {DASHBOARD_CARDS.map((card, index) => (
          <div
            key={index}
            className={`
              ${card.bgColor} p-6 rounded-lg shadow-md flex items-center 
              justify-between hover:scale-105 transition-transform
            `}
          >
            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                {card.title}
              </h3>
              <p className="text-3xl font-bold text-gray-800">{card.value}</p>
            </div>
            <card.icon className={`${card.iconColor} w-12 h-12`} />
          </div>
        ))}
      </div>

      {/* Recent Activity Section */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Recent Activity</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <table className="w-full text-left">
            <thead className="border-b">
              <tr>
                <th className="pb-3">User</th>
                <th className="pb-3">Action</th>
                <th className="pb-3">Time</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  user: "John Doe",
                  action: "Purchased VIP",
                  time: "2 mins ago",
                },
                {
                  user: "Jane Smith",
                  action: "Logged in",
                  time: "15 mins ago",
                },
                {
                  user: "Mike Johnson",
                  action: "Updated Profile",
                  time: "1 hour ago",
                },
              ].map((activity, index) => (
                <tr
                  key={index}
                  className="border-b last:border-b-0 hover:bg-gray-50"
                >
                  <td className="py-3">{activity.user}</td>
                  <td className="py-3">{activity.action}</td>
                  <td className="py-3">{activity.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
