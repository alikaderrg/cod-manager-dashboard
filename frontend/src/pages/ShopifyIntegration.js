import React from "react";

function ShopifyIntegration() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Shopify Store Integration</h2>
      <p className="text-gray-700 mb-4">
        To connect your Shopify store, follow these steps:
      </p>
      <ol className="list-decimal pl-6 text-gray-700 space-y-2">
        <li>Login to your Shopify admin dashboard.</li>
        <li>Go to <strong>Apps</strong> and click <strong>Develop apps</strong>.</li>
        <li>Create a new app and generate Admin API credentials.</li>
        <li>
          Copy the <strong>Store URL</strong> and <strong>Access Token</strong>.
        </li>
        <li>
          Paste those values in your profile section or settings in this app.
        </li>
      </ol>
    </div>
  );
}

export default ShopifyIntegration;
