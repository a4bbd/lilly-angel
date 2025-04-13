
import { PageHeader } from "../components/PageHeader";
import { StatWidget } from "../components/StatWidget";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, BookOpen, ClipboardCheck, CreditCard, Calendar, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useGetData } from "@/hooks/useApi";
import { Course, Assignment, LiveClass } from "@/types/dashboard";

// Mock data for widgets
const mockStats = [
  { 
    title: "Total Users", 
    value: "1,248", 
    icon: <Users className="h-6 w-6" />,
    change: { value: 12, trend: "up" as const } 
  },
  { 
    title: "Active Courses", 
    value: "32", 
    icon: <BookOpen className="h-6 w-6" />,
    change: { value: 8, trend: "up" as const } 
  },
  { 
    title: "Active Assignments", 
    value: "86", 
    icon: <ClipboardCheck className="h-6 w-6" />,
    change: { value: 2, trend: "down" as const } 
  },
  { 
    title: "Total Revenue", 
    value: "$24,834", 
    icon: <CreditCard className="h-6 w-6" />,
    change: { value: 18, trend: "up" as const } 
  },
];

// Mock data for upcoming classes
const mockUpcomingClasses: LiveClass[] = [
  {
    id: "1",
    courseId: "course1",
    title: "Introduction to Web Development",
    startTime: "2025-04-14T10:00:00Z",
    duration: 60,
    status: "scheduled"
  },
  {
    id: "2",
    courseId: "course2",
    title: "Advanced JavaScript Concepts",
    startTime: "2025-04-14T14:30:00Z",
    duration: 90,
    status: "scheduled"
  },
  {
    id: "3",
    courseId: "course3",
    title: "React Fundamentals",
    startTime: "2025-04-15T09:00:00Z",
    duration: 120,
    status: "scheduled"
  },
];

// Mock data for recent assignments
const mockAssignments: Assignment[] = [
  {
    id: "1",
    title: "Build a Portfolio Website",
    description: "Create a portfolio website using HTML, CSS, and JavaScript",
    courseId: "course1",
    dueDate: "2025-04-18T23:59:59Z",
    status: "active",
    totalSubmissions: 12,
    createdAt: "2025-04-10T08:00:00Z"
  },
  {
    id: "2",
    title: "JavaScript Algorithms",
    description: "Implement common algorithms in JavaScript",
    courseId: "course2",
    dueDate: "2025-04-20T23:59:59Z",
    status: "active",
    totalSubmissions: 8,
    createdAt: "2025-04-11T10:30:00Z"
  },
  {
    id: "3",
    title: "React State Management",
    description: "Build a simple application using React state management",
    courseId: "course3",
    dueDate: "2025-04-22T23:59:59Z",
    status: "active",
    totalSubmissions: 5,
    createdAt: "2025-04-12T09:15:00Z"
  },
];

const SuperAdminDashboard = () => {
  // These would be real API calls in production
  const { data: courses, isLoading: isLoadingCourses } = useGetData<Course[]>(
    "courses", 
    ["courses"], 
    { initialData: [] }
  );
  
  const { data: assignments, isLoading: isLoadingAssignments } = useGetData<Assignment[]>(
    "assignments", 
    ["assignments"], 
    { initialData: mockAssignments }
  );
  
  const { data: upcomingClasses, isLoading: isLoadingClasses } = useGetData<LiveClass[]>(
    "live-classes", 
    ["live-classes"], 
    { initialData: mockUpcomingClasses }
  );

  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  // Format time for display
  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div>
      <PageHeader 
        title="Admin Dashboard" 
        description="Overview of your learning management system"
        action={{
          label: "View Reports",
          onClick: () => {},
          icon: <ArrowUpRight className="h-4 w-4" />
        }}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {mockStats.map((stat, index) => (
          <StatWidget 
            key={index}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
            change={stat.change}
          />
        ))}
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Upcoming Classes</CardTitle>
          </CardHeader>
          <CardContent>
            {isLoadingClasses ? (
              <div className="flex justify-center py-4">
                <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-blue-500"></div>
              </div>
            ) : upcomingClasses.length ? (
              <div className="space-y-4">
                {upcomingClasses.map((classItem) => (
                  <div key={classItem.id} className="flex items-start justify-between p-3 rounded-lg border hover:bg-gray-50">
                    <div>
                      <h4 className="font-medium">{classItem.title}</h4>
                      <div className="text-sm text-muted-foreground mt-1 flex items-center">
                        <Calendar className="h-3.5 w-3.5 mr-1" />
                        {formatDate(classItem.startTime)} at {formatTime(classItem.startTime)}
                      </div>
                    </div>
                    <div className="bg-blue-100 text-blue-700 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      {classItem.duration} min
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-6 text-muted-foreground">
                No upcoming classes scheduled
              </div>
            )}
            
            <div className="mt-4">
              <Button variant="outline" className="w-full">View All Classes</Button>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Active Assignments</CardTitle>
          </CardHeader>
          <CardContent>
            {isLoadingAssignments ? (
              <div className="flex justify-center py-4">
                <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-blue-500"></div>
              </div>
            ) : assignments.length ? (
              <div className="space-y-4">
                {assignments.map((assignment) => (
                  <div key={assignment.id} className="flex items-start justify-between p-3 rounded-lg border hover:bg-gray-50">
                    <div>
                      <h4 className="font-medium">{assignment.title}</h4>
                      <div className="text-sm text-muted-foreground mt-1">
                        Due: {formatDate(assignment.dueDate)}
                      </div>
                    </div>
                    <div className="bg-yellow-100 text-yellow-700 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      {assignment.totalSubmissions} submissions
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-6 text-muted-foreground">
                No active assignments
              </div>
            )}
            
            <div className="mt-4">
              <Button variant="outline" className="w-full">View All Assignments</Button>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Payment Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-green-50 rounded-lg p-4">
              <div className="text-green-500 font-semibold text-sm">COMPLETED</div>
              <div className="text-2xl font-bold mt-2">$18,420</div>
              <div className="text-sm text-muted-foreground mt-1">32 transactions</div>
            </div>
            
            <div className="bg-yellow-50 rounded-lg p-4">
              <div className="text-yellow-500 font-semibold text-sm">PENDING</div>
              <div className="text-2xl font-bold mt-2">$4,635</div>
              <div className="text-sm text-muted-foreground mt-1">12 transactions</div>
            </div>
            
            <div className="bg-red-50 rounded-lg p-4">
              <div className="text-red-500 font-semibold text-sm">FAILED</div>
              <div className="text-2xl font-bold mt-2">$1,779</div>
              <div className="text-sm text-muted-foreground mt-1">5 transactions</div>
            </div>
          </div>
          
          <div className="mt-6">
            <Button variant="outline" className="w-full">Generate Payment Report</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SuperAdminDashboard;
