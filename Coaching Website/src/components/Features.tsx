
import React from 'react';
import { BookOpen, Users, Award, Clock, Monitor, Headphones } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Expert Faculty",
      description: "Learn from IIT, IIM, and AIIMS alumni with years of teaching experience",
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      icon: Monitor,
      title: "Smart Classes",
      description: "Interactive digital classrooms with 3D animations and visual learning",
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      icon: Clock,
      title: "Flexible Timings",
      description: "Morning, evening, and weekend batches to suit your schedule",
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "95% success rate with students in top engineering and medical colleges",
      color: "text-orange-600",
      bgColor: "bg-orange-100"
    },
    {
      icon: Users,
      title: "Small Batches",
      description: "Limited students per batch ensuring personalized attention for every student",
      color: "text-red-600",
      bgColor: "bg-red-100"
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock doubt clearing and academic support for students",
      color: "text-teal-600",
      bgColor: "bg-teal-100"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-blue-600">Excellence Academy</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide the perfect blend of traditional teaching methods with modern technology to ensure your success
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group p-8 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300">
              <div className={`inline-flex items-center justify-center w-16 h-16 ${feature.bgColor} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`h-8 w-8 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Success Journey?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join thousands of successful students who achieved their dreams with our guidance. Your success story starts today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                Book Free Demo Class
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
