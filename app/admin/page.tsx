import React from 'react'
import DashboardCard from '@/components/dashboard/DashboardCard';

const AdminDashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <DashboardCard title="Sales" subtitle="Test" body="body"/>
    </div>
  )
}


export default AdminDashboard;
