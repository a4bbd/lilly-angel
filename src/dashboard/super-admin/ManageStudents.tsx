
import React from 'react';
import { PageHeader } from "../components/PageHeader";

const ManageStudents = () => {
  return (
    <div>
      <PageHeader title="Manage Students" description="Add, edit, or remove student accounts" />
      <div className="p-8 bg-white rounded-lg shadow">
        <p className="text-center text-gray-500">Student management interface will be implemented here.</p>
      </div>
    </div>
  );
};

export default ManageStudents;
