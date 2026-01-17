
import React from 'react';
import { BookOpen, Clock, Users, Award } from 'lucide-react';

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: "JEE Main & Advanced",
      description: "Comprehensive preparation for India's toughest engineering entrance exam",
      duration: "2 Years",
      students: "1200+",
      successRate: "98%",
      subjects: ["Mathematics", "Physics", "Chemistry"],
      color: "bg-blue-600",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 2,
      title: "NEET UG",
      description: "Complete medical entrance exam preparation with live practicals",
      duration: "2 Years",
      students: "800+",
      successRate: "96%",
      subjects: ["Biology", "Chemistry", "Physics"],
      color: "bg-green-600",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 3,
      title: "UPSC Civil Services",
      description: "IAS, IPS & IFS preparation with current affairs and personality development",
      duration: "1 Year",
      students: "500+",
      successRate: "85%",
      subjects: ["General Studies", "Optional", "Essay"],
      color: "bg-purple-600",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 4,
      title: "Class 10th & 12th Boards",
      description: "CBSE, ICSE & State board preparation with conceptual clarity",
      duration: "1 Year",
      students: "2000+",
      successRate: "99%",
      subjects: ["All Subjects", "Practicals", "Projects"],
      color: "bg-orange-600",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 5,
      title: "Banking & SSC",
      description: "SBI PO, IBPS, SSC CGL, CHSL and other government job preparations",
      duration: "6 Months",
      students: "1500+",
      successRate: "92%",
      subjects: ["Quantitative Aptitude", "Reasoning", "English"],
      color: "bg-teal-600",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 6,
      title: "NDA & CDS",
      description: "Defense services preparation with physical training and personality development",
      duration: "8 Months",
      students: "300+",
      successRate: "88%",
      subjects: ["Mathematics", "General Ability", "English"],
      color: "bg-red-600",
      image: "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Courses</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive coaching programs designed to help you excel in India's most competitive examinations
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              {/* Course Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute top-4 left-4 ${course.color} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                  Popular
                </div>
              </div>

              {/* Course Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>

                {/* Course Stats */}
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="text-center">
                    <Clock className="h-5 w-5 text-blue-600 mx-auto mb-1" />
                    <div className="text-sm font-semibold text-gray-900">{course.duration}</div>
                    <div className="text-xs text-gray-500">Duration</div>
                  </div>
                  <div className="text-center">
                    <Users className="h-5 w-5 text-green-600 mx-auto mb-1" />
                    <div className="text-sm font-semibold text-gray-900">{course.students}</div>
                    <div className="text-xs text-gray-500">Students</div>
                  </div>
                  <div className="text-center">
                    <Award className="h-5 w-5 text-purple-600 mx-auto mb-1" />
                    <div className="text-sm font-semibold text-gray-900">{course.successRate}</div>
                    <div className="text-xs text-gray-500">Success</div>
                  </div>
                </div>

                {/* Subjects */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {course.subjects.map((subject, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs">
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button className={`w-full ${course.color} text-white py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity duration-200`}>
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
