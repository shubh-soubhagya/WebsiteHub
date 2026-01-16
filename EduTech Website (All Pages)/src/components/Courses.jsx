import React from 'react';
import { Calendar, Users, CheckCircle, Star } from 'lucide-react';

const Courses = () => {
  const courses = [
    {
      title: 'UPSC Foundation',
      subtitle: 'Complete CSE Preparation',
      duration: '18 Months',
      students: '1200+',
      features: [
        'Prelims + Mains + Interview',
        'Daily Current Affairs',
        'Answer Writing Practice',
        'Mock Tests & Analysis',
        'Personalized Mentorship'
      ],
      price: '₹1,20,000',
      popular: true
    },
    {
      title: 'BPSC Mastery',
      subtitle: 'Bihar PCS Excellence',
      duration: '12 Months',
      students: '1800+',
      features: [
        'Complete Bihar Focus',
        'PT + Mains Coverage',
        'Weekly Test Series',
        'Interview Guidance',
        'Study Material Included'
      ],
      price: '₹80,000',
      popular: false
    },
    {
      title: 'Integrated Program',
      subtitle: 'UPSC + BPSC Combined',
      duration: '24 Months',
      students: '900+',
      features: [
        'Dual Exam Strategy',
        'Comprehensive Coverage',
        'Live + Recorded Classes',
        'Doubt Clearing Sessions',
        'Lifetime Access'
      ],
      price: '₹1,80,000',
      popular: false
    }
  ];

  return (
    <section id="courses" className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fadeIn">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-400 text-sm font-semibold">
              Our Programs
            </span>
          </div>
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-amber-400 bg-clip-text text-transparent">
              Courses Designed for Success
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive programs tailored to meet the unique demands of UPSC and BPSC examinations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course, i) => (
            <div key={i} className={`group relative ${course.popular ? 'md:-mt-4' : ''}`}>
              {course.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 px-6 py-2 rounded-full text-sm font-bold flex items-center space-x-2 shadow-2xl">
                    <Star className="w-4 h-4 fill-current" />
                    <span>MOST POPULAR</span>
                  </div>
                </div>
              )}

              <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl blur-xl group-hover:blur-2xl transition-all"></div>
              <div className={`relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border ${course.popular ? 'border-amber-500/50' : 'border-slate-700'} rounded-3xl overflow-hidden hover:border-amber-500/50 transition-all transform hover:-translate-y-2 ${course.popular ? 'md:scale-105' : ''}`}>
                <div className="p-8">
                  <div className="mb-6">
                    <h3 className="text-3xl font-bold text-white mb-2">{course.title}</h3>
                    <p className="text-gray-400">{course.subtitle}</p>
                  </div>

                  <div className="flex items-center space-x-4 mb-6">
                    <div className="flex items-center space-x-2 bg-slate-800/50 rounded-lg px-3 py-2">
                      <Calendar className="w-4 h-4 text-amber-400" />
                      <span className="text-sm text-gray-300">{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-slate-800/50 rounded-lg px-3 py-2">
                      <Users className="w-4 h-4 text-amber-400" />
                      <span className="text-sm text-gray-300">{course.students}</span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-8">
                    {course.features.map((feature, j) => (
                      <div key={j} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-slate-700 pt-6">
                    <div className="flex items-end justify-between mb-6">
                      <div>
                        <div className="text-sm text-gray-400 mb-1">Program Fee</div>
                        <div className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                          {course.price}
                        </div>
                      </div>
                    </div>

                    <button className={`w-full py-4 rounded-xl font-semibold transition-all transform hover:scale-105 ${course.popular ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-slate-900 shadow-2xl shadow-amber-500/50' : 'bg-slate-800 text-white hover:bg-slate-700'}`}>
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;