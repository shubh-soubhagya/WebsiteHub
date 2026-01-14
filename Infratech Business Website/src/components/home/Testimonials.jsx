// import React from "react";
// import { motion } from "framer-motion";

// const testimonials = [
//   {
//     quote: "Working with them was a seamless experience. Their professionalism and dedication to quality are truly unmatched in the industry.",
//     name: "Rohan Sharma",
//     location: "Mumbai, Maharashtra",
//     image: "https://randomuser.me/api/portraits/men/11.jpg",
//   },
//   {
//     quote: "The project was delivered on time and exceeded all our expectations. We highly recommend their team for their deep expertise.",
//     name: "Priya Patel",
//     location: "Ahmedabad, Gujarat",
//     image: "https://randomuser.me/api/portraits/women/12.jpg",
//   },
//   {
//     quote: "Their client-first approach is commendable. They listened to every detail of our needs and delivered a perfect, tailored solution.",
//     name: "Arjun Kumar",
//     location: "New Delhi, Delhi",
//     image: "https://randomuser.me/api/portraits/men/14.jpg",
//   },
//   {
//     quote: "Incredible attention to detail and a fantastic team to work with. They successfully transformed our initial vision into a stunning reality.",
//     name: "Ananya Singh",
//     location: "Bengaluru, Karnataka",
//     image: "https://randomuser.me/api/portraits/women/15.jpg",
//   },
//   {
//     quote: "From start to finish, the communication was transparent and excellent. A trustworthy and reliable partner for any major construction project.",
//     name: "Vikram Reddy",
//     location: "Hyderabad, Telangana",
//     image: "https://randomuser.me/api/portraits/men/16.jpg",
//   },
// ];

// const TestimonialCard = ({ quote, name, location, image }) => (
//   <div className="relative flex-shrink-0 w-64 sm:w-72 md:w-80 lg:w-96 mx-4 mt-16 hover:scale-105 transition-transform duration-300">
//     <div className="absolute -top-10 left-1/2 -translate-x-1/2 z-10">
//       <img 
//         className="w-16 sm:w-20 h-16 sm:h-20 rounded-full object-cover border-4 border-white shadow-lg" 
//         src={image} 
//         alt={name} 
//       />
//     </div>

//     <div className="pt-16 pb-6 px-4 sm:px-6 text-center bg-white rounded-2xl shadow-lg border border-gray-200 relative z-0">
//       <svg className="w-6 sm:w-8 h-6 sm:h-8 text-cyan-500 mx-auto mb-3 sm:mb-4" fill="currentColor" viewBox="0 0 20 20">
//         <path d="M10.75 3.996c-1.92.23-3.07.697-3.623 1.151-.553.454-.83 1.042-.83 1.765 0 .723.277 1.31.83 1.765.553.454 1.704.922 3.624 1.151a.75.75 0 00.5-1.408c-1.357-.165-2.18-.512-2.558-.773.378-.26.96-.696 2.558-1.408a.75.75 0 00-.5-1.408zM15.75 3.996c-1.92.23-3.07.697-3.623 1.151-.553.454-.83 1.042-.83 1.765 0 .723.277 1.31.83 1.765.553.454 1.704.922 3.624 1.151a.75.75 0 00.5-1.408c-1.357-.165-2.18-.512-2.558-.773.378-.26.96-.696 2.558-1.408a.75.75 0 00-.5-1.408z"></path>
//       </svg>
//       <p className="text-gray-700 italic text-sm sm:text-base mb-4 sm:mb-6">"{quote}"</p>
//       <div className="mt-2">
//         <p className="font-bold text-gray-900 text-sm sm:text-lg">{name}</p>
//         <p className="text-gray-500 text-xs sm:text-sm">{location}</p>
//       </div>
//     </div>
//   </div>
// );

// const TestimonialsWhiteStatic = () => {
//   const duplicatedTestimonials = [...testimonials, ...testimonials];

//   return (
//     <section className="py-16 sm:py-24 bg-white relative overflow-x-hidden" id="testimonials">
//       <div className="max-w-7xl mx-auto px-6 text-center mb-8 sm:mb-12">
//         <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-2 sm:mb-4">
//           What Our Clients Say
//         </h2>
//         <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-4xl sm:max-w-5xl md:max-w-6xl mx-auto">
//           Our success is measured by the satisfaction of our clients. Here's what some of them have to say about their experience with us.
//         </p>
//       </div>

//       {/* Mobile: 2x2 grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-4 sm:px-6 md:hidden">
//         {testimonials.map((testimonial, index) => (
//           <TestimonialCard key={index} {...testimonial} />
//         ))}
//       </div>

