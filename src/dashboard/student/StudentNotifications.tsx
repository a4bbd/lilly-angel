
import React from 'react';
import { PageHeader } from "../components/PageHeader";

const StudentNotifications = () => {
  return (
    <div>
      <PageHeader title="Notifications" description="View your notifications" />
      <div className="p-8 bg-white rounded-lg shadow">
        <p className="text-center text-gray-500">Notifications interface will be implemented here.</p>
      </div>
    </div>
  );
};

export default StudentNotifications;
