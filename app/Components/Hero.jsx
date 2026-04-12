"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  Download,
  Github,
  Linkedin,
  Instagram,
  Facebook,
} from "lucide-react";

function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = " /images/Hameed4.pdf";
    link.download = "Hameed-Gul-MERN-ReactNative.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const socials = [
    { icon: <Facebook size={18} />, link: "#" },
    { icon: <Instagram size={18} />, link: "#" },
    { icon: <Linkedin size={18} />, link: "#" },
    { icon: <Github size={18} />, link: "#" },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-6 md:px-16 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.15),transparent_60%)]" />

      <div className="grid md:grid-cols-2 gap-12 items-center w-full relative z-10">

        {/* LEFT SIDE */}
        <div
          className={`transition-all duration-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          {/* Badge */}
          <div className="inline-block px-4 py-1 mb-4 rounded-full bg-green-100 text-green-700 text-sm font-medium">
            MERN Stack • React Native Developer
          </div>

          {/* Heading (FIXED SIZE) */}
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            Hi, I'm <span className="text-green-600">Hameed Gul</span>
            <br />
            Building Web & Mobile Apps 
          </h1>

          {/* Description */}
          <p className="mt-4 text-gray-600 max-w-xl">
            I build scalable full-stack applications using MERN Stack and React Native,
            focusing on performance, clean architecture, and user experience.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-6 flex-wrap">
            <button className="px-6 py-3 rounded-xl border border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition-all duration-300 hover:scale-105">
              View Projects
            </button>

            <button
              onClick={downloadCV}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 text-white flex items-center gap-2 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <Download size={18} />
              Download CV
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.link}
                className="w-11 h-11 flex items-center justify-center bg-white/70 backdrop-blur-md shadow-lg rounded-full text-gray-700 hover:bg-green-600 hover:text-white hover:scale-110 transition-all duration-300"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE (FIXED CIRCLE IMAGE) */}
        <div className="flex justify-center">
          <div className="relative w-[280px] h-[280px]">

            {/* Glow */}
            <div className="absolute inset-0 bg-green-400 blur-3xl opacity-30 rounded-full animate-pulse" />

            {/* Circle Image */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl">
              <Image
                src="/images/profilepic.png"
                alt="profile"
                fill
                className="object-cover"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;