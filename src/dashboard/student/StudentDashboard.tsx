
import { PageHeader } from "../components/PageHeader";
import { StatWidget } from "../components/StatWidget";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BookOpen, 
  Clock, 
  ArrowUpRight,
  CheckCircle, 
  Calendar, 
  Video,
  FileText,
  AlertCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useGetData } from "@/hooks/useApi";
import { Course, Assignment, LiveClass } from "@/types/dashboard";
import { Progress } from "@/components/ui/progress";

// Mock data for widgets
const mockStats = [
  { 
    title: "Enrolled Courses", 
    value: "4", 
    icon: <BookOpen className="h-6 w-6" />,
  },
  { 
    title: "Completed Assignments", 
    value: "18", 
    icon: <CheckCircle className="h-6 w-6" />,
    change: { value: 5, trend: "up" as const } 
  },
  { 
    title: "Pending Assignments", 
    value: "3", 
    icon: <Clock className="h-6 w-6" />,
  },
  { 
    title: "Average Grade", 
    value: "92%", 
    icon: <ArrowUpRight className="h-6 w-6" />,
    change: { value: 2, trend: "up" as const } 
  },
];

// Mock data for today's classes
const mockTodayClass = {
  id: "1",
  courseId: "course1",
  title: "Introduction to Web Development",
  startTime: "2025-04-13T10:00:00Z",
  duration: 60,
  status: "scheduled",
  meetingUrl: "https://zoom.us/j/1234567890",
  teacher: "Teacher User"
};

// Mock data for upcoming assignments
const mockUpcomingAssignments = [
  { 
    id: "1", 
    title: "HTML & CSS Practice", 
    dueDate: "2025-04-15T23:59:59Z", 
    courseName: "Web Development Basics" 
  },
  { 
    id: "2", 
    title: "JavaScript Functions", 
    dueDate: "2025-04-18T23:59:59Z", 
    courseName: "JavaScript Fundamentals" 
  },
  { 
    id: "3", 
    title: "React State Management", 
    dueDate: "2025-04-20T23:59:59Z", 
    courseName: "React Basics" 
  },
];

// Mock data for course progress
const mockCourseProgress = [
  { name: "Web Development Basics", progress: 85 },
  { name: "JavaScript Fundamentals", progress: 67 },
  { name: "React Basics", progress: 40 },
  { name: "Node.js & Express", progress: 25 },
];

const StudentDashboard = () => {
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

  // Calculate days remaining
  const getDaysRemaining = (dueDate: string) => {
    const now = new Date();
    const due = new Date(dueDate);
    const diffTime = due.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <div>
      <PageHeader 
        title="Student Dashboard" 
        description="Track your courses and assignments"
        action={{
          label: "Join Live Class",
          onClick: () => {},
          icon: <Video className="h-4 w-4" />
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
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Today's Class</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="p-4 rounded-lg border bg-blue-50 border-blue-100">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white">
                  <Video className="h-5 w-5" />
                </div>
                <div className="ml-3">
                  <h4 className="font-medium">{mockTodayClass.title}</h4>
                  <p className="text-sm text-blue-600">With {mockTodayClass.teacher}</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="h-4 w-4 mr-1" />
                  {formatTime(mockTodayClass.startTime)}
                </div>
                <div className="text-sm text-gray-600">
                  {mockTodayClass.duration} minutes
                </div>
              </div>
              
              <Button className="w-full">Join Live Class</Button>
            </div>
            
            <div className="mt-4 text-center text-sm text-muted-foreground">
              Make sure your camera and microphone are working before joining
            </div>
          </CardContent>
        </Card>
        
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Upcoming Assignments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockUpcomingAssignments.map((assignment) => {
                const daysLeft = getDaysRemaining(assignment.dueDate);
                const isUrgent = daysLeft <= 2;
                
                return (
                  <div 
                    key={assignment.id} 
                    className={`flex items-start justify-between p-3 rounded-lg border hover:bg-gray-50 ${
                      isUrgent ? 'border-red-200 bg-red-50' : ''
                    }`}
                  >
                    <div>
                      <h4 className="font-medium flex items-center">
                        {assignment.title}
                        {isUrgent && (
                          <AlertCircle className="h-4 w-4 text-red-500 ml-2" />
                        )}
                      </h4>
                      <div className="text-sm text-muted-foreground mt-1">
                        {assignment.courseName}
                      </div>
                    </div>
                    <div className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${
                      isUrgent 
                        ? 'bg-red-100 text-red-700' 
                        : 'bg-blue-100 text-blue-700'
                    }`}>
                      Due: {formatDate(assignment.dueDate)}
                      {daysLeft > 0 && ` (${daysLeft} days left)`}
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className="mt-4">
              <Button variant="outline" className="w-full">View All Assignments</Button>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg font-semibold">Course Progress</CardTitle>
            <BookOpen className="h-5 w-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockCourseProgress.map((course, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between text-sm font-medium">
                    <span>{course.name}</span>
                    <span>{course.progress}%</span>
                  </div>
                  <Progress value={course.progress} className="h-2" />
                </div>
              ))}
            </div>
            
            <div className="mt-6">
              <Button variant="outline" className="w-full">View My Courses</Button>
            </div>
          </CardContent>
        </Card>
        
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Payment Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border rounded-lg p-4 bg-green-50 border-green-100">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <div className="text-green-700 font-medium">Web Development</div>
                </div>
                <div className="flex justify-between mt-2 text-sm">
                  <span className="text-muted-foreground">Paid on:</span>
                  <span className="font-medium">Apr 5, 2025</span>
                </div>
              </div>
              
              <div className="border rounded-lg p-4">
                <div className="flex items-center">
                  <FileText className="h-5 w-5 text-blue-500 mr-2" />
                  <div className="font-medium">JavaScript Masterclass</div>
                </div>
                <div className="flex justify-between mt-2 text-sm">
                  <span className="text-muted-foreground">Due on:</span>
                  <span className="font-medium">Apr 18, 2025</span>
                </div>
                <div className="mt-3">
                  <Button size="sm" className="w-full">Make Payment</Button>
                </div>
              </div>
            </div>
            
            <div className="mt-4">
              <Button variant="outline" className="w-full">View Payment History</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StudentDashboard;
