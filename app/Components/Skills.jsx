import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

function SkillCard({ skill, index, isVisible }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      custom={index}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        delay: index * 0.08,
        type: "spring",
        stiffness: 120,
        damping: 14,
      }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative group"
    >
      {/* Glow Aura */}
      <div
        className={`absolute -inset-2 rounded-2xl blur-2xl transition-all duration-300
        ${
          hovered
            ? "bg-gradient-to-r from-green-500/40 to-emerald-500/40 opacity-100"
            : "opacity-0"
        }`}
      />

      {/* Card */}
      <div className="relative bg-white p-6 rounded-2xl shadow-lg transition-all duration-300 group-hover:shadow-2xl">
        
        {/* Tooltip */}
        {hovered && (
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-3 py-1 rounded-md shadow-lg whitespace-nowrap">
            {skill.name} • {skill.percent}%
            <div className="absolute left-1/2 -bottom-1 w-2 h-2 bg-gray-900 rotate-45 -translate-x-1/2"></div>
          </div>
        )}

        {/* Icon */}
        <div className="flex flex-col items-center text-center">
          <img
            src={skill.icon}
            alt={skill.name}
            className={`w-12 h-12 mb-4 transition-transform duration-300
            ${hovered ? "scale-110 rotate-3" : ""}`}
          />

          <h4 className="font-semibold text-gray-800 mb-2">
            {skill.name}
          </h4>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2 mb-2 overflow-hidden relative">
            
            <motion.div
              className="h-2 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: isVisible ? `${skill.percent}%` : 0 }}
              transition={{
                duration: 1,
                type: "spring",
                stiffness: 100,
                damping: 18,
              }}
            />

            {/* Glow Line */}
            <div
              className={`absolute top-0 left-0 h-full w-full bg-white/20 blur-sm transition-opacity duration-300
              ${hovered ? "opacity-100" : "opacity-0"}`}
            />
          </div>

          <span className="text-sm font-medium text-green-600">
            {skill.percent}%
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (skillsRef.current) observer.observe(skillsRef.current);

    return () => {
      if (skillsRef.current) observer.unobserve(skillsRef.current);
    };
  }, []);

  const frontendSkills = [
    { name: "HTML", percent: 98, icon: "https://img.icons8.com/color/48/html-5.png" },
    { name: "CSS", percent: 95, icon: "https://img.icons8.com/color/48/css3.png" },
    { name: "JavaScript", percent: 90, icon: "https://img.icons8.com/color/48/javascript.png" },
    { name: "ReactJS", percent: 92, icon: "https://img.icons8.com/color/48/react-native.png" },
  ];

  const backendSkills = [
    { name: "Node.js", percent: 89, icon: "https://img.icons8.com/color/48/nodejs.png" },
    { name: "MongoDB", percent: 90, icon: "https://img.icons8.com/color/48/mongodb.png" },
    { name: "Express", percent: 88, icon: "/images/express.svg" },
    { name: "JWT", percent: 95, icon: "/images/jwt.png" },
  ];

  return (
    <section ref={skillsRef} className="py-20 px-8 md:px-16">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800">
            Explore My <span className="text-green-600">Skills</span>
          </h2>
        </div>

        {/* FRONTEND */}
        <h3 className="text-2xl font-bold mb-8 text-center">
          Frontend Technologies
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
          {frontendSkills.map((skill, i) => (
            <SkillCard
              key={skill.name}
              skill={skill}
              index={i}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* BACKEND */}
        <h3 className="text-2xl font-bold mb-8 text-center">
          Backend Technologies
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {backendSkills.map((skill, i) => (
            <SkillCard
              key={skill.name}
              skill={skill}
              index={i}
              isVisible={isVisible}
            />
          ))}
        </div>

      </div>
    </section>
  );
}