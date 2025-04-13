
import { useState, useEffect } from "react";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import { 
  SidebarProvider, 
  Sidebar, 
  SidebarContent, 
  SidebarHeader,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Bell, LogOut } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { RoleSidebar } from "./RoleSidebar";
import { useToast } from "@/hooks/use-toast";

const DashboardLayout = () => {
  const { user, logout, isLoading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const [isClient, setIsClient] = useState(false);
  const [shouldRedirect, setShouldRedirect] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Only show toast and redirect in useEffect, not during render
  useEffect(() => {
    if (isClient && !isLoading && !user) {
      toast({
        title: "Authentication required",
        description: "Please login to access the dashboard",
        variant: "destructive",
      });
      setShouldRedirect(true);
    }
  }, [isClient, isLoading, user, toast]);

  // Show loading state
  if (isLoading || !isClient) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  // Redirect to login if not authenticated
  if (shouldRedirect) {
    return <Navigate to="/" />;
  }

  const handleLogout = () => {
    logout();
    toast({
      title: "Logged out successfully",
      description: "You have been logged out of your account",
    });
    navigate('/');
  };

  // Figure out which dashboard to show based on role
  const getDashboardRoot = () => {
    if (user?.role === 'super-admin') return '/dashboard/admin';
    if (user?.role === 'teacher') return '/dashboard/teacher';
    if (user?.role === 'student') return '/dashboard/student';
    return '/';
  };

  // Redirect to appropriate dashboard index if at /dashboard
  if (location.pathname === '/dashboard') {
    return <Navigate to={getDashboardRoot()} />;
  }

  return (
    <SidebarProvider defaultOpen={true}>
      <div className="min-h-screen flex w-full bg-gray-50">
        <Sidebar variant="floating" className="border-r border-gray-200">
          <SidebarHeader className="flex flex-col items-center p-4">
            <div className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/1a43599f-f4e1-4ada-9439-efad90c5a949.png" 
                alt="Lilly-Angel Logo" 
                className="h-8"
              />
              <span className="text-lg font-bold">Lilly-Angel LMS</span>
            </div>
            
            <div className="flex items-center justify-between w-full mt-6 pb-4 border-b border-gray-200">
              <div className="flex items-center">
                <Avatar className="h-10 w-10 mr-3">
                  <AvatarImage src={user?.avatar} alt={user?.name} />
                  <AvatarFallback>{user?.name?.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">{user?.name}</div>
                  <div className="text-xs text-gray-500 capitalize">{user?.role.replace('-', ' ')}</div>
                </div>
              </div>
              <Button variant="ghost" size="icon" onClick={handleLogout}>
                <LogOut className="h-5 w-5" />
              </Button>
            </div>
          </SidebarHeader>
          
          <SidebarContent>
            <RoleSidebar />
          </SidebarContent>
          
          <SidebarFooter className="p-4 text-xs text-gray-500">
            <div className="flex justify-between items-center">
              <span>© {new Date().getFullYear()} Lilly-Angel</span>
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
            </div>
          </SidebarFooter>
        </Sidebar>
        
        <div className="flex-1 flex flex-col">
          <header className="bg-white h-16 border-b border-gray-200 flex items-center px-6 sticky top-0 z-10">
            <SidebarTrigger />
            <div className="ml-4 text-lg font-medium">
              {user?.role === 'super-admin' && 'Admin Dashboard'}
              {user?.role === 'teacher' && 'Teacher Dashboard'}
              {user?.role === 'student' && 'Student Dashboard'}
            </div>
            <div className="ml-auto flex items-center space-x-4">
              <Button variant="outline" size="sm" className="hidden md:flex">
                <Bell className="h-4 w-4 mr-2" />
                Notifications
              </Button>
            </div>
          </header>
          
          <main className="flex-1 p-6 overflow-auto">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
