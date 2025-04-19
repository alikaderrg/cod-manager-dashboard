import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import ShopifyIntegration from "./pages/ShopifyIntegration";
import DeliveryIntegration from "./pages/DeliveryIntegration";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/shopify" element={<ShopifyIntegration />} />
          <Route path="/delivery" element={<DeliveryIntegration />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
