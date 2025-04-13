
import React from 'react';
import { PageHeader } from "../components/PageHeader";

const AdminNotifications = () => {
  return (
    <div>
      <PageHeader title="Notifications" description="System and user notifications" />
      <div className="p-8 bg-white rounded-lg shadow">
        <p className="text-center text-gray-500">Notifications interface will be implemented here.</p>
      </div>
    </div>
  );
};

export default AdminNotifications;
