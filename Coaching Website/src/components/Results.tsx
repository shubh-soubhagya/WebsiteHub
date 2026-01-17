
import React from 'react';
import { Trophy, Star, TrendingUp } from 'lucide-react';

const Results = () => {
  const achievements = [
    {
      exam: "JEE Advanced 2024",
      toppers: [
        { name: "Arjun Sharma", rank: "AIR 15", college: "IIT Bombay" },
        { name: "Priya Patel", rank: "AIR 42", college: "IIT Delhi" },
        { name: "Rohit Kumar", rank: "AIR 88", college: "IIT Kanpur" }
      ],
      stats: { total: 156, selected: 148, percentage: 95 }
    },
    {
      exam: "NEET UG 2024",
      toppers: [
        { name: "Sneha Gupta", rank: "AIR 28", college: "AIIMS Delhi" },
        { name: "Vikash Singh", rank: "AIR 67", college: "JIPMER" },
        { name: "Anjali Rao", rank: "AIR 134", college: "GMC Mumbai" }
      ],
      stats: { total: 120, selected: 115, percentage: 96 }
    },
    {
      exam: "UPSC CSE 2023",
      toppers: [
        { name: "Rajesh Menon", rank: "AIR 45", service: "IAS" },
        { name: "Kavita Joshi", rank: "AIR 78", service: "IPS" },
        { name: "Amit Verma", rank: "AIR 112", service: "IFS" }
      ],
      stats: { total: 45, selected: 38, percentage: 84 }
    }
  ];

  const yearlyStats = [
    { year: "2024", students: 2800, selections: 2650, percentage: 95 },
    { year: "2023", students: 2500, selections: 2375, percentage: 95 },
    { year: "2022", students: 2200, selections: 2068, percentage: 94 },
    { year: "2021", students: 1900, selections: 1767, percentage: 93 }
  ];

  return (
    <section id="results" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Success Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Celebrating the achievements of our students who cracked India's toughest competitive exams
          </p>
        </div>

        {/* Yearly Performance */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Year-wise Performance</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {yearlyStats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.year}</div>
                <div className="text-lg font-semibold text-gray-900 mb-1">{stat.percentage}% Success</div>
                <div className="text-sm text-gray-600">
                  {stat.selections} out of {stat.students} students
                </div>
                <div className="mt-4 bg-blue-100 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${stat.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Exam-wise Results */}
        <div className="space-y-12">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{achievement.exam}</h3>
                    <div className="flex items-center space-x-6">
                      <div className="flex items-center">
                        <Trophy className="h-5 w-5 mr-2" />
                        <span>{achievement.stats.selected} Selected</span>
                      </div>
                      <div className="flex items-center">
                        <TrendingUp className="h-5 w-5 mr-2" />
                        <span>{achievement.stats.percentage}% Success Rate</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold">{achievement.stats.percentage}%</div>
                    <div className="text-blue-200">Success Rate</div>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <Star className="h-6 w-6 text-yellow-500 mr-2" />
                  Top Performers
                </h4>
                <div className="grid md:grid-cols-3 gap-6">
                  {achievement.toppers.map((topper, topperIndex) => (
                    <div key={topperIndex} className="bg-gray-50 rounded-xl p-6 text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                        {topper.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <h5 className="font-bold text-gray-900 mb-1">{topper.name}</h5>
                      <div className="text-blue-600 font-semibold mb-1">{topper.rank}</div>
                      <div className="text-sm text-gray-600">{topper.college || topper.service}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Be Our Next Success Story!</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join our proven coaching methodology and be part of our success legacy. Your achievement could be featured here next year!
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
              Start Your Success Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
