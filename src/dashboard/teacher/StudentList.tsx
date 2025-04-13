
import React from 'react';
import { PageHeader } from "../components/PageHeader";

const StudentList = () => {
  return (
    <div>
      <PageHeader title="Student List" description="View and manage your students" />
      <div className="p-8 bg-white rounded-lg shadow">
        <p className="text-center text-gray-500">Student list interface will be implemented here.</p>
      </div>
    </div>
  );
};

export default StudentList;
