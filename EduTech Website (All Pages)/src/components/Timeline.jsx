import React from 'react';
import { Calendar } from 'lucide-react';

const Timeline = () => {
  const phases = [
    {
      phase: 'Phase 1',
      title: 'Registration & Counseling',
      date: 'Nov 1-15, 2025',
      desc: 'Submit application, attend free counseling session, and get personalized study plan',
      status: 'active'
    },
    {
      phase: 'Phase 2',
      title: 'Enrollment & Onboarding',
      date: 'Nov 16-30, 2025',
      desc: 'Complete enrollment, receive study materials, and join orientation program',
      status: 'upcoming'
    },
    {
      phase: 'Phase 3',
      title: 'Classes Begin',
      date: 'Dec 1, 2025',
      desc: 'Start your transformative journey with foundation classes and mentor assignment',
      status: 'upcoming'
    },
    {
      phase: 'Phase 4',
      title: 'Prelims Preparation',
      date: 'Dec 2025 - Apr 2026',
      desc: 'Intensive prelims training, mock tests, and comprehensive coverage of all subjects',
      status: 'upcoming'
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fadeIn">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-400 text-sm font-semibold">
              Admission Timeline
            </span>
          </div>
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-amber-400 bg-clip-text text-transparent">
              Your Journey Roadmap
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A transparent, step-by-step process to kickstart your civil service preparation.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-amber-500 via-orange-500 to-amber-600"></div>

          <div className="space-y-12">
            {phases.map((phase, i) => (
              <div key={i} className={`flex items-center ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="w-full md:w-5/12">
                  <div className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
                    <div className={`relative bg-gradient-to-br from-slate-800/70 to-slate-900/70 backdrop-blur-xl border ${phase.status === 'active' ? 'border-amber-500/50' : 'border-slate-700'} rounded-2xl p-8 hover:border-amber-500/50 transition-all transform hover:-translate-y-2`}>
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="text-sm text-amber-400 font-semibold mb-2">{phase.phase}</div>
                          <h3 className="text-2xl font-bold text-white mb-2">{phase.title}</h3>
                          <div className="flex items-center space-x-2 text-gray-400">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm">{phase.date}</span>
                          </div>
                        </div>
                        {phase.status === 'active' && (
                          <div className="bg-gradient-to-r from-green-400 to-emerald-500 text-slate-900 text-xs font-bold px-3 py-1 rounded-full">
                            OPEN NOW
                          </div>
                        )}
                      </div>
                      <p className="text-gray-400 leading-relaxed">{phase.desc}</p>
                    </div>
                  </div>
                </div>

                <div className="hidden md:flex w-2/12 justify-center">
                  <div className="relative">
                    <div className={`w-16 h-16 rounded-full ${phase.status === 'active' ? 'bg-gradient-to-br from-amber-400 to-orange-500' : 'bg-slate-800'} border-4 border-slate-900 flex items-center justify-center transform transition-all hover:scale-110 shadow-2xl`}>
                      <span className={`text-2xl font-bold ${phase.status === 'active' ? 'text-slate-900' : 'text-gray-400'}`}>
                        {i + 1}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;