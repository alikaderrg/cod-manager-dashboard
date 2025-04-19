import React from 'react';

const Dashboard = () => {
  const stats = [
    { title: 'Total Orders', value: 1280, color: 'bg-blue-500' },
    { title: 'Pending Orders', value: 320, color: 'bg-yellow-500' },
    { title: 'Shipped Orders', value: 850, color: 'bg-green-500' },
    { title: 'COD Collected', value: 'DA 54,000', color: 'bg-purple-500' },
  ];

  const recentOrders = [
    { id: '#12345', name: 'John Doe', date: '2025-04-17', status: 'Shipped', amount: 'DA 200' },
    { id: '#12346', name: 'Jane Smith', date: '2025-04-18', status: 'Pending', amount: 'DA 150' },
    { id: '#12347', name: 'Mohammad Ali', date: '2025-04-19', status: 'Shipped', amount: 'DA 120' },
    { id: '#12348', name: 'Sarah Khan', date: '2025-04-19', status: 'Pending', amount: 'DA 250' },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className={`p-4 rounded-xl text-white shadow ${stat.color}`}>
            <h2 className="text-lg">{stat.title}</h2>
            <p className="text-3xl font-bold">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Recent Orders Table */}
      <h2 className="text-2xl font-bold mb-4">Recent Orders</h2>
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100">
            <tr>
              <th className="px-6 py-3">Order ID</th>
              <th className="px-6 py-3">Customer Name</th>
              <th className="px-6 py-3">Date</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Amount</th>
            </tr>
          </thead>
          <tbody>
            {recentOrders.map((order, index) => (
              <tr key={index} className="bg-gray-50 border-b hover:bg-gray-100">
                <td className="px-6 py-4">{order.id}</td>
                <td className="px-6 py-4">{order.name}</td>
                <td className="px-6 py-4">{order.date}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 text-white rounded-full ${order.status === 'Shipped' ? 'bg-green-500' : 'bg-yellow-500'}`}>
                    {order.status}
                  </span>
                </td>
                <td className="px-6 py-4">{order.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
