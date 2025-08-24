import React from "react";

import "./Hexagon.css"; // We'll create this CSS file next
import Image from "next/image";

function page() {
  const links = [
    "Home",
    "About Me",
    "Service",
    "Skills",
    "Portfolio",
    "Feedback",
    "Contact",
  ];
   const outerHexagons = [
    'EMAIL MARKETING',
    'SOCIAL MEDIA',
    'SEO MARKETING',
    'GRAPHIC DESIGN',
    'PPC MARKETING',
    'VIDEO MARKETING'
  ];
  const logoUrl = "/images/logo.png"; // Path to your company
const frontendSkills = [
  { name: 'HTML', percent: 98, icon: 'https://img.icons8.com/color/48/html-5.png' },
  { name: 'CSS', percent: 95, icon: 'https://img.icons8.com/color/48/css3.png' },
  { name: 'JavaScript', percent: 90, icon: 'https://img.icons8.com/color/48/javascript.png' },
  { name: 'React', percent: 92, icon: 'https://img.icons8.com/color/48/react-native.png' },
  { name: 'Tailwind', percent: 88, icon: 'https://img.icons8.com/color/48/tailwind_css.png' },
  { name: 'Bootstrap', percent: 85, icon: 'https://img.icons8.com/color/48/bootstrap.png' },
];

const backendSkills = [
  { name: 'Node.js', percent: 89, icon: 'https://img.icons8.com/color/48/nodejs.png' },
  { name: 'Express.js', percent: 87, icon: 'https://img.icons8.com/ios-filled/50/000000/express-js.png' },
  { name: 'MongoDB', percent: 82, icon: 'https://img.icons8.com/color/48/mongodb.png' },
  { name: 'MySQL', percent: 78, icon: 'https://img.icons8.com/fluency/48/mysql-logo.png' },
  { name: 'REST API', percent: 90, icon: 'https://img.icons8.com/external-flat-icons-inmotus-design/67/external-api-digital-marketing-flat-icons-inmotus-design.png' },
  { name: 'JWT Auth', percent: 85, icon: 'https://img.icons8.com/ios-filled/50/000000/jwt.png' },
];

 
  return (
    <div className="bg-white min-h-screen w-full flex flex-row">
      {/* Sidebar - 20% */}
      <div className=" w-[0%] overflow-hidden md:overflow-visible md:w-[20%] fixed top-0 left-0 bg-[#EFEFEF] h-screen  md:p-6 shadow-lg ">
        <div className="text-green-700 font-bold text-xl mb-6">
          <Image src="/images/Profilelogo1.png" alt="Logo" width={300} height={100} />



        </div>
        <ul className="space-y-4">
          {links.map((link, idx) => (
            <li
              key={idx}
              className={`p-2 px-4 rounded-lg cursor-pointer ${
                idx === 0
                  ? "bg-green-700 text-white"
                  : "text-gray-700 hover:bg-green-700"
              }`}
            >
              {link}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content - 80% */}
      <div className="md:w-[80%] w-[100%] md:ml-[20%]    flex flex-col items-center justify-between  py-10 bg-[#f5fcfc] min-h-[80vh]">
        {/* Hero Section */}
        <div className="flex  md:flex-row flex-col-reverse justify-between items-center">
          <div className="md:w-1/2 text-center md:text-left space-y-4">
            <h3 className="text-gray-700 text-lg">👋 Hi I’m Hameed</h3>
            <h1 className="text-3xl md:block hidden sm:text-4xl font-extrabold text-black mb-2">
              A ReactJS & 
              <span className="text-green-700 text-3xl sm:text-4xl font-extrabold"> NextJS Developer</span>
            </h1>
            <h1 className="text-4xl md:hidden block font-bold">
              A ReactJS & NextJS
              <span className="text-green-700 italic"> Developer</span>
            </h1>
            <p className="text-gray-500 text-justify md:p-0 px-4 max-w-md">
              I am a passionate React.js and Next.js developer with a keen eye
              for detail and a love for creating dynamic, user-friendly web
              applications. My expertise lies in building scalable and efficient
              front-end solutions that enhance user experience and drive
              engagement.
            </p>
            
            <div className="mt-6">
              <h4 className="text-gray-600 mb-2">Follow Me On</h4>
              <div className="flex flex-row md:justify-start justify-center gap-4">
                <div className=" text-black w-10 bg-white border-1 border-black p-1 rounded-sm flex items-center justify-center">
                  <i className="ri-facebook-fill text-2xl"></i>
                </div>
                <div className=" text-black w-10 bg-white border-1 border-black p-1 rounded-sm flex items-center justify-center ">
                  <i className="ri-instagram-line text-2xl"></i>
                </div>
                <div className="  text-black w-10 bg-white border-1 border-black p-1 rounded-sm flex items-center justify-center">
                  <i className="ri-linkedin-fill text-2xl"></i>
                </div>
                <div className="  text-black w-10 bg-white border-1 border-black p-1 rounded-sm flex items-center justify-center ">
                  <i className="ri-github-fill text-2xl"></i>
                </div>
              </div>
            </div>
          </div>
          {/* <i class="ri-facebook-fill"></i>, <i class="ri-instagram-line"></i>, <i class="ri-linkedin-fill"></i>, <i class="ri-github-fill"></i> */}
          <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
            <img
              src="/images/profile2.png"
              alt="Profile"
              className="w-80 rounded-full border-2 border-green-700"
            />
          </div>
        </div>
        {/* About Section */}
        <section>
          <div className="mt-10 w-full md:px-18 rounded-lg shadow-md">
           <div>
             <h2 className="text-green-700 text-3xl sm:text-4xl font-extrabold ">About Me</h2>
           </div>
           <div className=" flex flex-col md:flex-row items-center justify-center gap-4">
             <p className="text-gray-600 text-justify">
              I am Hameed Gul a dedicated React.js and Next.js developer with a strong
              passion for building high-quality web applications. With a solid
              foundation in JavaScript and a keen eye for design, I strive to
              create seamless user experiences. My journey in web development has
              equipped me with the skills to tackle complex challenges and deliver
              innovative solutions. I am always eager to learn and adapt to new
              technologies, ensuring that I stay at the forefront of the ever-evolving
              web development landscape.
             
            </p>
            <p className="text-gray-600 text-justify">
               My expertise includes developing responsive and interactive web
              applications using React.js and Next.js. I have a strong understanding
              of state management, component lifecycle, and performance optimization.
              I am proficient in integrating APIs, managing application state with
              tools like Redux, and implementing best practices for code quality and
              maintainability. I am also experienced in collaborating with cross-functional
              teams to deliver projects on time and within scope.
            </p>
           </div>
           <div className="flex gap-4 mt-4">
              <button className="bg-green-700 text-white  px-4 py-2 rounded-full">
                Download CV
              </button>
            </div>
          
          </div>
        </section>

              {/* user:hamidkhan31590 */}
              {/* password:zaWiScEMzp9urVOs */}
              {/* npm install mongodb */}
              {/* mongodb+srv://hamidkhan31590:zaWiScEMzp9urVOs@cluster0.e0aaqpj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0 */}

        {/* Skills Section */}
        {/* <section className="mt-10 w-full md:px-18 rounded-lg shadow-md">
          <h2 className="text-green-700 text-3xl sm:text-4xl font-extrabold mb-6">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <h3 className="text-gray-700 font-semibold">React.js</h3>
              <p className="text-gray-500">Building dynamic user interfaces</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <h3 className="text-gray-700 font-semibold">Next.js</h3>
              <p className="text-gray-500">Server-side rendering and static site generation</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <h3 className="text-gray-700 font-semibold">JavaScript</h3>
              <p className="text-gray-500">Core programming language for web development</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <h3 className="text-gray-700 font-semibold">CSS & HTML</h3>
              <p className="text-gray-500">Styling and structuring web pages</p>
            </div>
          </div>      
        </section> */}
 <section className="bg-[#f5fcfc] w-full  py-16 px-18 text-center">
      <p className="text-gray-500 mb-2 text-sm">Tech Stack</p>
      <h2 className="text-3xl md:text-4xl font-bold mb-10">Let’s Explore My Skills</h2>

      {/* Frontend */}
      <h3 className="text-xl font-semibold mb-6">Frontend</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full mx-auto mb-12">
        {frontendSkills.map((skill, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center">
            <img src={skill.icon} alt={skill.name} className="w-12 h-12 mb-4" />
            <p className="text-lg font-medium mb-2">{skill.name}</p>
            <div className="bg-green-700 text-white px-4 py-1 rounded-full text-sm font-semibold w-full">
              {skill.percent}%
            </div>
          </div>
        ))}
      </div>

      {/* Backend */}
      <h3 className="text-xl font-semibold mb-6">Backend</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {backendSkills.map((skill, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center">
            <img src={skill.icon} alt={skill.name} className="w-12 h-12 mb-4" />
            <p className="text-lg font-medium mb-2">{skill.name}</p>
            <div className="bg-green-700 text-white px-4 py-1 rounded-full text-sm font-semibold w-full">
              {skill.percent}%
            </div>
          </div>
        ))}
      </div>
    </section>
     {/* Services Section   */}

        <section className="mt-10 w-full md:px-18 rounded-lg shadow-md">


          <h2 className="text-green-700 text-3xl sm:text-4xl font-extrabold mb-6">Services</h2>  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <h3 className="text-gray-700 font-semibold">Web Development</h3>
              <p className="text-gray-500">Creating responsive and interactive websites</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <h3 className="text-gray-700 font-semibold">UI/UX Design</h3>
              <p className="text-gray-500">Designing user-friendly interfaces</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <h3 className="text-gray-700 font-semibold">Consulting</h3>
              <p className="text-gray-500">Providing expert advice on web technologies</p>
            </div>  
          </div>







          </section>

      <div className="hexagon-grid-container">
      <div className="hexagon-grid">
        {/* Center Hexagon (for logo) */}
        <div className="hexagon center-hexagon">
          {<img src="/logo.png" alt="Company Logo" style={{width: '80%'}} /> || <div className="placeholder-logo">LOGO</div>}
        </div>
        
        {/* Outer Hexagons */}
        {outerHexagons.map((text, index) => (
          <div key={index} className={`hexagon outer-hex outer-hex-${index+1}`}>
            <div className="hexagon-content">{text}</div>
          </div>
        ))}
      </div>
    </div>
    
      </div>
    </div>
  );
}

export default page;
