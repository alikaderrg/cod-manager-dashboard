import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import ShopifyIntegration from "./pages/ShopifyIntegration";
import DeliveryIntegration from "./pages/DeliveryIntegration";
import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="ml-64 p-8 w-full">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/shopify" element={<ShopifyIntegration />} />
            <Route path="/delivery" element={<DeliveryIntegration />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
