
import React from 'react';
import { Award, BookOpen, Users, Trophy } from 'lucide-react';

const Faculty = () => {
  const facultyMembers = [
    {
      name: "Dr. Suresh Mathur",
      subject: "Mathematics",
      qualification: "IIT Delhi, PhD Mathematics",
      experience: "15 Years",
      specialization: "JEE Advanced, Calculus",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      achievements: ["AIR 12 in IIT-JEE", "Published 5 research papers", "Guided 500+ students to IITs"]
    },
    {
      name: "Prof. Anita Singh",
      subject: "Physics",
      qualification: "IIT Bombay, M.Tech Physics",
      experience: "12 Years",
      specialization: "JEE Main/Advanced, Mechanics",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b1d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      achievements: ["Gold Medalist IIT Bombay", "Best Teacher Award 2023", "300+ JEE qualifiers"]
    },
    {
      name: "Dr. Ravi Gupta",
      subject: "Chemistry",
      qualification: "IIT Kanpur, PhD Organic Chemistry",
      experience: "18 Years",
      specialization: "NEET, JEE, Organic Chemistry",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      achievements: ["AIR 8 in IIT-JEE", "Research Scientist DRDO", "400+ NEET selections"]
    },
    {
      name: "Mrs. Kavita Sharma",
      subject: "Biology",
      qualification: "AIIMS Delhi, MBBS, MD",
      experience: "10 Years",
      specialization: "NEET, Medical Entrance",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      achievements: ["AIIMS Topper", "Practicing Doctor", "250+ NEET qualifiers"]
    },
    {
      name: "Prof. Vikram Joshi",
      subject: "General Studies",
      qualification: "JNU Delhi, MA Political Science",
      experience: "20 Years",
      specialization: "UPSC, Current Affairs",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      achievements: ["UPSC CSE Rank 25", "Author of 3 books", "100+ IAS selections"]
    },
    {
      name: "Dr. Meera Reddy",
      subject: "English",
      qualification: "Oxford University, PhD Literature",
      experience: "14 Years",
      specialization: "UPSC, Banking, Communication",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      achievements: ["Rhodes Scholar", "BBC Contributor", "Expert in Business English"]
    }
  ];

  const stats = [
    { icon: Users, number: "50+", label: "Expert Faculty" },
    { icon: Award, number: "25+", label: "IIT/IIM Alumni" },
    { icon: BookOpen, number: "15+", label: "Average Experience" },
    { icon: Trophy, number: "95%", label: "Student Success Rate" }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Our <span className="text-blue-600">Expert Faculty</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn from the best minds in education - IIT, IIM, AIIMS alumni and industry experts dedicated to your success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center">
                <stat.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facultyMembers.map((faculty, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-6">
                  <img 
                    src={faculty.image} 
                    alt={faculty.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{faculty.name}</h3>
                  <p className="text-blue-600 font-semibold">{faculty.subject}</p>
                </div>

                <div className="space-y-3 mb-6">
                  <div>
                    <span className="text-sm font-semibold text-gray-700">Qualification: </span>
                    <span className="text-sm text-gray-600">{faculty.qualification}</span>
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-gray-700">Experience: </span>
                    <span className="text-sm text-gray-600">{faculty.experience}</span>
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-gray-700">Specialization: </span>
                    <span className="text-sm text-gray-600">{faculty.specialization}</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {faculty.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="text-xs text-gray-600 flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Teaching Philosophy</h2>
            <p className="text-xl text-gray-600">
              What makes our faculty exceptional
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <BookOpen className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Concept Clarity</h3>
              <p className="text-gray-600">
                Our faculty focuses on building strong conceptual foundations rather than rote learning, ensuring deep understanding of subjects.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Personal Attention</h3>
              <p className="text-gray-600">
                Small batch sizes allow our teachers to provide individual attention and customize teaching methods for each student's needs.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <Trophy className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Result Oriented</h3>
              <p className="text-gray-600">
                With proven track records and years of experience, our faculty members are committed to your success in competitive exams.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faculty;
