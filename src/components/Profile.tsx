"use client";
import React from "react";
import gsap from "gsap";
import Image from "next/image";
import { Github, Twitter, Linkedin } from "lucide-react";

export default function Profile() {
  const TagRef = React.useRef<HTMLSpanElement>(null);
  const skillsRef = React.useRef<HTMLDivElement[]>([]);
  const [hovertype, setHovertype] = React.useState(false);

  const skilllist = [
    { name: "JavaScript", level: "Advanced" },
    { name: "TypeScript", level: "Advanced" },
    { name: "React", level: "Advanced" },
    { name: "Node.js", level: "Advanced" },
    { name: "Python", level: "Advanced" },
    { name: "Go", level: "Advanced" },
    { name: "C++ / C#", level: "Advanced" },
    { name: "SQL & NoSQL", level: "Advanced" },
    { name: "Penetration Testing", level: "Advanced" },
    { name: "Reverse Engineering", level: "Intermediate" },
  ];

  const socialLinks = [
    { name: "GitHub", icon: <Github className="w-6 h-6" />, url: "https://github.com/XiaoHei14" },
    { name: "Twitter", icon: <Twitter className="w-6 h-6" />, url: "https://twitter.com/daohui587" },
    { name: "LinkedIn", icon: <Linkedin className="w-6 h-6" />, url: "https://www.linkedin.com/in/yun-hao-wang/" },
  ];

  const toollist = [
    { name: "VSCode", icon: "/tools/vscode.png" },
    { name: "Git", icon: "/tools/git.png" },
    { name: "Linux", icon: "/tools/linux.png" },
    { name: "Burp Suite", icon: "/tools/burpsuite.png" },
    { name: "Wireshark", icon: "/tools/wireshark.png" },
    { name: "Metasploit", icon: "/tools/metasploit.png" },
  ];

  React.useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 });
    if (TagRef.current) {
      tl.fromTo(
        TagRef.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
      );
    }
    tl.fromTo(
      skillsRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power2.out", stagger: 0.15 }
    );
  }, []);

  return (
    <section className="relative w-full min-h-screen flex justify-center items-center bg-violet-600 overflow-hidden p-4">
      {/* Grid 背景 */}
      <div className="absolute inset-0 z-10">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(#e9d4ff 1px, transparent 1px),
              linear-gradient(90deg, #e9d4ff 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      {/* 背景圓形 */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] rounded-t-full blur-3xl opacity-80"
        style={{
          background:
            "radial-gradient(circle at center bottom, #a684ff 0%, #8e51ff 100%)",
        }}
      />

      {/* 內容卡片 */}
      <div className="relative text-white z-10 bg-violet-400/50 backdrop-blur-lg w-full max-w-7xl md:max-w-4xl min-h-screen border border-white/20 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-col lg:flex-col">
        {/* 標題 */}
        <div className="text-white text-center text-3xl sm:text-4xl md:text-5xl font-bold p-6 font-mono">
          <h1>Whoami</h1>
        </div>

        {/* 頭像與個人資訊 */}
        <div className="flex flex-col sm:flex-row items-center w-full p-4 sm:p-6 gap-6">
          {/* 頭像 */}
          <div className="relative group flex-shrink-0">
            <div className="relative w-32 h-32 sm:w-36 sm:h-36 bg-gradient-to-br from-indigo-300 to-purple-300 rounded-full flex items-center justify-center border-4 border-white shadow-lg group-hover:scale-105 group-hover:ring-4 group-hover:ring-white/40 transition-all duration-200">
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <Image
                  src="/chaewon.jpg"
                  alt="Profile Picture"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          {/* 個人資訊 */}
          <div className="flex flex-col justify-center text-center sm:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-wide">DaoHui</h1>
            <span
              ref={TagRef}
              onMouseEnter={() => setHovertype(true)}
              onMouseLeave={() => setHovertype(false)}
              className="text-[#b891f5] hover-glow font-bold cursor-pointer select-none transition-colors duration-300 text-sm sm:text-base mt-1"
            >
              {hovertype ? "i love chaewon 💜" : "@daohuirealm"}
            </span>
            <p className="text-sm sm:text-base text-white/90 mt-2">
              Full Stack Developer & Web Penetration Tester
            </p>
            <p className="text-xs sm:text-sm text-white/80 mt-1 leading-relaxed max-w-xs sm:max-w-md">
              Full Stack Developer with a passion for secure and scalable applications. Skilled in React, Node.js, and cloud platforms, bridging development and penetration testing to create resilient solutions.
            </p>
          </div>
        </div>

        {/* Skills & Social */}
        <div className="flex flex-col lg:flex-row gap-6 p-5">
          {/* Skills */}
          <div className="flex-2">
            <div className="flex items-center mb-3">
              <div className="w-2 h-6 bg-gradient-to-b from-indigo-700 to-purple-700 rounded-full"></div>
              <span className="text-xl sm:text-2xl font-bold ml-3">My Skills</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {skilllist.map((skill, i) => (
                <div
                  key={skill.name}
                  ref={(el) => { if (el) skillsRef.current[i] = el }}
                  className="skill-card bg-violet-400/60 p-3 sm:p-4 rounded-lg border border-white/20 hover:bg-violet-500/60 transition-all duration-300 hover:scale-105 hover:shadow-lg text-center"
                >
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold">{skill.name}</h3>
                  <p className="text-white/90 text-xs sm:text-sm mt-1">{skill.level}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Social */}
          <div className="flex-1">
            <div className="flex items-center mb-3">
              <div className="w-2 h-6 bg-gradient-to-b from-indigo-700 to-purple-700 rounded-full"></div>
              <span className="text-xl sm:text-2xl font-bold ml-3">Social</span>
            </div>
            <div className="grid grid-cols-3 gap-3 sm:grid-cols-3 md:grid-cols-1">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center md:justify-start p-3 bg-violet-400/60 rounded-full border border-white/20 hover:bg-violet-500/70 transition-colors duration-200 gap-2"
                >
                  {link.icon}
                  <span className="text-xs sm:text-sm md:text-base">{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* My Tool */}

        <div className="p-5">
            <div className="flex items-center mb-3">
              <div className="w-2 h-6 bg-gradient-to-b from-indigo-700 to-purple-700 rounded-full"></div>
              <span className="text-xl sm:text-2xl font-bold ml-3">My Tool</span>
            </div>
            {toollist.map((tool) => (
              <div 
                key={tool.name}
                className="inline-block m-2 p-2 bg-violet-400/60 rounded-lg border border-white/20 hover:bg-violet-500/70 transition-colors duration-200"
              >
                <div className="relative w-12 h-12 sm:w-16 sm:h-16">
                  <Image
                    src={tool.icon}
                    alt={tool.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
        </div>
        <div className="relative p-5 flex-1">
            <div className="absolute bottom-1 right-4 text-white/30 text-xs select-none">
                <div>© 2024 DaoHui. All rights reserved.</div>
                <div>Built with Next.js, Tailwind CSS, GSAP, and ❤️</div>
            </div>    
        </div>
    

        {/* Glow Text Style */}
        <style jsx>{`
          .hover-glow:hover {
            text-shadow: 0 0 10px rgba(255, 182, 255, 0.8);
            background: linear-gradient(90deg, #ff7de9, #b794ff);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        `}</style>
      </div>
    </section>
  );
}
