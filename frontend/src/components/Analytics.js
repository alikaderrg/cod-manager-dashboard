import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const chartData = {
  labels: ['January', 'February', 'March', 'April'],
  datasets: [{
    label: 'Orders',
    data: [65, 59, 80, 81],
  }],
};

const Analytics = () => {
  return (
    <div className="p-6">
      <h3 className="text-2xl font-semibold mb-4">Orders Analytics</h3>
      <Line data={chartData} />
    </div>
  );
};

export default Analytics;
