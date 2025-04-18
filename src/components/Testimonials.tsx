
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { QuoteIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface TestimonialProps {
  avatar: string;
  initials: string;
  name: string;
  role: string;
  content: string;
  index: number;
}

const TestimonialCard: React.FC<TestimonialProps> = ({
  avatar,
  initials,
  name,
  role,
  content,
  index
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="h-full border-none shadow-lg bg-gradient-to-br from-white to-gray-50 overflow-hidden">
        <CardContent className="p-6 relative">
          <QuoteIcon className="absolute top-6 right-6 h-12 w-12 text-gray-100" />
          
          <div className="mb-4 relative z-10">
            <p className="text-gray-700 italic relative z-10">{content}</p>
          </div>
          
          <div className="flex items-center mt-6">
            <Avatar className="h-12 w-12 mr-4 border-2 border-primary/20">
              <AvatarImage src={avatar} alt={name} />
              <AvatarFallback className="bg-primary/20 text-primary font-medium">{initials}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold text-navy-dark">{name}</p>
              <p className="text-sm text-gray-600">{role}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const MotivationalStep = ({ 
  number, 
  title, 
  description, 
  image, 
  reversed = false 
}: { 
  number: string; 
  title: string; 
  description: string; 
  image: string; 
  reversed?: boolean;
}) => {
  return (
    <motion.div 
      className={`flex flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 mb-12 items-center`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="flex-1">
        {!reversed && (
          <motion.div 
            className="text-8xl font-bold text-purple-400 mb-4"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {number}
          </motion.div>
        )}
        <h3 className="text-2xl font-bold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
      <div className="flex-1 flex justify-center">
        {reversed && (
          <motion.div 
            className="text-8xl font-bold text-purple-400 mr-8 hidden md:block"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {number}
          </motion.div>
        )}
        <div className="rounded-lg overflow-hidden shadow-lg w-full max-w-md">
          <img src={image} alt={title} className="w-full h-auto" />
        </div>
      </div>
    </motion.div>
  );
};

const FAQItem = ({ question, isOpen, onClick }: { question: string; isOpen: boolean; onClick: () => void }) => {
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left font-medium text-gray-800 focus:outline-none"
        onClick={onClick}
      >
        <span>{question}</span>
        <svg
          className={`w-5 h-5 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </div>
  );
};

const Testimonials = () => {
  const [openFAQ, setOpenFAQ] = React.useState<number | null>(null);

  const testimonials = [
    {
      id: 1,
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
      initials: "JD",
      name: "John Doe",
      role: "Marketing Specialist",
      content: "The courses offered here have transformed my career prospects. I've learned practical skills that I could immediately apply in my workplace, resulting in a promotion within 3 months!"
    }, 
    {
      id: 2,
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80",
      initials: "AS",
      name: "Amanda Smith",
      role: "UX Designer",
      content: "The instructors here are top-notch professionals who truly care about student success. The course content is constantly updated to match industry standards, which is crucial in my field."
    }, 
    {
      id: 3,
      avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      initials: "ML",
      name: "Michael Lee",
      role: "Developer",
      content: "I've taken courses from many platforms, but the interactive learning approach here sets it apart. The combination of video lessons, practical exercises, and community support creates an unmatched learning experience."
    }, 
    {
      id: 4,
      avatar: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      initials: "SJ",
      name: "Sarah Johnson",
      role: "Data Analyst",
      content: "The flexibility of learning at my own pace while still having access to instructor support made all the difference. I was able to balance my full-time job and family responsibilities while advancing my skills."
    }
  ];

  const motivationalSteps = [
    {
      number: "1",
      title: "Unleashing Your Inner Champion",
      description: "Embrace your untapped potential, push your limits, and unlock the champion within you. This motivational title encourages you to tap into your inner strength, overcome obstacles, and strive for excellence in all areas of your life.",
      image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
    },
    {
      number: "2",
      title: "Embracing the Journey of Growth",
      description: "Life is a constant journey of growth and self-improvement. This motivational title reminds you to embrace challenges, learn from failures, and celebrate successes along the way. Embrace the journey of personal and professional development.",
      image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
    {
      number: "3",
      title: "Igniting the Spark of Possibility",
      description: "Within each of us lies a spark of possibility waiting to be ignited. This motivational title inspires you to dream big, believe in yourself, and pursue your passions with unwavering determination.",
      image: "https://images.unsplash.com/photo-1492681290082-e932832941e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
    }
  ];

  const faqs = [
    {
      question: "What is a Learning Management System (LMS)?",
      answer: "A Learning Management System (LMS) is a software application for the administration, documentation, tracking, reporting, automation, and delivery of educational courses, training programs, or learning and development programs."
    },
    {
      question: "What are the key features of an LMS?",
      answer: "Key features of an LMS typically include course management, content creation and management, assessment tools, progress tracking, reporting and analytics, mobile compatibility, social learning features, gamification, and integration capabilities."
    },
    {
      question: "How can an LMS benefit educational institutions and organizations?",
      answer: "An LMS can benefit educational institutions and organizations by centralizing learning content, reducing training costs, enabling consistent training delivery, providing detailed progress tracking, supporting remote learning, facilitating compliance management, and enabling self-paced learning."
    },
    {
      question: "Is an LMS suitable for both academic and corporate settings?",
      answer: "Yes, an LMS is suitable for both academic and corporate settings. In academic settings, it supports course delivery, student engagement, and assessment. In corporate settings, it facilitates employee onboarding, professional development, compliance training, and performance tracking."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const blogPosts = [
    {
      category: "Education",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      title: "AI-Based learning is the future of Corporate Training",
      description: "The corporate world is slowly stepping into the dimension of Artificial Intelligence...",
      author: {
        name: "John Doe",
        avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        date: "Wed, 22 Dec 2021"
      }
    },
    {
      category: "Lifestyle",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      title: "Balance your priorities in life and enjoy a beautiful life",
      description: "Living a productive and meaningful life is a balancing act. With the pressures of...",
      author: {
        name: "Jane Doe",
        avatar: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        date: "Wed, 22 Dec 2021"
      }
    },
    {
      category: "Education",
      image: "https://images.unsplash.com/photo-1587088155172-e9355df99c30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80",
      title: "Parent Power: Will We Choose Timebrocks or Partnerships?",
      description: "After two tumultuous years of intermittent school closures, parents and caregivers...",
      author: {
        name: "John Doe",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        date: "Wed, 22 Dec 2021"
      }
    }
  ];

  return (
    <div>
      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy-dark relative inline-block">
              <span className="relative z-10">What Our Students Say</span>
              <span className="absolute bottom-0 left-0 w-full h-3 bg-orange-DEFAULT/20 -z-10 transform -rotate-1"></span>
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Discover why thousands of learners trust our platform for their educational journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                avatar={testimonial.avatar}
                initials={testimonial.initials}
                name={testimonial.name}
                role={testimonial.role}
                content={testimonial.content}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Motivational Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy-dark">
              Think more clearly
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Gather your thoughts, and make your decisions clearly
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            {motivationalSteps.map((step, index) => (
              <MotivationalStep
                key={index}
                number={step.number}
                title={step.title}
                description={step.description}
                image={step.image}
                reversed={index % 2 !== 0}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy-dark">
              Frequently asked questions
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Have something to know? Check here if you have any questions about us.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <FAQItem
                  question={faq.question}
                  isOpen={openFAQ === index}
                  onClick={() => toggleFAQ(index)}
                />
              </motion.div>
            ))}
            
            <motion.div 
              className="mt-8 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Button 
                variant="default" 
                className="bg-purple-600 hover:bg-purple-700"
              >
                See more
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy-dark">
              Visit our latest blogs
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Visit our valuable articles to get more information.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div 
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="relative">
                  <span className="absolute top-4 left-4 bg-white py-1 px-3 text-xs font-medium rounded-full text-indigo-600">
                    {post.category}
                  </span>
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 text-navy-dark hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {post.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img 
                        src={post.author.avatar} 
                        alt={post.author.name} 
                        className="w-8 h-8 rounded-full mr-2"
                      />
                      <span className="text-sm text-gray-700">{post.author.name}</span>
                    </div>
                    <span className="text-xs text-gray-500">{post.author.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="bg-purple-600 rounded-2xl p-8 text-white overflow-hidden relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="max-w-md relative z-10">
                <h3 className="text-2xl font-bold mb-4">Join now to start learning</h3>
                <p className="mb-6">Learn from our quality instructors!</p>
                <Button 
                  variant="outline" 
                  className="bg-white text-purple-700 hover:bg-gray-100 border-none"
                >
                  Get started
                </Button>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1613618822854-0d33a1bf351e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" 
                alt="Student" 
                className="absolute right-0 bottom-0 h-full max-w-none object-cover opacity-90"
              />
            </motion.div>
            
            <motion.div 
              className="bg-indigo-600 rounded-2xl p-8 text-white overflow-hidden relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="max-w-md relative z-10">
                <h3 className="text-2xl font-bold mb-4">Become a new instructor</h3>
                <p className="mb-6">Teach thousands of students and earn money!</p>
                <Button 
                  variant="outline"
                  className="bg-white text-indigo-700 hover:bg-gray-100 border-none"
                >
                  Join now
                </Button>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1590650153855-d9e808231d41?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                alt="Instructor" 
                className="absolute right-0 bottom-0 h-full max-w-none object-cover opacity-90"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
