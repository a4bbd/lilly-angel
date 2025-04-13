
import React, { useState } from 'react';
import { PageHeader } from "../components/PageHeader";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { Download, FileText, Users, BookOpen, CreditCard } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

// Mock data for the reports
const enrollmentData = [
  { month: 'Jan', students: 45 },
  { month: 'Feb', students: 52 },
  { month: 'Mar', students: 49 },
  { month: 'Apr', students: 63 },
  { month: 'May', students: 55 },
  { month: 'Jun', students: 71 },
  { month: 'Jul', students: 65 },
  { month: 'Aug', students: 72 },
  { month: 'Sep', students: 82 },
  { month: 'Oct', students: 79 },
  { month: 'Nov', students: 86 },
  { month: 'Dec', students: 74 }
];

const courseCompletionData = [
  { name: 'Completed', value: 72, color: '#4CAF50' },
  { name: 'In Progress', value: 21, color: '#2196F3' },
  { name: 'Not Started', value: 7, color: '#FFC107' }
];

const revenueData = [
  { month: 'Jan', amount: 12500 },
  { month: 'Feb', amount: 15000 },
  { month: 'Mar', amount: 13800 },
  { month: 'Apr', amount: 17200 },
  { month: 'May', amount: 14900 },
  { month: 'Jun', amount: 19600 },
  { month: 'Jul', amount: 18400 },
  { month: 'Aug', amount: 20100 },
  { month: 'Sep', amount: 23500 },
  { month: 'Oct', amount: 22000 },
  { month: 'Nov', amount: 25700 },
  { month: 'Dec', amount: 21200 }
];

const Reports = () => {
  const [currentTab, setCurrentTab] = useState("enrollments");
  const { toast } = useToast();
  
  const handleDownloadReport = () => {
    toast({
      title: "Report downloaded",
      description: `The ${currentTab} report has been downloaded successfully.`,
    });
  };

  return (
    <div>
      <PageHeader 
        title="Reports" 
        description="View and generate system reports" 
      />
      
      <Tabs defaultValue="enrollments" className="w-full" onValueChange={setCurrentTab}>
        <div className="flex justify-between items-center mb-6">
          <TabsList>
            <TabsTrigger value="enrollments" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Enrollments
            </TabsTrigger>
            <TabsTrigger value="courses" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Course Completion
            </TabsTrigger>
            <TabsTrigger value="revenue" className="flex items-center gap-2">
              <CreditCard className="h-4 w-4" />
              Revenue
            </TabsTrigger>
          </TabsList>
          
          <Button 
            onClick={handleDownloadReport} 
            className="flex items-center gap-2"
          >
            <Download className="h-4 w-4" />
            Download Report
          </Button>
        </div>
        
        <Card className="p-6">
          <TabsContent value="enrollments" className="mt-0">
            <h3 className="text-lg font-medium mb-4">Student Enrollment Statistics</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={enrollmentData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="students" fill="#3b82f6" name="Students Enrolled" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
          
          <TabsContent value="courses" className="mt-0">
            <h3 className="text-lg font-medium mb-4">Course Completion Rates</h3>
            <div className="h-80 flex justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={courseCompletionData}
                    cx="50%"
                    cy="50%"
                    labelLine={true}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={120}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {courseCompletionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
          
          <TabsContent value="revenue" className="mt-0">
            <h3 className="text-lg font-medium mb-4">Monthly Revenue</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip formatter={(value) => [`$${value}`, 'Revenue']} />
                  <Legend />
                  <Bar dataKey="amount" fill="#10b981" name="Revenue ($)" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
        </Card>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <Card className="p-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-blue-100 rounded-lg">
                <FileText className="h-5 w-5 text-blue-600" />
              </div>
              <h3 className="font-medium">Generated Reports</h3>
            </div>
            <p className="text-sm text-gray-500">42 reports generated this month</p>
          </Card>
          
          <Card className="p-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-green-100 rounded-lg">
                <Users className="h-5 w-5 text-green-600" />
              </div>
              <h3 className="font-medium">User Analytics</h3>
            </div>
            <p className="text-sm text-gray-500">15% increase in active users</p>
          </Card>
          
          <Card className="p-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-amber-100 rounded-lg">
                <BookOpen className="h-5 w-5 text-amber-600" />
              </div>
              <h3 className="font-medium">Course Insights</h3>
            </div>
            <p className="text-sm text-gray-500">8 new courses added this month</p>
          </Card>
        </div>
      </Tabs>
    </div>
  );
};

export default Reports;
