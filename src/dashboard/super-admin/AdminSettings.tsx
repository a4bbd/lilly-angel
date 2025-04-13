
import React from 'react';
import { PageHeader } from "../components/PageHeader";

const AdminSettings = () => {
  return (
    <div>
      <PageHeader title="Settings" description="Configure system settings" />
      <div className="p-8 bg-white rounded-lg shadow">
        <p className="text-center text-gray-500">Settings interface will be implemented here.</p>
      </div>
    </div>
  );
};

export default AdminSettings;
