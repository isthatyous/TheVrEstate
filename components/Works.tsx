'use client';
import { motion } from 'framer-motion';
import { BackgroundGradient } from "./ui/background-gradient";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import Image from 'next/image';

// SubmitButton Component
const SubmitButton = () => {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="py-3 px-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold text-sm"
      type="submit"
    >
      View More
    </motion.button>
  );
};

const Works = () => {
  const introText = "Explore our portfolio of completed projects. Each model demonstrates the precision and immersive quality we deliver using tools like Blender.";

  const works = [
    {
      title: "Luxury Villa Tour",
      description: "Immersive 3D walkthrough of a beachfront property",
      image: "/Images/luxury.jpeg",
      category: "Residential"
    },
    {
      title: "Commercial Complex",
      description: "Interactive model of a modern office space",
      image: "/Images/commercial.jpeg",
      category: "Commercial"
    },
    {
      title: "Smart Home Experience",
      description: "Virtual tour showcasing home automation features",
      image: "/Images/smart_home.jpeg",
      category: "Residential",
    },
    {
      title: "Discover Elegant Living Space through Interactive Tours",
      description: "Explore refined living spaces with immersive, interactive tours.",
      image: "/Images/home-1.jpeg",
      category: "Residential",
    },
    {
      title: "Find Your Dream Home Without Leaving Your Door",
      description: "Discover your dream home from the comfort of your space with The VR Estate.",
      image: "/Images/home-2.jpeg",
      category: "Residential",
    },
    {
      title: "See Your Next Home in Detail Before Making a Decision",
      description: "View every detail of your future home before making your decision.",
      image: "/Images/home-3.jpeg",
      category: "Commercial",
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
        >
          Our Work
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          <TextGenerateEffect words={introText} />
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {works.map((work, index) => (
          <BackgroundGradient key={index} className="rounded-xl bg-black p-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  priority
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width : 768px )  (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                <span className="text-sm text-blue-400 mb-2">{work.category}</span>
                <h3 className="text-xl font-bold text-white mb-2">{work.title}</h3>
                <p className="text-gray-300 text-sm">{work.description}</p>
              </div>
            </motion.div>
          </BackgroundGradient>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center mt-27" // Increased margin-top here
      >
        {/* Insert SubmitButton above the text */}
        <SubmitButton />

        <BackgroundGradient className="inline-block rounded-full px-8 mb-7 py-3 bg-black mt-8"> {/* Increased margin-top here */}
          <p className="text-white">
            Ready to transform your property listings?{" "}
            <a 
              href="#contact" 
              className="font-medium text-blue-500 hover:text-blue-400 transition-colors"
            >
              Contact us
            </a>
          </p>
        </BackgroundGradient>
      </motion.div>
    </div>
  );
};

export default Works;
