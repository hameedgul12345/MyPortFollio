import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";

function Contactus() {
  const socialLinks = [
    { href: "#", icon: Twitter, color: "hover:bg-sky-500" },
    { href: "#", icon: Linkedin, color: "hover:bg-blue-600" },
    { href: "#", icon: Github, color: "hover:bg-gray-900" },
  ];

  return (
    <section id="contact" className="py-20 px-8 md:px-16 relative overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.12),transparent_60%)]" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-16"
        >
          <p className="text-green-600 font-medium mb-2">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            <span className="text-transparent bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text">
              Connect with Me!
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* LEFT SIDE */}
          <div className="space-y-8">

            {[
              { icon: Mail, label: "Email", value: "hameed@example.com" },
              { icon: Phone, label: "Phone", value: "+1 234 567 890" },
              { icon: MapPin, label: "Location", value: "Pakistan" },
            ].map((item, i) => (
              <div
                key={i}
                className="p-4 bg-white/80 backdrop-blur-xl rounded-xl shadow-lg flex items-center gap-4 hover:shadow-xl transition"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl flex items-center justify-center text-white">
                  <item.icon className="w-6 h-6" />
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800">{item.label}</h4>
                  <p className="text-gray-600">{item.value}</p>
                </div>
              </div>
            ))}

            {/* Social */}
          {/* 🌊 FLOATING SOCIAL ICONS */}
<div>
  <h4 className="font-semibold text-gray-800 mb-4">Follow Me</h4>

  <div className="flex gap-4">

    {socialLinks.map((s, i) => (
      <motion.a
        key={i}
        href={s.href}
        target="_blank"
        animate={{
          y: [0, -6, 0],
        }}
        transition={{
          duration: 2 + i * 0.3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{
          scale: 1.2,
          rotate: 8,
        }}
        className={`w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center text-gray-700 transition ${s.color}`}
      >
        <s.icon className="w-5 h-5" />
      </motion.a>
    ))}

  </div>
</div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="bg-white/80 backdrop-blur-xl p-8 rounded-2xl shadow-xl">

            <h3 className="text-2xl font-bold mb-6 text-gray-800">
              Send Message
            </h3>

            <form className="space-y-5">

              <input className="input" placeholder="Full Name" />
              <input className="input" placeholder="Email" />
              <input className="input" placeholder="Subject" />

              <textarea
                rows="5"
                className="input resize-none"
                placeholder="Message"
              />

              <button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 rounded-xl font-semibold hover:scale-[1.02] transition">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* styles */}
      <style jsx>{`
        .input {
          width: 100%;
          padding: 12px 14px;
          border-radius: 12px;
          border: 1px solid #e5e7eb;
          outline: none;
          transition: 0.3s;
          background: rgba(255,255,255,0.9);
        }

        .input:focus {
          border-color: #22c55e;
          box-shadow: 0 0 0 4px rgba(34,197,94,0.15);
        }
      `}</style>

    </section>
  );
}

export default Contactus;