import React from 'react';
import { Target, Users, BookOpen, TrendingUp, Shield, Zap, ArrowRight } from 'lucide-react';

const WhyJoinUs = () => {
  const reasons = [
    {
      icon: Target,
      title: 'Result-Oriented Approach',
      desc: 'Strategic methodology focused on maximizing your exam success rate',
      color: 'from-amber-400 to-orange-500'
    },
    {
      icon: Users,
      title: 'Expert Mentorship',
      desc: 'Personalized guidance from successful civil servants and educators',
      color: 'from-orange-400 to-red-500'
    },
    {
      icon: BookOpen,
      title: 'Comprehensive Study Material',
      desc: 'Curated content covering every aspect of UPSC/BPSC syllabus',
      color: 'from-amber-500 to-yellow-500'
    },
    {
      icon: TrendingUp,
      title: 'Regular Performance Analysis',
      desc: 'Data-driven insights to track and improve your preparation',
      color: 'from-orange-500 to-amber-400'
    },
    {
      icon: Shield,
      title: 'Proven Success Record',
      desc: '98% success rate with 2500+ selections in last 5 years',
      color: 'from-red-500 to-orange-600'
    },
    {
      icon: Zap,
      title: 'Modern Learning Tools',
      desc: 'AI-powered analytics, mobile app, and interactive learning platform',
      color: 'from-yellow-500 to-amber-500'
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-slate-900 to-slate-950 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fadeIn">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full text-orange-400 text-sm font-semibold">
              Why Choose Us
            </span>
          </div>
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-orange-400 bg-clip-text text-transparent">
              The Brilliant Bihar Advantage
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Six compelling reasons why we're Bihar's most trusted civil service academy.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, i) => (
            <div key={i} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
              <div className="relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700 rounded-2xl p-8 hover:border-orange-500/50 transition-all transform hover:-translate-y-2">
                <div className={`inline-block p-4 rounded-xl bg-gradient-to-br ${reason.color} mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all shadow-2xl`}>
                  <reason.icon className="w-8 h-8 text-slate-900" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{reason.title}</h3>
                <p className="text-gray-400 leading-relaxed">{reason.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-amber-500/10 to-orange-600/10 border border-amber-500/20 rounded-3xl p-12 backdrop-blur-sm">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-6">
              Ready to Begin Your Journey?
            </h3>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of successful students who transformed their dreams into reality with The Brilliant Bihar.
            </p>
            <button className="group relative px-10 py-5 rounded-full font-semibold text-lg overflow-hidden transform hover:scale-105 transition-all shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-600"></div>
              <span className="relative flex items-center space-x-2 text-slate-900">
                <span>Schedule Free Counseling</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyJoinUs;