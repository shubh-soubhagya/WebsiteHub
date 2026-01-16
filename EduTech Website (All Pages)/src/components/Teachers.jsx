import React from 'react';
import { Award, Users, CheckCircle } from 'lucide-react';

const Teachers = () => {
  const teachers = [
    {
      name: 'Dr. Rajesh Kumar',
      role: 'UPSC Expert & History Specialist',
      experience: '20+ Years',
      students: '5000+',
      expertise: ['Ancient History', 'Modern India', 'Art & Culture'],
      image: 'RK'
    },
    {
      name: 'Prof. Anita Singh',
      role: 'BPSC Topper & Strategy Mentor',
      experience: '15+ Years',
      students: '3500+',
      expertise: ['General Studies', 'Current Affairs', 'Answer Writing'],
      image: 'AS'
    }
  ];

  return (
    <section id="teachers" className="relative py-24 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fadeIn">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full text-orange-400 text-sm font-semibold">
              Our Faculty
            </span>
          </div>
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-orange-400 bg-clip-text text-transparent">
              Learn from the Best
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our distinguished faculty comprises former civil servants, subject matter experts, and proven educators.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {teachers.map((teacher, i) => (
            <div key={i} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-amber-600/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all"></div>
              <div className="relative bg-gradient-to-br from-slate-800/70 to-slate-900/70 backdrop-blur-xl border border-slate-700 rounded-3xl overflow-hidden hover:border-orange-500/50 transition-all transform hover:-translate-y-2">
                <div className="p-8">
                  <div className="flex items-start space-x-6 mb-6">
                    <div className="relative">
                      <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center text-3xl font-bold text-slate-900 transform group-hover:scale-110 transition-transform">
                        {teacher.image}
                      </div>
                      <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full p-2">
                        <CheckCircle className="w-5 h-5 text-slate-900" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">{teacher.name}</h3>
                      <p className="text-orange-400 font-medium mb-3">{teacher.role}</p>
                      <div className="flex flex-wrap gap-3">
                        <div className="flex items-center space-x-2 bg-slate-800/50 rounded-lg px-3 py-1">
                          <Award className="w-4 h-4 text-amber-400" />
                          <span className="text-sm text-gray-300">{teacher.experience}</span>
                        </div>
                        <div className="flex items-center space-x-2 bg-slate-800/50 rounded-lg px-3 py-1">
                          <Users className="w-4 h-4 text-amber-400" />
                          <span className="text-sm text-gray-300">{teacher.students} Taught</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 mb-3">AREAS OF EXPERTISE</h4>
                    <div className="flex flex-wrap gap-2">
                      {teacher.expertise.map((skill, j) => (
                        <span key={j} className="px-3 py-1 bg-gradient-to-r from-orange-500/20 to-amber-600/20 border border-orange-500/30 rounded-full text-orange-300 text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-orange-500/10 to-amber-600/10 border-t border-orange-500/20 p-6">
                  <p className="text-gray-400 italic">
                    "Education is not just about clearing exams—it's about building character, fostering critical thinking, and creating future leaders who will serve the nation with integrity."
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teachers;