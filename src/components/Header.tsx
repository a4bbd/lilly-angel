import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Search, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from '@/lib/utils';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-white py-4 shadow-sm">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <div className="flex items-center">
            <Link to="/">
              <img 
                src="/lovable-uploads/1a43599f-f4e1-4ada-9439-efad90c5a949.png" 
                alt="Lilly-Angel Logo" 
                className="h-12 mr-2"
              />
            </Link>
          </div>
          
          <nav className="ml-10 hidden md:block">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:text-blue-600 focus:outline-none px-4 py-2">
                    Home
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Courses</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[300px] p-4 lg:w-[400px] lg:grid-cols-1 gap-3">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/courses"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">All Courses</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Browse our complete course catalog
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/courses?category=health"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Health & Safety</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Courses for health and safety compliance
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/courses?category=security"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Security Training</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Professional security certification courses
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[300px] p-4 lg:w-[400px] lg:grid-cols-1 gap-3">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/about"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Our Vision & Mission</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Learn about our company's vision and mission
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/about/team"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Our Team</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Meet the people behind Lilly-Angel
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link to="/tutors" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:text-blue-600 focus:outline-none px-4 py-2">
                    Tutors
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link to="/contact" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:text-blue-600 focus:outline-none px-4 py-2">
                    Contact
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link to="/faq" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:text-blue-600 focus:outline-none px-4 py-2">
                    FAQ
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white shadow-md z-50 md:hidden">
            <nav className="container mx-auto py-4">
              <ul className="space-y-3">
                <li><Link to="/" className="block text-gray-600 hover:text-blue-600 transition-colors py-2" onClick={toggleMenu}>Home</Link></li>
                <li><Link to="/courses" className="block text-gray-600 hover:text-blue-600 transition-colors py-2" onClick={toggleMenu}>Courses</Link></li>
                <li><Link to="/about" className="block text-gray-600 hover:text-blue-600 transition-colors py-2" onClick={toggleMenu}>About Us</Link></li>
                <li><Link to="/tutors" className="block text-gray-600 hover:text-blue-600 transition-colors py-2" onClick={toggleMenu}>Tutors</Link></li>
                <li><Link to="/contact" className="block text-gray-600 hover:text-blue-600 transition-colors py-2" onClick={toggleMenu}>Contact</Link></li>
                <li><Link to="/faq" className="block text-gray-600 hover:text-blue-600 transition-colors py-2" onClick={toggleMenu}>FAQ</Link></li>
                <li><Link to="/login" className="block text-gray-600 hover:text-blue-600 transition-colors py-2" onClick={toggleMenu}>Log In</Link></li>
              </ul>
            </nav>
          </div>
        )}
        
        <div className="hidden md:flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
            <input 
              type="text" 
              placeholder="Search courses..." 
              className="pl-8 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-400 w-40 lg:w-60"
            />
          </div>
          <Link to="/login">
            <Button variant="outline" className="hidden md:inline-flex">Log In</Button>
          </Link>
          <Link to="/login">
            <Button className="bg-blue-600 hover:bg-blue-700">Sign Up</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
