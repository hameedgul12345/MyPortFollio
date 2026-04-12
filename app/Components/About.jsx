import React, { useEffect, useRef, useState } from "react";

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false); // 👈 IMPORTANT: reset when leaving view
        }
      },
      { threshold: 0.3 },
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) observer.unobserve(aboutRef.current);
    };
  }, []);

  const skills = [
    { label: "Frontend Development", value: 95 },
    { label: "Backend Development", value: 85 },
    { label: "UI/UX Design", value: 80 },
  ];

  return (
    <section
      id="about"
      ref={aboutRef}
      className="py-20 px-6 md:px-16 bg-white/50"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto rounded-full" />
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left Text */}
          <div className="space-y-6">
            <p className="text-gray-600 text-lg leading-relaxed">
              I am Hameed Gul, a passionate Full-Stack Developer specializing in
              React.js and Next.js. I build high-quality, responsive web
              applications with seamless user experiences, strong JavaScript
              skills, and modern UI design principles.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed">
              My expertise includes interactive web apps, efficient state
              management, performance optimization, and scalable architecture
              using modern web technologies.
            </p>
          </div>

          {/* Right Skills Card */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              My Expertise
            </h3>

            {skills.map((skill) => (
              <div key={skill.label} className="mb-5">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700">{skill.label}</span>
                  <span className="text-green-600 font-semibold">
                    {skill.value}%
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div
                    className="h-2 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: isVisible ? `${skill.value}%` : "0%",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
