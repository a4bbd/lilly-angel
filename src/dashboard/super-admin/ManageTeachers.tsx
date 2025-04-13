
import React from 'react';
import { PageHeader } from "../components/PageHeader";

const ManageTeachers = () => {
  return (
    <div>
      <PageHeader title="Manage Teachers" description="Add, edit, or remove teacher accounts" />
      <div className="p-8 bg-white rounded-lg shadow">
        <p className="text-center text-gray-500">Teacher management interface will be implemented here.</p>
      </div>
    </div>
  );
};

export default ManageTeachers;
