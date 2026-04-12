"use client";
import React from "react";
import { motion } from "framer-motion";
import { Code, Server, Laptop } from "lucide-react";

function Services() {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 80, scale: 0.9 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 14,
      },
    },
  };

  const float = (delay = 0) => ({
    y: [0, -10, 0],
    rotate: [0, 1, 0, -1, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
      delay,
    },
  });

  return (
    <section id="services" className="py-20 px-8 md:px-16 bg-white/50">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ type: "spring", stiffness: 120 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto rounded-full" />
        </motion.div>

        {/* GRID */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="grid md:grid-cols-3 gap-10"
        >

          {/* CARD WRAPPER (with glow) */}
          {[
            {
              icon: <Code className="w-8 h-8" />,
              title: "Frontend Development",
              desc: "Building responsive, fast, and modern UI using React & Next.js.",
              gradient: "from-green-400 to-emerald-500",
              delay: 0,
            },
            {
              icon: <Server className="w-8 h-8" />,
              title: "Backend Development",
              desc: "Secure and scalable APIs using Node.js, Express, MongoDB.",
              gradient: "from-emerald-400 to-green-600",
              delay: 0.8,
            },
            {
              icon: <Laptop className="w-8 h-8" />,
              title: "Full Stack Solutions",
              desc: "End-to-end solutions with clean architecture & performance.",
              gradient: "from-green-500 to-emerald-700",
              delay: 1.5,
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={card}
              animate={float(item.delay)}
              whileHover={{
                scale: 1.08,
                y: -12,
                transition: { type: "spring", stiffness: 300 },
              }}
              className="relative group"
            >

              {/* 🌈 GLOW AURA (BACKGROUND LAYER) */}
              <div
                className={`absolute -inset-4 bg-gradient-to-r ${item.gradient} rounded-3xl blur-2xl opacity-30 group-hover:opacity-60 transition duration-500 animate-pulse`}
              />

              {/* CARD */}
              <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all z-10">

                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}

        </motion.div>
      </div>
    </section>
  );
}

export default Services;