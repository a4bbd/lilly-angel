
import React, { useEffect } from 'react';
import { LoginComponent } from '@/components/LoginComponent';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AuthProvider, useAuth } from '@/context/AuthContext';

const LoginContent = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (user) {
      // If already logged in, redirect to the appropriate dashboard
      console.log("User already logged in, redirecting to dashboard. Role:", user.role);
      
      if (user.role === 'super-admin') {
        navigate('/dashboard/admin');
      } else if (user.role === 'teacher') {
        navigate('/dashboard/teacher');
      } else if (user.role === 'student') {
        navigate('/dashboard/student');
      } else {
        navigate('/dashboard');
      }
    }
  }, [user, navigate]);
  
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white py-4 shadow-sm">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/1a43599f-f4e1-4ada-9439-efad90c5a949.png" 
              alt="Lilly-Angel Logo" 
              className="h-8 mr-2"
            />
            <span className="text-lg font-bold">Lilly-Angel</span>
          </Link>
          <Link to="/" className="text-sm text-blue-600 hover:underline">
            Return to Home
          </Link>
        </div>
      </header>
      
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-4xl flex flex-col md:flex-row gap-8 items-center">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Learning Management System
            </h1>
            <p className="text-gray-600 mb-6">
              Welcome to Lilly-Angel's integrated learning platform. Access your courses, assignments, and educational resources all in one place.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <div className="rounded-full bg-green-100 p-1 mr-3">
                  <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Access your courses anytime, anywhere</span>
              </li>
              <li className="flex items-center">
                <div className="rounded-full bg-green-100 p-1 mr-3">
                  <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Track your progress and assignments</span>
              </li>
              <li className="flex items-center">
                <div className="rounded-full bg-green-100 p-1 mr-3">
                  <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Interact with teachers and fellow students</span>
              </li>
            </ul>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <LoginComponent />
          </motion.div>
        </div>
      </main>
      
      <footer className="bg-white py-4 border-t">
        <div className="container mx-auto px-4 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Lilly-Angel. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

const Login = () => {
  return (
    <AuthProvider>
      <LoginContent />
    </AuthProvider>
  );
};

export default Login;