//       {/* Desktop: horizontal marquee */}
//       <div className="hidden md:block relative w-full overflow-x-hidden">
//         <motion.div
//           className="flex py-12 px-4 sm:px-6"
//           animate={{ x: ["0%", "-50%"] }}
//           transition={{
//             x: {
//               repeat: Infinity,
//               repeatType: "loop",
//               duration: 50,
//               ease: "linear",
//             },
//           }}
//         >
//           {duplicatedTestimonials.map((testimonial, index) => (
//             <TestimonialCard key={index} {...testimonial} />
//           ))}
//         </motion.div>

//         {/* Gradient overlays */}
//         <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-white to-transparent"></div>
//         <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-white to-transparent"></div>
//       </div>
//     </section>
//   );
// };

// export default TestimonialsWhiteStatic;


import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Working with them was a seamless experience. Their professionalism and dedication to quality are truly unmatched in the industry.",
    name: "Rohan Sharma",
    location: "Mumbai, Maharashtra",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    quote: "The project was delivered on time and exceeded all our expectations. We highly recommend their team for their deep expertise.",
    name: "Priya Patel",
    location: "Ahmedabad, Gujarat",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    quote: "Their client-first approach is commendable. They listened to every detail of our needs and delivered a perfect, tailored solution.",
    name: "Arjun Kumar",
    location: "New Delhi, Delhi",
    image: "https://randomuser.me/api/portraits/men/14.jpg",
  },
  {
    quote: "Incredible attention to detail and a fantastic team to work with. They successfully transformed our initial vision into a stunning reality.",
    name: "Ananya Singh",
    location: "Bengaluru, Karnataka",
    image: "https://randomuser.me/api/portraits/women/15.jpg",
  },
  {
    quote: "From start to finish, the communication was transparent and excellent. A trustworthy and reliable partner for any major construction project.",
    name: "Vikram Reddy",
    location: "Hyderabad, Telangana",
    image: "https://randomuser.me/api/portraits/men/16.jpg",
  },
];

const TestimonialCard = ({ quote, name, location, image }) => (
  <div className="relative flex-shrink-0 w-64 sm:w-72 md:w-80 lg:w-96 mx-4 mt-16 hover:scale-105 transition-transform duration-300">
    <div className="absolute -top-10 left-1/2 -translate-x-1/2 z-10">
      <img 
        className="w-16 sm:w-20 h-16 sm:h-20 rounded-full object-cover border-4 border-white shadow-lg" 
        src={image} 
        alt={name} 
      />
    </div>

    <div className="pt-16 pb-6 px-4 sm:px-6 text-center bg-white rounded-2xl shadow-lg border border-gray-200 relative z-0">
      <svg className="w-6 sm:w-8 h-6 sm:h-8 text-cyan-500 mx-auto mb-3 sm:mb-4" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10.75 3.996c-1.92.23-3.07.697-3.623 1.151-.553.454-.83 1.042-.83 1.765 0 .723.277 1.31.83 1.765.553.454 1.704.922 3.624 1.151a.75.75 0 00.5-1.408c-1.357-.165-2.18-.512-2.558-.773.378-.26.96-.696 2.558-1.408a.75.75 0 00-.5-1.408zM15.75 3.996c-1.92.23-3.07.697-3.623 1.151-.553.454-.83 1.042-.83 1.765 0 .723.277 1.31.83 1.765.553.454 1.704.922 3.624 1.151a.75.75 0 00.5-1.408c-1.357-.165-2.18-.512-2.558-.773.378-.26.96-.696 2.558-1.408a.75.75 0 00-.5-1.408z"></path>
      </svg>
      <p className="text-gray-700 italic text-sm sm:text-base mb-4 sm:mb-6">"{quote}"</p>
      <div className="mt-2">
        <p className="font-bold text-gray-900 text-sm sm:text-lg">{name}</p>
        <p className="text-gray-500 text-xs sm:text-sm">{location}</p>
      </div>
    </div>
  </div>
);

const TestimonialsWhiteStatic = () => {
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="pt-16 pb-0 sm:pt-24 sm:pb-0 bg-white relative overflow-x-hidden" id="testimonials">
      <div className="max-w-7xl mx-auto px-6 text-center mb-8 sm:mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-2 sm:mb-4">
          What Our Clients Say
        </h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-4xl sm:max-w-5xl md:max-w-6xl mx-auto">
          Our success is measured by the satisfaction of our clients. Here's what some of them have to say about their experience with us.
        </p>
      </div>

      {/* Mobile: 2x2 grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-4 sm:px-6 md:hidden">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>

      {/* Desktop: horizontal marquee */}
      <div className="hidden md:block relative w-full overflow-x-hidden">
        <motion.div
          className="flex py-12 px-4 sm:px-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 50,
              ease: "linear",
            },
          }}
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </motion.div>

        {/* Gradient overlays */}
        <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-white to-transparent"></div>
        <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-white to-transparent"></div>
      </div>
    </section>
  );
};

export default TestimonialsWhiteStatic;
