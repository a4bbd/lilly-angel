
import { useLocation } from "react-router-dom";
import { 
  SidebarMenu, 
  SidebarMenuItem, 
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupLabel 
} from "@/components/ui/sidebar";
import {
  LayoutDashboard,
  Users,
  GraduationCap,
  BookOpen,
  ClipboardCheck,
  CreditCard,
  BarChart2,
  Bell,
  Settings,
  FileText,
  Calendar,
  PenTool,
  CheckSquare,
  List,
  Video,
  Eye,
  Send,
  Award,
  CreditCard as Payment
} from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { Link } from "react-router-dom";

export const RoleSidebar = () => {
  const { user } = useAuth();
  const location = useLocation();
  
  // Super Admin sidebar items
  const adminItems = [
    { icon: LayoutDashboard, title: "Dashboard", path: "/dashboard/admin" },
    { icon: Users, title: "Manage Teachers", path: "/dashboard/admin/teachers" },
    { icon: GraduationCap, title: "Manage Students", path: "/dashboard/admin/students" },
    { icon: BookOpen, title: "Manage Courses", path: "/dashboard/admin/courses" },
    { icon: ClipboardCheck, title: "Assignments Monitor", path: "/dashboard/admin/assignments" },
    { icon: CreditCard, title: "Payment Overview", path: "/dashboard/admin/payments" },
    { icon: BarChart2, title: "Reports", path: "/dashboard/admin/reports" },
    { icon: Bell, title: "Notifications", path: "/dashboard/admin/notifications" },
    { icon: Settings, title: "Settings", path: "/dashboard/admin/settings" },
  ];
  
  // Teacher sidebar items
  const teacherItems = [
    { icon: LayoutDashboard, title: "Dashboard", path: "/dashboard/teacher" },
    { icon: BookOpen, title: "My Courses", path: "/dashboard/teacher/courses" },
    { icon: FileText, title: "Upload Syllabus", path: "/dashboard/teacher/syllabus" },
    { icon: Calendar, title: "Schedule Class", path: "/dashboard/teacher/schedule" },
    { icon: PenTool, title: "Give Assignments", path: "/dashboard/teacher/assignments" },
    { icon: CheckSquare, title: "Review Submissions", path: "/dashboard/teacher/submissions" },
    { icon: Users, title: "Student List", path: "/dashboard/teacher/students" },
    { icon: Bell, title: "Notifications", path: "/dashboard/teacher/notifications" },
  ];
  
  // Student sidebar items
  const studentItems = [
    { icon: LayoutDashboard, title: "Dashboard", path: "/dashboard/student" },
    { icon: BookOpen, title: "My Courses", path: "/dashboard/student/courses" },
    { icon: Video, title: "Join Live Class", path: "/dashboard/student/live-class" },
    { icon: Eye, title: "View Syllabus", path: "/dashboard/student/syllabus" },
    { icon: Send, title: "Submit Assignments", path: "/dashboard/student/assignments" },
    { icon: Award, title: "View Grades", path: "/dashboard/student/grades" },
    { icon: Payment, title: "Make Payment", path: "/dashboard/student/payment" },
    { icon: Bell, title: "Notifications", path: "/dashboard/student/notifications" },
  ];
  
  // Determine which items to show based on user role
  let items = [];
  let roleLabel = "";
  
  if (user?.role === "super-admin") {
    items = adminItems;
    roleLabel = "Admin Dashboard";
  } else if (user?.role === "teacher") {
    items = teacherItems;
    roleLabel = "Teacher Dashboard";
  } else if (user?.role === "student") {
    items = studentItems;
    roleLabel = "Student Dashboard";
  }
  
  return (
    <SidebarGroup>
      <SidebarGroupLabel>{roleLabel}</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <SidebarMenuItem key={item.path}>
            <SidebarMenuButton
              asChild
              isActive={location.pathname === item.path}
              tooltip={item.title}
            >
              <Link to={item.path}>
                <item.icon className="h-5 w-5" />
                <span>{item.title}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
};
