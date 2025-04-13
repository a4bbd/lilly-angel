
import React from 'react';
import { PageHeader } from "../components/PageHeader";

const MakePayment = () => {
  return (
    <div>
      <PageHeader title="Make Payment" description="Pay for courses and view payment history" />
      <div className="p-8 bg-white rounded-lg shadow">
        <p className="text-center text-gray-500">Payment interface will be implemented here.</p>
      </div>
    </div>
  );
};

export default MakePayment;
