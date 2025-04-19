// src/pages/Dashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [orders, setOrders] = useState([]);
  const [currency, setCurrency] = useState('DA');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('/api/orders');
        setOrders(response.data);
      } catch (error) {
        console.error('Failed to fetch orders:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchOrders();
  }, []);

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('fr-DZ', {
      style: 'currency',
      currency: currency,
    }).format(value);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          className="border rounded px-2 py-1"
        >
          <option value="DA">DA</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </select>
      </div>

      {isLoading ? (
        <p>Loading real orders...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {orders.map((order, index) => (
            <div key={index} className="border rounded p-4 shadow">
              <p className="font-semibold">#{order.orderNumber}</p>
              <p>Status: {order.status}</p>
              <p>Total: {formatCurrency(order.total)}</p>
              <p>Date: {new Date(order.createdAt).toLocaleDateString()}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
