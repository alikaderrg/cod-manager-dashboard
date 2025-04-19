import React from "react";

function DeliveryIntegration() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Delivery Provider Integration</h2>
      <p className="text-gray-700 mb-4">
        Follow these steps to connect your courier services like ZR Express or Maystro Delivery:
      </p>
      <ol className="list-decimal pl-6 text-gray-700 space-y-2">
        <li>Visit the courier's dashboard or API section.</li>
        <li>Generate an API key or token from your courier account.</li>
        <li>Go to your profile/settings section in this app.</li>
        <li>Paste the API key/token and configure region/pickup settings.</li>
      </ol>
    </div>
  );
}

export default DeliveryIntegration;
