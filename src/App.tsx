
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Courses from "./pages/Courses";
import About from "./pages/About";
import TeamPage from "./pages/TeamPage";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import { AuthProvider } from "./context/AuthContext";

// Dashboard imports
import DashboardLayout from "./dashboard/DashboardLayout";
import SuperAdminDashboard from "./dashboard/super-admin/SuperAdminDashboard";
import TeacherDashboard from "./dashboard/teacher/TeacherDashboard";
import StudentDashboard from "./dashboard/student/StudentDashboard";
import ManageTeachers from "./dashboard/super-admin/ManageTeachers";
import ManageStudents from "./dashboard/super-admin/ManageStudents";
import ManageCourses from "./dashboard/super-admin/ManageCourses";
import AssignmentsMonitor from "./dashboard/super-admin/AssignmentsMonitor";
import PaymentOverview from "./dashboard/super-admin/PaymentOverview";
import Reports from "./dashboard/super-admin/Reports";
import AdminNotifications from "./dashboard/super-admin/AdminNotifications";
import AdminSettings from "./dashboard/super-admin/AdminSettings";

// Teacher routes
import TeacherCourses from "./dashboard/teacher/TeacherCourses";
import UploadSyllabus from "./dashboard/teacher/UploadSyllabus";
import ScheduleClass from "./dashboard/teacher/ScheduleClass";
import GiveAssignments from "./dashboard/teacher/GiveAssignments";
import ReviewSubmissions from "./dashboard/teacher/ReviewSubmissions";
import StudentList from "./dashboard/teacher/StudentList";
import TeacherNotifications from "./dashboard/teacher/TeacherNotifications";

// Student routes
import StudentCourses from "./dashboard/student/StudentCourses";
import JoinLiveClass from "./dashboard/student/JoinLiveClass";
import ViewSyllabus from "./dashboard/student/ViewSyllabus";
import SubmitAssignments from "./dashboard/student/SubmitAssignments";
import ViewGrades from "./dashboard/student/ViewGrades";
import MakePayment from "./dashboard/student/MakePayment";
import StudentNotifications from "./dashboard/student/StudentNotifications";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/about" element={<About />} />
            <Route path="/about/team" element={<TeamPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/login" element={<Login />} />
            
            {/* Dashboard routes with role-based access */}
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<Navigate to="/dashboard/admin" replace />} />
              
              {/* Super Admin Routes */}
              <Route path="admin" element={<SuperAdminDashboard />} />
              <Route path="admin/teachers" element={<ManageTeachers />} />
              <Route path="admin/students" element={<ManageStudents />} />
              <Route path="admin/courses" element={<ManageCourses />} />
              <Route path="admin/assignments" element={<AssignmentsMonitor />} />
              <Route path="admin/payments" element={<PaymentOverview />} />
              <Route path="admin/reports" element={<Reports />} />
              <Route path="admin/notifications" element={<AdminNotifications />} />
              <Route path="admin/settings" element={<AdminSettings />} />
              
              {/* Teacher Routes */}
              <Route path="teacher" element={<TeacherDashboard />} />
              <Route path="teacher/courses" element={<TeacherCourses />} />
              <Route path="teacher/syllabus" element={<UploadSyllabus />} />
              <Route path="teacher/schedule" element={<ScheduleClass />} />
              <Route path="teacher/assignments" element={<GiveAssignments />} />
              <Route path="teacher/submissions" element={<ReviewSubmissions />} />
              <Route path="teacher/students" element={<StudentList />} />
              <Route path="teacher/notifications" element={<TeacherNotifications />} />
              
              {/* Student Routes */}
              <Route path="student" element={<StudentDashboard />} />
              <Route path="student/courses" element={<StudentCourses />} />
              <Route path="student/live-class" element={<JoinLiveClass />} />
              <Route path="student/syllabus" element={<ViewSyllabus />} />
              <Route path="student/assignments" element={<SubmitAssignments />} />
              <Route path="student/grades" element={<ViewGrades />} />
              <Route path="student/payment" element={<MakePayment />} />
              <Route path="student/notifications" element={<StudentNotifications />} />
            </Route>
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
