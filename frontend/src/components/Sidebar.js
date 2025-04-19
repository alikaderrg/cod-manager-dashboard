import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const links = [
    { name: "Dashboard", to: "/" },
    { name: "Orders", to: "/orders" },
    { name: "Shopify Integration", to: "/shopify" },
    { name: "Delivery Integration", to: "/delivery" },
    { name: "Profile", to: "/profile" },
  ];

  return (
    <div className="h-screen w-64 bg-gray-900 text-white p-4 fixed">
      <h1 className="text-2xl font-bold mb-6">COD Manager</h1>
      <nav className="flex flex-col gap-3">
        {links.map((link) => (
          <NavLink
            key={link.name}
            to={link.to}
            className={({ isActive }) =>
              `px-4 py-2 rounded hover:bg-gray-700 ${isActive ? "bg-gray-700" : ""}`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
