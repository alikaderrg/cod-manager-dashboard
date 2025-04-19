import axios from 'axios';

export const fetchDeliveryStatus = async (orderId) => {
  try {
    const response = await axios.get(`https://api.zrexpress.com/order/${orderId}/status`, {
      headers: {
        'Authorization': `Bearer ${YOUR_API_KEY}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching delivery status:', error);
  }
};
