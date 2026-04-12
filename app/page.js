"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Github,
  Linkedin,
  Facebook,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Code,
  Palette,
  Users,
  Zap,
  Folder,
  Menu,
  X,
  Home,
  User,
  Wrench,
} from "lucide-react";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Services from "./Components/Services";
import PortFollio from "./Components/PortFollio";
import Contactus from "./Components/Contactus";
import Footer from "./Components/Footer";

function Page() {
  const [activeSection, setActiveSection] = useState("Home");
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      href: "https://web.facebook.com/hameed.gul.449778",
      color: "hover:bg-blue-600",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/hameed-gul-408453269/",
      color: "hover:bg-blue-700",
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/hameedgul12345",
      color: "hover:bg-gray-900",
    },
  ];

  const links = [
    { name: "Home", icon: Home },
    { name: "About Me", icon: User },
    { name: "Services", icon: Wrench },
    { name: "Skills", icon: Zap },
    { name: "Portfolio", icon: Folder },
    { name: "Contact", icon: Mail },
  ];

  const scrollToSection = (sectionName) => {
    setActiveSection(sectionName);

    const sectionMap = {
      Home: "home",
      "About Me": "about",
      Services: "services",
      Skills: "skills",
      Portfolio: "portfolio",
      Contact: "contact",
    };

    const element = document.getElementById(sectionMap[sectionName]);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen flex">

      {/* MOBILE NAV */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b">
        <div className="flex justify-between p-3">
          <Image src="/images/Profilelogo1.png" alt="logo" width={100} height={40} />

          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="p-4 space-y-2">
            {links.map((l, i) => (
              <button
                key={i}
                onClick={() => scrollToSection(l.name)}
                className="w-full flex gap-2 p-3 rounded-lg hover:bg-green-50"
              >
                <l.icon className="w-5 h-5" />
                {l.name}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* SIDEBAR */}
      <div className="hidden md:block w-[20%] fixed h-screen bg-white/80 p-6 border-r">
        <Image
          src="/images/Profilelogo1.png"
          alt="logo"
          width={180}
          height={80}
          className="mx-auto mb-6"
        />

        <nav className="space-y-2">
          {links.map((l, i) => (
            <button
              key={i}
              onClick={() => scrollToSection(l.name)}
              className={`w-full flex gap-3 p-3 rounded-xl transition ${
                activeSection === l.name
                  ? "bg-green-600 text-white"
                  : "hover:bg-green-50"
              }`}
            >
              <l.icon className="w-5 h-5" />
              {l.name}
            </button>
          ))}
        </nav>
      </div>

      {/* MAIN */}
      <div className="md:w-[80%] w-full md:ml-[20%]">

        <Hero/>
        {/* SECTIONS */}
        <About />
        <Skills />
        <Services />
        <PortFollio />
        <Contactus />
        <Footer />
      </div>
    </div>
  );
}

export default Page;