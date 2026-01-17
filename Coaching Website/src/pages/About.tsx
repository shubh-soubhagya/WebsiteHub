
import React from 'react';
import { Award, Users, BookOpen, Target, GraduationCap, Trophy } from 'lucide-react';

const About = () => {
  const achievements = [
    { icon: Users, title: "5000+", subtitle: "Students Enrolled" },
    { icon: Award, title: "95%", subtitle: "Success Rate" },
    { icon: BookOpen, title: "50+", subtitle: "Expert Faculty" },
    { icon: Target, title: "15+", subtitle: "Years Experience" }
  ];

  const values = [
    {
      title: "Academic Excellence",
      description: "We strive for the highest standards in education and maintain rigorous academic protocols."
    },
    {
      title: "Individual Attention",
      description: "Every student receives personalized guidance to unlock their full potential."
    },
    {
      title: "Innovation in Teaching",
      description: "We combine traditional methods with cutting-edge technology for effective learning."
    },
    {
      title: "Character Building",
      description: "Beyond academics, we focus on developing strong moral values and leadership qualities."
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              About <span className="text-blue-600">Excellence Academy</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Founded with a vision to transform India's education landscape, we have been nurturing dreams and shaping futures for over 15 years.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center">
                <achievement.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">{achievement.title}</div>
                <div className="text-gray-600">{achievement.subtitle}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6">
                Excellence Academy was founded in 2009 with a simple yet powerful mission: to provide world-class education that empowers students to achieve their dreams. What started as a small coaching center has now grown into one of India's most trusted educational institutions.
              </p>
              <p className="text-gray-600 mb-6">
                Our founders, experienced educators and IIT alumni, recognized the need for quality coaching that goes beyond rote learning. They envisioned an institute that would nurture critical thinking, creativity, and confidence in every student.
              </p>
              <p className="text-gray-600">
                Today, we are proud to have guided thousands of students to success in JEE, NEET, UPSC, and other competitive examinations, while maintaining our core values of integrity, excellence, and student-first approach.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Our campus" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do at Excellence Academy
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600">
              Meet the visionaries behind Excellence Academy's success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Rajesh Kumar",
                position: "Founder & Director",
                education: "IIT Delhi, PhD Mathematics",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
              },
              {
                name: "Prof. Priya Sharma",
                position: "Academic Head",
                education: "IIT Bombay, M.Tech Physics",
                image: "https://images.unsplash.com/photo-1494790108755-2616b612b1d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
              },
              {
                name: "Dr. Amit Patel",
                position: "Research Director",
                education: "IIM Ahmedabad, PhD Education",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
              }
            ].map((leader, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 text-center">
                <img 
                  src={leader.image} 
                  alt={leader.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{leader.name}</h3>
                <p className="text-blue-600 font-semibold mb-2">{leader.position}</p>
                <p className="text-gray-600 text-sm">{leader.education}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
