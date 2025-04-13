
import React from 'react';
import { PageHeader } from "../components/PageHeader";

const ManageCourses = () => {
  return (
    <div>
      <PageHeader title="Manage Courses" description="Add, edit, or remove courses" />
      <div className="p-8 bg-white rounded-lg shadow">
        <p className="text-center text-gray-500">Course management interface will be implemented here.</p>
      </div>
    </div>
  );
};

export default ManageCourses;
