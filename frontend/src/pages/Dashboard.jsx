import React from 'react';

const Dashboard = () => {
  const stats = [
    { title: 'Total Orders', value: 1280, color: 'bg-blue-500' },
    { title: 'Pending Orders', value: 320, color: 'bg-yellow-500' },
    { title: 'Shipped Orders', value: 850, color: 'bg-green-500' },
    { title: 'COD Collected', value: 'DH 54,000', color: 'bg-purple-500' },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className={`p-4 rounded-xl text-white shadow ${stat.color}`}>
            <h2 className="text-lg">{stat.title}</h2>
            <p className="text-3xl font-bold">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
