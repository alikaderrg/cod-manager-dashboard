import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import ShopifyIntegration from "./pages/ShopifyIntegration";
import DeliveryIntegration from "./pages/DeliveryIntegration";
import Profile from "./pages/Profile";

function App() {
  const [currency, setCurrency] = useState("DZD"); // DA = DZD

  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar currency={currency} setCurrency={setCurrency} />
        <main className="flex-1 bg-gray-50 p-4 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Dashboard currency={currency} />} />
            <Route path="/orders" element={<Orders currency={currency} />} />
            <Route
              path="/shopify-integration"
              element={<ShopifyIntegration />}
            />
            <Route
              path="/delivery-integration"
              element={<DeliveryIntegration />}
            />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
