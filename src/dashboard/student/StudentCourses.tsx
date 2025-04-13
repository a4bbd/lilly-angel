
import React from 'react';
import { PageHeader } from "../components/PageHeader";

const StudentCourses = () => {
  return (
    <div>
      <PageHeader title="My Courses" description="View your enrolled courses" />
      <div className="p-8 bg-white rounded-lg shadow">
        <p className="text-center text-gray-500">Student courses interface will be implemented here.</p>
      </div>
    </div>
  );
};

export default StudentCourses;
