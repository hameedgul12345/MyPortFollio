import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function PortFollio() {
  const fullStackApps = [
    {
      id: 1,
      image: "/images/chatly1.png",
      title: "Chatly – Real-Time Chat App",
      hostLink: "https://chattochatly.netlify.app/",
      githubLink: "https://github.com/hameedgul12345/Chatly",
      paragraph:
        "Real-time chat application built with MERN stack and Socket.IO.",
      tech: ["React", "Node.js", "MongoDB", "Socket.IO"],
    },
    {
      id: 2,
      image: "/images/Social Media2.png",
      title: "Vibeo – Social Media Platform",
      hostLink: "https://vibeo1.netlify.app/",
      githubLink: "https://github.com/hameedgul12345/Vibeo",
      paragraph:
        "Full-stack social media platform with authentication and feeds.",
      tech: ["React", "Node.js", "MongoDB", "JWT"],
    },
    {
      id: 3,
      image: "/images/Dashboard.png",
      title: "POS Dashboard",
      hostLink: "https://smartkhatasystem.netlify.app/dashboard",
      githubLink: "https://github.com/hameedgul12345/Chatly",
      paragraph: "Modern POS dashboard with analytics and billing system.",
       tech: ["React", "Node.js", "MongoDB", "JWT"],
    },
  ];

  return (
    <section id="portfolio" className="py-20 px-8 md:px-16 relative overflow-hidden">
      
      {/* 🔥 Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.15),transparent_60%)]" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-green-600 font-medium mb-2">My Work</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            Featured{" "}
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fullStackApps.map((app, i) => (
            <motion.div
              key={app.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}   // 👈 replay on scroll
              transition={{ type: "spring", stiffness: 120, delay: i * 0.1 }}
              className="relative group"
            >
              {/* 🔥 Glow aura */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 blur-xl opacity-0 group-hover:opacity-40 transition duration-500" />

              {/* Card */}
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">

                {/* Image */}
                <div className="relative w-full aspect-[16/9] overflow-hidden">
                  <Image
                    src={app.image}
                    alt={app.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-4">
                    
                    <Link href={app.hostLink} target="_blank"
                      className="p-3 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur">
                      <ExternalLink className="w-5 h-5 text-white" />
                    </Link>

                    <Link href={app.githubLink} target="_blank"
                      className="p-3 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur">
                      <Github className="w-5 h-5 text-white" />
                    </Link>

                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {app.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4">
                    {app.paragraph}
                  </p>

                  {/* Tech */}
                  <div className="flex flex-wrap gap-2">
                    {app.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition flex items-center gap-2 mx-auto">
            <Folder className="w-5 h-5" />
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}

export default PortFollio;