// import React from 'react';
// import { motion } from 'framer-motion';
// import { Linkedin } from 'lucide-react';

// const mentors = [
//   {
//     name: 'Mr. Alok Kumar',
//     title: 'IAS Officer (Retd.)',
//     bio: 'With over 25 years in public administration, Mr. Kumar provides strategic guidance for navigating the complexities of civil service examinations.',
//     imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887&auto=format&fit=crop',
//     linkedinUrl: '#',
//   },
//   {
//     name: 'Dr. Priya Sharma',
//     title: 'IPS, Bihar Cadre',
//     bio: 'Dr. Sharma brings invaluable on-ground experience and a passion for empowering the next generation of leaders with discipline, focus, and integrity.',
//     imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop',
//     linkedinUrl: '#',
//   },
// ];

// const MentorsSection = () => {
//   const containerAnimation = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.25, delayChildren: 0.2 },
//     },
//   };

//   const itemAnimation = {
//     hidden: { x: 80, opacity: 0 },
//     visible: {
//       x: 0,
//       opacity: 1,
//       transition: { type: 'spring', stiffness: 80, damping: 15 },
//     },
//   };

//   return (
//     <section className="bg-gradient-to-b from-white to-slate-100 py-24 sm:py-32 relative overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
//         {/* --- Left Side: Title and Description --- */}
//         <motion.div
//           className="max-w-xl mx-auto text-center lg:text-left flex flex-col justify-center relative z-10"
//           initial={{ opacity: 0, x: -40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true, amount: 0.4 }}
//           transition={{ duration: 0.8, ease: 'easeOut' }}
//         >
//           <h2 className="text-4xl sm:text-5xl font-bold font-serif text-gray-900 leading-tight">
//             Meet Our Mentors
//           </h2>
//           <p className="mt-6 text-lg text-gray-600 font-sans leading-relaxed">
//             Learn from seasoned professionals who bring real-world insights, experience,
//             and mentorship to guide aspirants toward excellence and success.
//           </p>
//           <div className="mt-8 h-1 w-24 bg-blue-600 rounded-full mx-auto lg:mx-0"></div>
//         </motion.div>

//         {/* --- Right Side: Mentor Cards --- */}
//         <motion.div
//           className="flex flex-col gap-10"
//           variants={containerAnimation}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//         >
//           {mentors.map((mentor) => (
//             <motion.div
//               key={mentor.name}
//               className="flex flex-col sm:flex-row bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl hover:border-blue-100 transform transition-all duration-500 ease-in-out hover:-translate-y-1 hover:scale-[1.02]"
//               variants={itemAnimation}
//               whileHover={{ scale: 1.02 }}
//             >
//               {/* Image Section */}
//               <div className="relative w-full sm:w-48 h-56 sm:h-auto group">
//                 <img
//                   src={mentor.imageUrl}
//                   alt={`Portrait of ${mentor.name}`}
//                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//                 />
//                 <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
//                   <a
//                     href={mentor.linkedinUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-white p-3 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
//                   >
//                     <Linkedin className="w-6 h-6" />
//                   </a>
//                 </div>
//               </div>

//               {/* Content Section */}
//               <div className="p-6 sm:p-8 flex flex-col justify-center">
//                 <h3 className="text-2xl font-bold font-serif text-gray-900">{mentor.name}</h3>
//                 <p className="text-blue-600 font-semibold mt-1">{mentor.title}</p>
//                 <p className="mt-4 text-gray-600 font-sans leading-relaxed text-justify">
//                   {mentor.bio}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>

//       {/* Subtle Decorative Background Elements */}
//       <div className="absolute top-0 right-0 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl opacity-50 -z-10"></div>
//       <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-100/40 rounded-full blur-3xl opacity-40 -z-10"></div>
//     </section>
//   );
// };

// export default MentorsSection;


import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Users, BookOpen, Briefcase, Award } from 'lucide-react';

const mentors = [
  {
    name: 'Mr. Alok Kumar',
    title: 'IAS Officer (Retd.)',
    bio: 'With over 25 years in public administration, Mr. Kumar provides strategic guidance for navigating the complexities of civil service examinations.',
    imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887&auto=format&fit=crop',
    linkedinUrl: '#',
  },
  {
    name: 'Dr. Priya Sharma',
    title: 'IPS, Bihar Cadre',
    bio: 'Dr. Sharma brings invaluable on-ground experience and a passion for empowering the next generation of leaders with discipline, focus, and integrity.',
    imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop',
    linkedinUrl: '#',
  },
];

const stats = [
  { icon: <Users className="w-6 h-6 text-black" />, value: '90+', label: 'Expert Faculties' },
  { icon: <BookOpen className="w-6 h-6 text-black" />, value: '20+', label: 'Domains Covered' },
  { icon: <Briefcase className="w-6 h-6 text-black" />, value: '15+', label: 'Years of Excellence' },
//   { icon: <Award className="w-6 h-6 text-black" />, value: '5000+', label: 'Successful Aspirants' },
];

const MentorsSection = () => {
  const containerAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.25, delayChildren: 0.2 },
    },
  };

  const itemAnimation = {
    hidden: { x: 80, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 80, damping: 15 },
    },
  };

  return (
    <section className="bg-gradient-to-b from-white to-slate-100 pt-20 pb-32 sm:pt-28 sm:pb-40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* --- Left Side: Title, Description, Stats --- */}
        <motion.div
          className="max-w-xl mx-auto text-center lg:text-left flex flex-col justify-center relative z-10"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold font-serif text-gray-900 leading-tight">
            Meet Your Leaders
          </h2>
          <p className="mt-6 text-lg text-gray-600 font-sans leading-relaxed">
            Learn from visionary educators, administrators, and officers who have shaped the nation’s governance. 
            Our mentors combine field expertise with an unwavering commitment to your growth.
          </p>

          {/* --- Stats Section (All in one line) --- */}
          <div className="mt-10 flex flex-wrap justify-center lg:justify-between items-center gap-6">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                className="flex flex-col items-center lg:items-start text-center lg:text-left"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 mb-3">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold text-gray-900">{stat.value}</h3>
                <p className="text-gray-600 mt-1 text-sm sm:text-base font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 h-1 w-24 bg-blue-600 rounded-full mx-auto lg:mx-0"></div>
        </motion.div>

        {/* --- Right Side: Mentor Cards --- */}
        <motion.div
          className="flex flex-col gap-8"
          variants={containerAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {mentors.map((mentor) => (
            <motion.div
              key={mentor.name}
              className="flex flex-col sm:flex-row bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-2xl hover:border-blue-100 transform transition-all duration-500 ease-in-out hover:-translate-y-1 hover:scale-[1.02]"
              variants={itemAnimation}
              whileHover={{ scale: 1.02 }}
            >
              {/* Image Section */}
              <div className="relative w-full sm:w-48 h-56 sm:h-auto group">
                <img
                  src={mentor.imageUrl}
                  alt={`Portrait of ${mentor.name}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a
                    href={mentor.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white p-3 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 sm:p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold font-serif text-gray-900">{mentor.name}</h3>
                <p className="text-blue-600 font-semibold mt-1">{mentor.title}</p>
                <p className="mt-4 text-gray-600 font-sans leading-relaxed text-justify">
                  {mentor.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl opacity-50 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-100/40 rounded-full blur-3xl opacity-40 -z-10"></div>
    </section>
  );
};

export default MentorsSection;
