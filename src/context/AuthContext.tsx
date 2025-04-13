
import React, { createContext, useContext, useState, useEffect } from "react";
import { User } from "@/types/dashboard";

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<User | null>;
  logout: () => void;
  checkRole: (roles: string[]) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock user for development
const MOCK_USERS: User[] = [
  {
    id: "1",
    name: "Admin User",
    email: "admin@example.com",
    role: "super-admin",
    avatar: "https://ui-avatars.com/api/?name=Admin+User&background=6366f1&color=fff",
    createdAt: new Date().toISOString(),
  },
  {
    id: "2",
    name: "Teacher User",
    email: "teacher@example.com",
    role: "teacher",
    avatar: "https://ui-avatars.com/api/?name=Teacher+User&background=3b82f6&color=fff",
    createdAt: new Date().toISOString(),
  },
  {
    id: "3",
    name: "Student User",
    email: "student@example.com",
    role: "student",
    avatar: "https://ui-avatars.com/api/?name=Student+User&background=10b981&color=fff",
    createdAt: new Date().toISOString(),
  },
];

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for existing session
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<User | null> => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Find user with matching email (just for demo)
      const foundUser = MOCK_USERS.find(u => u.email.toLowerCase() === email.toLowerCase());
      if (!foundUser) {
        throw new Error("Invalid credentials");
      }
      
      // In real app, validate password here
      
      setUser(foundUser);
      localStorage.setItem("user", JSON.stringify(foundUser));
      return foundUser;
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const checkRole = (roles: string[]) => {
    if (!user) return false;
    return roles.includes(user.role);
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout, checkRole }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
