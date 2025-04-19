import React from "react";

function Profile() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Your Profile</h2>
      <p className="text-gray-700 mb-4">Manage your account details and integrations here:</p>

      <form className="space-y-4 max-w-lg">
        <div>
          <label className="block text-sm font-medium">Full Name</label>
          <input type="text" placeholder="Your name" className="mt-1 w-full p-2 border rounded" />
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input type="email" placeholder="you@example.com" className="mt-1 w-full p-2 border rounded" />
        </div>
        <div>
          <label className="block text-sm font-medium">Shopify Store URL</label>
          <input type="text" placeholder="https://yourstore.myshopify.com" className="mt-1 w-full p-2 border rounded" />
        </div>
        <div>
          <label className="block text-sm font-medium">Shopify Access Token</label>
          <input type="text" placeholder="Access token here" className="mt-1 w-full p-2 border rounded" />
        </div>
        <div>
          <label className="block text-sm font-medium">Courier API Key</label>
          <input type="text" placeholder="API key/token here" className="mt-1 w-full p-2 border rounded" />
        </div>

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default Profile;
