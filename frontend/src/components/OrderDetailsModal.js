import React from 'react';

const OrderDetailsModal = ({ order, closeModal }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
      <h3 className="text-xl font-semibold">Order Details</h3>
      <p>Order Status: {order.status}</p>
      <button onClick={closeModal} className="bg-blue-500 text-white py-2 px-4 rounded">Close</button>
    </div>
  </div>
);

export default OrderDetailsModal;
