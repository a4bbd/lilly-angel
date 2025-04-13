
import { PageHeader } from "../components/PageHeader";
import { StatWidget } from "../components/StatWidget";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Users, 
  BookOpen, 
  CheckSquare, 
  Calendar, 
  ArrowUpRight, 
  Clock,
  BarChart 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useGetData } from "@/hooks/useApi";
import { Course, Assignment, LiveClass } from "@/types/dashboard";

// Mock data for widgets
const mockStats = [
  { 
    title: "My Courses", 
    value: "8", 
    icon: <BookOpen className="h-6 w-6" />,
  },
  { 
    title: "Total Students", 
    value: "124", 
    icon: <Users className="h-6 w-6" />,
    change: { value: 5, trend: "up" as const } 
  },
  { 
    title: "Active Assignments", 
    value: "12", 
    icon: <CheckSquare className="h-6 w-6" />,
  },
  { 
    title: "Pending Reviews", 
    value: "28", 
    icon: <Clock className="h-6 w-6" />,
    change: { value: 10, trend: "up" as const } 
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
    status: "scheduled",
    meetingUrl: "https://zoom.us/j/1234567890"
  },
  {
    id: "2",
    courseId: "course2",
    title: "Advanced JavaScript Concepts",
    startTime: "2025-04-14T14:30:00Z",
    duration: 90,
    status: "scheduled",
    meetingUrl: "https://zoom.us/j/0987654321"
  },
];

// Mock data for recent assignments
const mockAssignmentStats = [
  { title: "Web Development Basics", submitted: 18, pending: 4, late: 2 },
  { title: "JavaScript Algorithms", submitted: 15, pending: 7, late: 3 },
  { title: "React Components", submitted: 12, pending: 10, late: 1 },
];

const TeacherDashboard = () => {
  // These would be real API calls in production
  const { data: courses, isLoading: isLoadingCourses } = useGetData<Course[]>(
    "teacher/courses", 
    ["teacher-courses"], 
    { initialData: [] }
  );
  
  const { data: upcomingClasses, isLoading: isLoadingClasses } = useGetData<LiveClass[]>(
    "teacher/live-classes", 
    ["teacher-live-classes"], 
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
        title="Teacher Dashboard" 
        description="Manage your courses and students"
        action={{
          label: "Schedule Class",
          onClick: () => {},
          icon: <Calendar className="h-4 w-4" />
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
                    <Button size="sm" variant="outline">Start Class</Button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-6 text-muted-foreground">
                No upcoming classes scheduled
              </div>
            )}
            
            <div className="mt-4">
              <Button variant="outline" className="w-full">Schedule New Class</Button>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Assignment Submissions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockAssignmentStats.map((assignment, index) => (
                <div key={index} className="p-3 rounded-lg border hover:bg-gray-50">
                  <h4 className="font-medium">{assignment.title}</h4>
                  <div className="mt-2 flex space-x-4">
                    <div className="text-center">
                      <div className="text-sm font-medium">{assignment.submitted}</div>
                      <div className="text-xs text-muted-foreground">Submitted</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-medium">{assignment.pending}</div>
                      <div className="text-xs text-muted-foreground">Pending</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-medium">{assignment.late}</div>
                      <div className="text-xs text-muted-foreground">Late</div>
                    </div>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full mt-2 overflow-hidden">
                    <div 
                      className="h-full bg-green-500" 
                      style={{ 
                        width: `${(assignment.submitted / (assignment.submitted + assignment.pending + assignment.late)) * 100}%`,
                        float: 'left'
                      }}
                    />
                    <div 
                      className="h-full bg-yellow-500" 
                      style={{ 
                        width: `${(assignment.pending / (assignment.submitted + assignment.pending + assignment.late)) * 100}%`,
                        float: 'left'
                      }}
                    />
                    <div 
                      className="h-full bg-red-500" 
                      style={{ 
                        width: `${(assignment.late / (assignment.submitted + assignment.pending + assignment.late)) * 100}%`,
                        float: 'left'
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-4">
              <Button variant="outline" className="w-full">View All Assignments</Button>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-lg font-semibold">Student Performance</CardTitle>
          <BarChart className="h-5 w-5 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-green-50 rounded-lg p-4">
                <div className="text-green-500 font-semibold text-sm">HIGH PERFORMERS</div>
                <div className="text-2xl font-bold mt-2">42</div>
                <div className="text-sm text-muted-foreground mt-1">Students above 80%</div>
              </div>
              
              <div className="bg-yellow-50 rounded-lg p-4">
                <div className="text-yellow-500 font-semibold text-sm">AVERAGE</div>
                <div className="text-2xl font-bold mt-2">68</div>
                <div className="text-sm text-muted-foreground mt-1">Students between 60-80%</div>
              </div>
              
              <div className="bg-red-50 rounded-lg p-4">
                <div className="text-red-500 font-semibold text-sm">AT RISK</div>
                <div className="text-2xl font-bold mt-2">14</div>
                <div className="text-sm text-muted-foreground mt-1">Students below 60%</div>
              </div>
            </div>
          </div>
          
          <div className="mt-6">
            <Button variant="outline" className="w-full">Generate Performance Report</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TeacherDashboard;
