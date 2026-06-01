import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Analytics: React.FC = () => {
  const orders = useSelector((state: RootState) => state.orders.orders);

  
  const today = new Date();
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const last7Days = Array.from({ length: 7 }).map((_, i) => {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    return { date: d.toISOString().split('T')[0], day: weekDays[d.getDay()] };
  }).reverse();

  const data = last7Days.map(day => {
    const totalOrders = orders
      .filter(o => o.date.startsWith(day.date))
      .reduce((sum, o) => sum + o.quantity, 0);
    return { name: day.day, orders: totalOrders };
  });

  return (
    <div className="analytics-container">
      <h1>Weekly Orders Analytics</h1>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="orders" stroke="#e94e1b" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Analytics;