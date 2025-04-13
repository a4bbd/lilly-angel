
export interface User {
  id: string;
  name: string;
  email: string;
  role: "super-admin" | "teacher" | "student";
  avatar?: string;
  createdAt: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  teacherId: string;
  category: string;
  imageUrl?: string;
  status: "active" | "draft" | "archived";
  enrolledStudents: number;
  createdAt: string;
}

export interface Assignment {
  id: string;
  title: string;
  description: string;
  courseId: string;
  dueDate: string;
  status: "active" | "closed" | "graded";
  totalSubmissions: number;
  createdAt: string;
}

export interface Submission {
  id: string;
  assignmentId: string;
  studentId: string;
  submitDate: string;
  status: "submitted" | "late" | "graded";
  grade?: number;
  feedback?: string;
}

export interface Payment {
  id: string;
  studentId: string;
  courseId: string;
  amount: number;
  status: "paid" | "pending" | "failed";
  date: string;
}

export interface LiveClass {
  id: string;
  courseId: string;
  title: string;
  startTime: string;
  duration: number; // in minutes
  status: "scheduled" | "live" | "completed";
  meetingUrl?: string;
}

export interface Notification {
  id: string;
  userId: string;
  title: string;
  message: string;
  type: "info" | "warning" | "success" | "error";
  isRead: boolean;
  createdAt: string;
}

export interface SidebarItem {
  title: string;
  path: string;
  icon: React.ComponentType<any>;
}

export interface Widget {
  title: string;
  value: string | number;
  icon: React.ComponentType<any>;
  change?: {
    value: number;
    trend: "up" | "down" | "neutral";
  };
  color?: "default" | "blue" | "green" | "yellow" | "red" | "purple";
}
