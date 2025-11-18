"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Github,
  Linkedin,
  Facebook,
  Instagram,
  Download,
  Mail, // ✅ keep this one
  Phone,
  MapPin,
  ExternalLink,
  Code,
  Palette,
  Users,
  Award,
  Calendar,
  Star,
  Home,
  User,
  Wrench,
  Zap,
  Folder,
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";

function Page() {
  const [activeSection, setActiveSection] = useState("Home");
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Add this state

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Update your scrollToSection function
  const scrollToSection = (sectionName) => {
    setActiveSection(sectionName);

    // Map section names to their IDs
    const sectionMap = {
      Home: "home",
      "About Me": "about",
      Services: "services",
      Skills: "skills",
      Portfolio: "portfolio",
      Contact: "contact",
    };

    const sectionId = sectionMap[sectionName];
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const links = [
    { name: "Home", icon: Home },
    { name: "About Me", icon: User },
    { name: "Services", icon: Wrench },
    { name: "Skills", icon: Zap },
    { name: "Portfolio", icon: Folder },
    { name: "Contact", icon: Mail },
  ];

  const services = [
    {
      title: "Web Development",
      description:
        "Creating responsive and interactive websites with modern technologies",
      icon: <Code className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "UI/UX Design",
      description:
        "Designing user-friendly interfaces with focus on user experience",
      icon: <Palette className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Consulting",
      description:
        "Providing expert advice on web technologies and best practices",
      icon: <Users className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
    },
  ];

  const frontendSkills = [
    {
      name: "HTML",
      percent: 98,
      icon: "https://img.icons8.com/color/48/html-5.png",
    },
    {
      name: "CSS",
      percent: 95,
      icon: "https://img.icons8.com/color/48/css3.png",
    },
    {
      name: "JavaScript",
      percent: 90,
      icon: "https://img.icons8.com/color/48/javascript.png",
    },
   
    {
      name: "Tailwind",
      percent: 88,
      icon: "https://img.icons8.com/color/48/tailwind_css.png",
    },
    {
      name: "Bootstrap",
      percent: 85,
      icon: "https://img.icons8.com/color/48/bootstrap.png",
    },
     {
      name: "ShadCN",
      percent: 92,
      icon: "/images/shadcn.png",
    },
     {
      name: "ReactJS",
      percent: 92,
      icon: "https://img.icons8.com/color/48/react-native.png",
    },
     {
      name: "NextJS",
      percent: 92,
      icon: "https://img.icons8.com/color/48/nextjs.png",
    },
  ];

  const backendSkills = [
    {
      name: "Node.js",
      percent: 89,
      icon: "https://img.icons8.com/color/48/nodejs.png",
    },
    {
      name: "Express.js",
      percent: 90,
      icon: "/images/express.svg",
    },
    {
      name: "MongoDB",
      percent: 90,
      icon: "https://img.icons8.com/color/48/mongodb.png",
    },
    {
      name: "MySQL",
      percent: 75,
      icon: "https://img.icons8.com/fluency/48/mysql-logo.png",
    },
    {
      name: "REST API",
      percent: 100,
      icon: "/images/restAPI.png",
    },
    {
      name: "JWT Auth",
      percent: 100,
      icon: "/images/jwt.png",
    },
  ];

  const fullStackApps = [
  {
    image: "/images/chatly.png",
    title: "Chatly – Real-Time Chat App",
    hostLink: "https://chattochatly4.netlify.app/",
    githubLink: "https://github.com/hameedgul12345/Chatly",
    paragraph:
      "A modern chat application built with the MERN stack and Socket.IO, featuring real-time messaging, media sharing, and group chats.",
    tech: ["React", "Node.js", "MongoDB", "Socket.IO"],
  },
  {
    image: "/images/vibeo.png",
    title: "Vibeo – Social Media Platform",
    hostLink: "https://vibeo1.netlify.app/",
    githubLink: "https://github.com/hameedgul12345/Vibeo",
    paragraph:
      "A full-stack social media platform built with React, Node.js, and MongoDB, featuring user authentication, post creation, and interactive feeds.",
    tech: ["React", "Node.js", "MongoDB", "JWT/Auth"],
  },
  {
    image: "/images/taskapp.png",
    title: "TaskFlow – Project Management App",
    hostLink: "https://chattochatly4.netlify.app/",
    githubLink: "https://github.com/hameedgul12345/Chatly",
    paragraph:
      "Collaborative project manager with Kanban boards, drag-and-drop tasks, and team chat, built using Next.js, TypeScript, and Prisma.",
    tech: ["Next.js", "TypeScript", "Prisma", "Socket.IO"],
  },
  {
    image: "/images/socialapp.png",
    title: "ConnectHub – Social Media Dashboard",
    hostLink: "https://chattochatly4.netlify.app/",
    githubLink: "https://github.com/hameedgul12345/Chatly",
    paragraph:
      "A social media analytics dashboard for post scheduling and insights, featuring D3.js visualizations and a PostgreSQL backend.",
    tech: ["React", "D3.js", "Express", "PostgreSQL"],
  },
  {
    image: "/images/weatherapp.png",
    title: "WeatherNow – Forecast App",
    hostLink: "https://chattochatly4.netlify.app/",
    githubLink: "https://github.com/hameedgul12345/Chatly",
    paragraph:
      "A weather application using OpenWeather API for location-based forecasts, interactive maps, and real-time updates.",
    tech: ["React Native", "OpenWeather API", "Redux", "Firebase"],
  },
  {
    image: "/images/aichat.png",
    title: "AI Chat Assistant",
    hostLink: "https://chattochatly4.netlify.app/",
    githubLink: "https://github.com/hameedgul12345/Chatly",
    paragraph:
      "An intelligent AI chatbot powered by machine learning, with natural language understanding and FastAPI backend.",
    tech: ["Python", "TensorFlow", "React", "FastAPI"],
  },
];


  const socialLinks = [
    {
      icon: <Facebook className="w-5 h-5" />,
      href: "https://web.facebook.com/hameed.gul.449778",
      color: "hover:bg-blue-600",
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      href: "https://www.instagram.com/hameedgulfirebase31590/",
      color: "hover:bg-pink-600",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/hameed-gul-408453269/",
      color: "hover:bg-blue-700",
    },
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/hameedgul12345",
      color: "hover:bg-gray-800",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen w-full flex flex-row">
      {/* Mobile Navbar */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/images/Profilelogo1.png"
              alt="Logo"
              width={120}
              height={50}
              className="h-8 w-auto"
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="bg-white border-t border-gray-200 shadow-lg">
            <nav className="px-4 py-2">
              {links.map((link, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setActiveSection(link.name);
                    setIsMobileMenuOpen(false);
                    scrollToSection(link.name);
                  }}
                  className={`w-full p-3 px-4 rounded-xl cursor-pointer transition-all duration-300 flex items-center gap-3 mb-2 ${
                    activeSection === link.name
                      ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg"
                      : "text-gray-700 hover:bg-green-50 hover:text-green-700"
                  }`}
                >
                  <span className="text-lg">
                    <link.icon className="w-5 h-5" />
                  </span>
                  <span className="font-medium">{link.name}</span>
                </button>
              ))}
            </nav>

            {/* Mobile Contact Info */}
            <div className="px-4 py-4 bg-gray-50 border-t border-gray-200">
              <h4 className="font-semibold text-gray-800 mb-3 text-sm">
                Quick Contact
              </h4>
              <div className="space-y-2 text-xs">
                <div className="flex items-center gap-2 text-gray-600">
                  <Mail className="w-3 h-3" />
                  <span>hameed@example.com</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Phone className="w-3 h-3" />
                  <span>+1 234 567 890</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="w-3 h-3" />
                  <span>Pakistan</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Sidebar */}
      <div className="w-[0%] overflow-hidden md:overflow-visible md:w-[20%] fixed top-0 left-0 bg-white/80 backdrop-blur-md h-screen md:p-6 shadow-xl border-r border-gray-200 z-50">
        <div className="text-center mb-8">
          <Image
            src="/images/Profilelogo1.png"
            alt="Logo"
            width={200}
            height={80}
            className="mx-auto"
          />
        </div>

        <nav className="space-y-2">
          {links.map((link, idx) => (
            <button
              key={idx}
              onClick={() => {
                setActiveSection(link.name);
                setIsMobileMenuOpen(false);
                scrollToSection(link.name);
              }}
              className={`w-full p-3 px-4 rounded-xl cursor-pointer transition-all duration-300 flex items-center gap-3 ${
                activeSection === link.name
                  ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg transform scale-105"
                  : "text-gray-700 hover:bg-green-50 hover:text-green-700"
              }`}
            >
              <span className="text-lg">
                <link.icon className="w-5 h-5" />
              </span>
              <span className="font-medium">{link.name}</span>
            </button>
          ))}
        </nav>

        {/* Contact Info */}
        {/* <div className="mt-8 p-4 bg-gray-50 rounded-xl">
          <h4 className="font-semibold text-gray-800 mb-3">Quick Contact</h4>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2 text-gray-600">
              <Mail className="w-4 h-4" />
              <span>hameed@example.com</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Phone className="w-4 h-4" />
              <span>+1 234 567 890</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin className="w-4 h-4" />
              <span>Pakistan</span>
            </div>
          </div>
        </div> */}
      </div>

      {/* Main Content */}
      <div className="md:w-[80%] w-[100%] md:ml-[20%] flex flex-col min-h-screen">
        {/* Hero Section */}
        <section
          id="home"
          className="flex md:flex-row flex-col-reverse justify-between items-center py-20 px-8 md:px-16"
        >
          <div className="md:w-1/2 text-center border-yellow md:text-left space-y-6">
            <div
              className={`transition-all duration-1000 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <h3 className="text-gray-600 text-lg font-medium">
                👋 Hi, I am Hameed
              </h3>

              <h1
                className="
          bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent
          text-3xl sm:text-4xl md:text-xl font-extrabold 
          leading-tight tracking-tight
        "
              >
                Full Stack Web
                <br />
                <span className="text-black">Developer</span>
              </h1>

              <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
                I am a full stack web developer with a passion for creating
                beautiful and functional websites. Specializing in React.js,
                Next.js, and modern web technologies to build scalable
                applications that deliver exceptional user experiences.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                <Download className="w-5 h-5" />
                Download CV
              </button>
              <button className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-full font-semibold hover:bg-green-600 hover:text-white transition-all duration-300">
                View Portfolio
              </button>
            </div>

            <div className="pt-6">
              <h4 className="text-gray-600 mb-4 font-medium">Follow Me On</h4>
              <div className="flex gap-4 justify-center md:justify-start">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    className={`w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 ${social.color} transition-all duration-300 hover:scale-110 hover:text-white`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
            <div
              className={`transition-all duration-1000 delay-300 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full blur-2xl opacity-30 animate-pulse"></div>
                <Image
                  src="/images/profilepic.png"
                  alt="Profile Picture"
                  className="relative w-80 h-80 rounded-full border-4 border-white shadow-2xl object-cover"
                  width={200}
                  height={200}
                />
              </div>
            </div>
          </div>
        </section>
        {/* About Section */}
        <section id="about" className="py-20 px-8 md:px-16 bg-white/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                About{" "}
                <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  Me
                </span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <p className="text-gray-600 text-lg leading-relaxed">
                  I am Hameed Gul, a passionate Full-Stack Developer
                  specializing in React.js and Next.js. I enjoy building
                  high-quality, responsive web applications with seamless user
                  experiences, combining strong JavaScript skills with a keen
                  eye for design.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  My expertise includes developing interactive web applications,
                  managing state efficiently, optimizing performance, and
                  leveraging modern web technologies to deliver scalable and
                  maintainable solutions. I strive to create applications that
                  are both functional and visually appealing.
                </p>

               
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  My Expertise
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Frontend Development</span>
                    <span className="text-green-600 font-semibold">95%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-green-600 to-emerald-600 h-2 rounded-full"
                      style={{ width: "95%" }}
                    ></div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Backend Development</span>
                    <span className="text-green-600 font-semibold">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-green-600 to-emerald-600 h-2 rounded-full"
                      style={{ width: "85%" }}
                    ></div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">UI/UX Design</span>
                    <span className="text-green-600 font-semibold">80%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-green-600 to-emerald-600 h-2 rounded-full"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Skills Section */}
        <section id="skills" className="py-20 px-8 md:px-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-green-600 font-medium mb-2">Tech Stack</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Explore My{" "}
                <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  Skills
                </span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto rounded-full"></div>
            </div>

            {/* Frontend Skills */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
                Frontend Technologies
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {frontendSkills.map((skill, i) => (
                  <div
                    key={i}
                    className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                  >
                    <div className="flex flex-col items-center text-center">
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform duration-300"
                      />
                      <h4 className="font-semibold text-gray-800 mb-2">
                        {skill.name}
                      </h4>
                      <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                        <div
                          className="bg-gradient-to-r from-green-600 to-emerald-600 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.percent}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-green-600">
                        {skill.percent}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend Skills */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
                Backend Technologies
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {backendSkills.map((skill, i) => (
                  <div
                    key={i}
                    className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                  >
                    <div className="flex flex-col items-center text-center">
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform duration-300"
                      />
                      <h4 className="font-semibold text-gray-800 mb-2">
                        {skill.name}
                      </h4>
                      <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                        <div
                          className="bg-gradient-to-r from-green-600 to-emerald-600 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.percent}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-green-600">
                        {skill.percent}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* Services Section */}
        <section id="services" className="py-20 px-8 md:px-16 bg-white/50">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                My{" "}
                <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  Services
                </span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto rounded-full"></div>
            </div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-3 gap-8">
              {/* Service 1 */}
              <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-code text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Frontend Development
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Building responsive, fast, and modern user interfaces using
                  React.js and Next.js with a focus on performance and user
                  experience.
                </p>
              </div>

              {/* Service 2 */}
              <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-server text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Backend Development
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Creating secure and scalable APIs using Node.js, Express, and
                  MongoDB to support modern applications and integrations.
                </p>
              </div>

              {/* Service 3 */}
              <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-700 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-laptop-code text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Full Stack Solutions
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Delivering complete end-to-end solutions from frontend to
                  backend, ensuring smooth functionality, optimization, and
                  clean architecture.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Portfolio Section */}
        <section id="portfolio" className="py-20 px-8 md:px-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-green-600 font-medium mb-2">My Work</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Featured{" "}
                <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  Projects
                </span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto rounded-full"></div>
            </div>

            {/* Portfolio Filter */}
            <div className="flex justify-center mb-12">
              <div className="flex flex-wrap gap-4 bg-white p-2 rounded-full shadow-lg">
                {["All", "Web App", "Mobile App", "UI/UX", "E-commerce"].map(
                  (filter, idx) => (
                    <button
                      key={idx}
                      className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                        idx === 0
                          ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg"
                          : "text-gray-600 hover:bg-green-50 hover:text-green-700"
                      }`}
                    >
                      {filter}
                    </button>
                  )
                )}
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {fullStackApps.map((app, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={app.image}
                      alt={app.title}
                      width={500}
                      height={300}
                      className="w-full h-48 object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex gap-4">
                        <Link
                          href={app.hostLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300">
                            <ExternalLink className="w-5 h-5" />
                          </button>
                        </Link>
                        <Link
                          href={app.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300">
                            <Github className="w-5 h-5" />
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {app.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {app.paragraph}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {app.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* View More Button */}
            <div className="text-center mt-12">
              <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 mx-auto">
                <Folder className="w-5 h-5" />
                View All Projects
              </button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-8 md:px-16 bg-white/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-green-600 font-medium mb-2">Get In Touch</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  Connect width Me!
                </span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">
                    Get In Touch
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    I'm always open to discussing new projects, creative ideas,
                    or opportunities to be part of your visions. Feel free to
                    reach out!
                  </p>
                </div>

                {/* Contact Details */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Email</h4>
                      <p className="text-gray-600">hameed@example.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Phone</h4>
                      <p className="text-gray-600">+1 234 567 890</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Location</h4>
                      <p className="text-gray-600">Pakistan</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <h4 className="font-semibold text-gray-800 mb-4">
                    Follow Me
                  </h4>
                  <div className="flex gap-4">
                    {socialLinks.map((social, idx) => (
                      <a
                        key={idx}
                        href={social.href}
                        className={`w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center text-gray-600 ${social.color} transition-all duration-300 hover:scale-110 hover:text-white`}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Send Message
                </h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                      placeholder="Project Inquiry"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="6"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell me about your project..."
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-4 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Mail className="w-5 h-5" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* Footer */}
        <footer className="bg-gray-800 text-white py-12 px-8 md:px-16">
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-8">
              <Image
                src="/images/Profilelogo1.png"
                alt="Logo"
                width={100}
                height={100}
                className="mx-auto mb-4"
              />
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                A passionate React.js and Next.js developer dedicated to
                creating exceptional web experiences.
              </p>
            </div>

            <div className="flex justify-center gap-6 mb-8">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className={`w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-gray-300 ${social.color} transition-all duration-300 hover:scale-110`}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <div className="border-t border-gray-700 pt-8">
              <p className="text-gray-400">
                © 2024 Hameed Gul. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Page;
