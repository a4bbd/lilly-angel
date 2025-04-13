
import React from 'react';
import { PageHeader } from "../components/PageHeader";

const PaymentOverview = () => {
  return (
    <div>
      <PageHeader title="Payment Overview" description="Track and manage all payments" />
      <div className="p-8 bg-white rounded-lg shadow">
        <p className="text-center text-gray-500">Payment overview interface will be implemented here.</p>
      </div>
    </div>
  );
};

export default PaymentOverview;
