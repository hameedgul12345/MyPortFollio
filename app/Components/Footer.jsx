import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Facebook, Linkedin, Github } from "lucide-react";

/* 🌌 Particle Galaxy */
function Particles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = 300);

    const particles = Array.from({ length: 90 }).map(() => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 2,
      dx: (Math.random() - 0.5) * 0.6,
      dy: (Math.random() - 0.5) * 0.6,
    }));

    function animate() {
      ctx.clearRect(0, 0, w, h);

      const gradient = ctx.createRadialGradient(w / 2, h / 2, 50, w / 2, h / 2, w);
      gradient.addColorStop(0, "rgba(34,197,94,0.18)");
      gradient.addColorStop(1, "transparent");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, w, h);

      particles.forEach((p) => {
        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > w) p.dx *= -1;
        if (p.y < 0 || p.y > h) p.dy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255,0.8)";
        ctx.fill();
      });

      requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener("resize", () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = 300;
    });
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
}

function Footer() {
  const socialLinks = [
    {
      href: "https://facebook.com",
      icon: Facebook,
      color: "hover:bg-blue-600",
    },
    {
      href: "https://linkedin.com",
      icon: Linkedin,
      color: "hover:bg-blue-700",
    },
    {
      href: "https://github.com",
      icon: Github,
      color: "hover:bg-gray-900",
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-gray-900 text-white py-16 px-8 md:px-16">

      {/* 🌌 Particle Background */}
      <Particles />

      {/* 🌊 Glow Wave */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(34,197,94,0.25),transparent_70%)] animate-pulse" />

      <div className="relative z-10 max-w-6xl mx-auto text-center">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <Image
            src="/images/Profilelogo1.png"
            alt="Logo"
            width={90}
            height={90}
            className="mx-auto mb-3"
          />

          <p className="text-gray-300 max-w-xl mx-auto">
            A passionate Full-Stack Developer building modern web experiences.
          </p>
        </motion.div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-8">
          {socialLinks.map((s, i) => (
            <motion.a
              key={i}
              href={s.href}
              target="_blank"
              whileHover={{ scale: 1.2, rotate: 8 }}
              className={`w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md transition ${s.color}`}
            >
              <s.icon className="w-5 h-5 text-white" />
            </motion.a>
          ))}
        </div>

        {/* Bottom Text */}
        <p className="text-gray-400 text-sm">
          © 2026 Hameed Gul. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;