import axios from 'axios';

export const fetchShopifyOrders = async () => {
  try {
    const response = await axios.get('https://your-shopify-store.myshopify.com/admin/api/2023-04/orders.json', {
      headers: {
        'X-Shopify-Access-Token': 'your-access-token',
      },
    });
    return response.data.orders;
  } catch (error) {
    console.error('Error fetching Shopify orders:', error);
  }
};
