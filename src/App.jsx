import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo1 from './assets/Logo.jpg-removebg-preview.png'
import logo from './assets/Logo.png';
import logoTechLab from './assets/SkillDisha_TechLab_JPG.jpg.jpeg';
import homePic1 from './assets/Home_Page_Pic_1.jpeg';
import homePic2 from './assets/Home_Page_Pic_2.jpeg';
import profilePic from './assets/Profile_Pic.jpeg';
import {
  Shield, Code, Terminal, Database, Trophy, Users,
  ChevronRight, CheckCircle, Mail, Phone, MapPin,
  Github, Twitter, Linkedin, Briefcase, GraduationCap,
  MessageSquare, Menu, X, ArrowRight, ChevronDown
} from 'lucide-react';

// --- Constants & Helpers ---

const WHATSAPP_NUMBER = "916356375745";

const handleWhatsApp = (message = "Hello SkillDisha! I'm interested in learning more about your programs.") => {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
};

// --- Components ---

const Navbar = ({ setActiveTab }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileProgramsOpen, setIsMobileProgramsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Know Your Trainer', href: '#trainer' },
    { name: 'Why Us', href: '#features' },
    { name: 'Contact', href: '#contact' },
  ];

  const categories = [
    { name: 'Cyber Security', href: '#courses', index: 1 },
    { name: 'Cloud Computing & Virtualization', href: '#courses', index: 2 },
    { name: 'IT Infrastructure, Network & System Administration', href: '#courses', index: 0 },
    { name: 'Software Development & Programming', href: '#courses', index: 3 },
  ];

  const handleProgramClick = (index) => {
    setActiveTab(index);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-xl py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          <img src={logo1} alt="SkillDisha TechLab" className="h-24 w-auto object-contain rounded-lg" />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <div
            className="relative group"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className="flex items-center gap-1 text-slate-600 hover:text-blue-600 transition-all duration-300 font-semibold py-2 relative group-hover:scale-105">
              Courses <ChevronDown size={14} className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              <span className="absolute bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 w-64 bg-white rounded-2xl shadow-2xl border border-slate-100 p-2 overflow-hidden mt-2"
                >
                  {categories.map((cat) => (
                    <a
                      key={cat.name}
                      href={cat.href}
                      onClick={() => handleProgramClick(cat.index)}
                      className="group/item block px-4 py-3 rounded-xl hover:bg-blue-50 text-slate-600 hover:text-blue-600 transition-all text-sm font-bold flex items-center justify-between"
                    >
                      <span>{cat.name}</span>
                      <ChevronRight size={14} className="opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300" />
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-slate-600 hover:text-blue-600 transition-colors font-semibold">
              {link.name}
            </a>
          ))}
          <a
            href="tel:+916356375745"
            className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors font-bold"
          >
            <Phone size={18} className="text-blue-600" />
            <span>63563 75745</span>
          </a>
          <button
            onClick={() => handleWhatsApp()}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg shadow-blue-200"
          >
            Join Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2 text-slate-900" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-white border-b border-slate-200 md:hidden overflow-hidden shadow-2xl"
          >
            <div className="p-6 flex flex-col gap-4">
              <div className="space-y-1">
                <button
                  onClick={() => setIsMobileProgramsOpen(!isMobileProgramsOpen)}
                  className="w-full flex items-center justify-between text-slate-700 py-3 px-4 font-bold rounded-xl hover:bg-blue-50 transition-all"
                >
                  Courses <ChevronDown size={14} className={`transition-transform duration-200 ${isMobileProgramsOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {isMobileProgramsOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden pl-4 space-y-1"
                    >
                      {categories.map((cat) => (
                        <a
                          key={cat.name}
                          href={cat.href}
                          className="block text-slate-500 py-3 px-4 hover:text-blue-600 font-bold text-sm border-l-2 border-slate-100 hover:border-blue-600 transition-all"
                          onClick={() => handleProgramClick(cat.index)}
                        >
                          {cat.name}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div className="h-px bg-slate-100 my-1"></div>
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-slate-700 py-3 px-4 font-bold rounded-xl hover:bg-blue-50 hover:text-blue-600 transition-all" onClick={() => setIsMobileMenuOpen(false)}>
                  {link.name}
                </a>
              ))}
              <a
                href="tel:+916356375745"
                className="flex items-center gap-3 text-slate-700 py-3 px-4 font-bold rounded-xl hover:bg-blue-50 hover:text-blue-600 transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Phone size={18} className="text-blue-600" />
                <span>63563 75745</span>
              </a>
              <button
                onClick={() => handleWhatsApp()}
                className="bg-blue-600 text-white py-4 rounded-xl font-black mt-2 shadow-lg shadow-blue-200"
              >
                Book A Call
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const ImageSlider = () => {
  const images = [
    homePic1,
    homePic2,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative h-[400px] md:h-[600px] w-full overflow-hidden mt-[136px]">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover object-top"
          alt={`Slide ${currentIndex + 1}`}
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40 pointer-events-none" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === index ? "bg-white w-8" : "bg-white/50"
              }`}
          />
        ))}
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-24 md:pt-32 pb-12 md:pb-20 overflow-hidden bg-slate-50">
      <div className="absolute top-0 left-0 w-full h-full -z-10 bg-[radial-gradient(circle_at_50%_40%,#eff6ff_0%,#f8fafc_100%)]"></div>
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-100 rounded-full blur-[120px] opacity-60"></div>
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-emerald-50 rounded-full blur-[120px] opacity-60"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6 text-slate-900">
            Unlocking Potential with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">SkillDisha.</span>
          </h1>
          <p className="text-slate-600 text-lg mb-8 max-w-xl">
            Elite training in Cyber Security, Full-Stack Development, and AI. Get industry-ready with hands-on projects and placement support from SkillDisha – India's premier tech institute.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => handleWhatsApp("Hello SkillDisha! I want to enroll in a batch.")}
              className="group bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-bold text-white flex items-center gap-2 transition-all shadow-lg shadow-blue-200"
            >
              Enroll Now <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="/brochure.pdf"
              download="SkillDisha_Brochure.pdf"
              className="px-8 py-4 rounded-xl font-bold text-slate-700 border-2 border-slate-200 hover:border-blue-600 hover:text-blue-600 transition-all shadow-sm inline-block text-center"
            >
              Download Brochure
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative z-10 glass rounded-3xl p-8 border-slate-200 shadow-2xl">
            <div className="flex gap-4 mb-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full bg-slate-200 border-2 border-white overflow-hidden shadow-sm">
                    <img src={`https://i.pravatar.cc/150?u=${i}`} alt="student" />
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">1,000+ Students</p>
                <p className="text-xs text-slate-500 font-medium">Successfully Placed</p>
              </div>
            </div>
            <div className="bg-slate-900 rounded-xl p-4 font-mono text-sm leading-relaxed overflow-hidden border border-slate-800 shadow-inner">
              <p className="text-emerald-400">// Ethical Hacking Module</p>
              <p className="text-blue-400">class SecurityScanner &#123;</p>
              <p className="pl-4 text-slate-300">async scan(target) &#123;</p>
              <p className="pl-8 text-slate-400">console.log(`Scanning $&#123;target&#125;...`);</p>
              <p className="pl-8 text-emerald-400">return await vulnDB.check(target);</p>
              <p className="pl-4 text-slate-300">&#125;</p>
              <p className="text-blue-400">&#125;</p>
            </div>
          </div>
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-40 -z-10"></div>
        </motion.div>
      </div>
    </section>
  );
};

const ProfessionalPrograms = ({ activeTab, setActiveTab }) => {

  const programs = [
    {
      id: "it-infra",
      title: "IT Infrastructure & System Administration",
      duration: "6-8 Months",
      description: "Comprehensive training in IT foundations, network connectivity, and enterprise server management.",
      modules: [
        { name: "Module-1", title: "Digital Office Productivity & Collaboration Tools", desc: "Word, Excel, PowerPoint, Email, Cloud & Team Collaboration" },
        { name: "Module-2", title: "PC Hardware, Diagnostics & System Maintenance", desc: "Computer Components, Assembly, Troubleshooting, Preventive Maintenance & System Health" },
        { name: "Module-3", title: "Computer Networking Foundations & Connectivity Essentials", desc: "Networking Basics, LAN/WAN Concepts, Devices, IP Addressing & Connectivity" },
        { name: "Module-4", title: "Client Operating Systems: Windows 10/11 Administration", desc: "Installation, Configuration, User Management, Security & Troubleshooting" },
        { name: "Module-5", title: "Enterprise Windows Server Administration (2019/2022)", desc: "Active Directory, Users/Group, Domains, DNS, DHCP, Group Policy, File Services & Security" },
        { name: "Module-6", title: "Enterprise Linux System Administration (Redhat 8/9)", desc: "System Installation, Users & Permissions, Services, Networking & Security" }
      ]
    },
    {
      id: "cyber-sec",
      title: "Professional Cyber Security Programs",
      duration: "Varies (15 Days - 3 Months)",
      description: "Advanced security training covering threat intelligence, ethical hacking, and incident response.",
      modules: [
        { name: "Foundation", title: "Cyber Security Foundations & Threat Intelligence", duration: "15 Days", desc: "Understand cyber threats, attack vectors, and security fundamentals" },
        { name: "Network", title: "Network Security, Firewalls & Perimeter Defense", duration: "1 Month", desc: "Secure enterprise networks against internal and external attacks" },
        { name: "Linux", title: "Linux Security & Open-Source Security Operations", duration: "1 Month", desc: "Master Linux administration from a cyber security perspective" },
        { name: "Windows", title: "Windows & Active Directory Security Engineering", duration: "1 Month", desc: "Secure enterprise Windows domains and enterprise environments" },
        { name: "Hacking", title: "Ethical Hacking & Penetration Testing Essentials", duration: "2-3 Months", desc: "Learn legal ethical hacking techniques using structured methodologies" },
        { name: "Web App", title: "Web Application Security & OWASP Top 10", duration: "1-2 Months", desc: "Identify, exploit, and remediate real-world web vulnerabilities" },
        { name: "VAPT", title: "Vulnerability Assessment & Penetration Testing", duration: "1-2 Months", desc: "Assess risk, perform audits, and deliver professional security reports" },
        { name: "Bug Bounty", title: "Bug Bounty Hunting & Responsible Disclosure", duration: "1-2 Months", desc: "Find real-world vulnerabilities and report them ethically" },
        { name: "SOC", title: "Security Operations Center (SOC) & SIEM", duration: "1-2 Months", desc: "Detect, analyse, and respond to live security incidents" },
        { name: "Forensics", title: "Digital Forensics & Incident Response (DFIR)", duration: "1-2 Months", desc: "Investigate cyber-attacks and handle security breaches" },
        { name: "Cloud Sec", title: "Cloud Security & Zero-Trust Architecture", duration: "1 Month", desc: "Secure cloud, hybrid, and modern enterprise environments" }
      ]
    },
    {
      id: "cloud-v",
      title: "Professional Cloud & Virtualization Programs",
      duration: "Varies (10 Days - 1 Month)",
      description: "Expertise in data center architecture, virtualization, and multi-cloud infrastructure.",
      modules: [
        { title: "Data Center Architecture & Design", duration: "15 Days", desc: "Understand modern data centre architecture, power, and high-availability design." },
        { title: "Enterprise Storage Fundamentals", duration: "15 Days", desc: "SAN, NAS, DAS, redundancy, backup, and data protection basics." },
        { title: "Server Virtualization (Microsoft Hyper-V)", duration: "1 Month", desc: "Deploy and manage VMs using Hyper-V in enterprise environments." },
        { title: "Enterprise Virtualization (VMware ESXi & vSphere)", duration: "1 Month", desc: "Configure, manage, and optimize virtual infrastructure." },
        { title: "AWS Cloud Infrastructure Fundamentals", duration: "1 Month", desc: "Compute, storage, networking, and security basics on AWS." },
        { title: "Microsoft Azure Cloud Infrastructure", duration: "1 Month", desc: "Design and operate cloud infrastructure using Azure services." },
        { title: "Microsoft 365 Fundamentals", duration: "10 Days", desc: "Identity, email, and collaboration services using M365." },
        { title: "Basic Cloud Automation & Operations", duration: "10 Days", desc: "Automate routine cloud operations, tracking, and backups." }
      ]
    },
    {
      id: "soft-dev",
      title: "Software Development & Programming",
      duration: "Custom",
      description: "Comprehensive coding programs from school syllabus to elite internship projects.",
      modules: [
        { title: "Website Development", desc: "Front End / Back End / Full Stack using industry-relevant tools and live projects." },
        { title: "Programming (C, C++, Java, Python)", desc: "Build strong logic and problem-solving skills for IT careers." },
        { title: "College Projects & Internship", desc: "Industry-guided mini and final year projects with documentation and certification." },
        { title: "School Syllabus", desc: "Support for school computer practicals and basic coding foundations." }
      ]
    }
  ];

  return (
    <section id="courses" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-slate-900">
            Professional <span className="text-blue-600">Job Oriented</span> Courses
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Elite training programs designed to bridge the gap between education and industry.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {programs.map((program, idx) => (
            <button
              key={program.id}
              onClick={() => setActiveTab(idx)}
              className={`px-6 py-3 rounded-xl font-bold transition-all border ${activeTab === idx
                ? 'bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-200'
                : 'bg-white text-slate-600 border-slate-200 hover:border-blue-300 hover:bg-blue-50'
                }`}
            >
              {program.title}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="grid lg:grid-cols-3 gap-12"
          >
            <div className="lg:col-span-1">
              <div className="bg-slate-50 p-8 rounded-[32px] border border-slate-100 sticky top-32">
                <h3 className="text-3xl font-bold mb-4 text-slate-900 leading-tight">
                  {programs[activeTab].title}
                </h3>
                <div className="flex items-center gap-2 text-blue-600 font-bold mb-6">
                  <Terminal size={20} />
                  <span>Duration: {programs[activeTab].duration}</span>
                </div>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  {programs[activeTab].description}
                </p>
                <button
                  onClick={() => handleWhatsApp(`Hello! I would like to request more information about the *${programs[activeTab].title}* program.`)}
                  className="w-full bg-blue-600 py-4 rounded-2xl font-bold text-white shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
                >
                  Request Info <ArrowRight size={18} />
                </button>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="grid md:grid-cols-2 gap-6">
                {programs[activeTab].modules.map((module, mIdx) => (
                  <motion.div
                    key={mIdx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: mIdx * 0.05 }}
                    className="p-6 bg-white border border-slate-100 rounded-2xl hover:border-blue-100 hover:shadow-xl hover:shadow-blue-50/50 transition-all group"
                  >
                    {module.name && (
                      <span className="text-[10px] font-black uppercase text-blue-600 tracking-widest block mb-2">
                        {module.name}
                      </span>
                    )}
                    <h4 className="font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {module.title}
                    </h4>
                    {module.duration && (
                      <p className="text-xs font-bold text-emerald-600 mb-3">
                        Duration: {module.duration}
                      </p>
                    )}
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {module.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="aspect-video glass rounded-[40px] overflow-hidden shadow-2xl border-white/50">
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1000"
                alt="IT Training Environment"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-blue-600/10 mix-blend-multiply"></div>
            </div>
            <div className="absolute -bottom-8 -right-8 glass p-8 rounded-3xl border-blue-50 shadow-2xl hidden lg:block">
              <p className="text-5xl font-black text-blue-600">20+</p>
              <p className="text-xs font-black text-slate-400 uppercase tracking-widest mt-1">Years of Excellence</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-slate-900 leading-tight">
              About <span className="text-blue-600">SkillDisha TechLab</span>
            </h2>
            <div className="space-y-6 text-slate-600 text-lg font-medium leading-relaxed">
              <p>
                SkillDisha TechLab is a professional IT training institute dedicated to delivering industry-oriented and job-focused courses in Cyber Security, Cloud Computing, Virtualization, Data Center, Networking, Windows Server, Linux Administration, Firewall Management, Storage Management and other IT Infrastructure.
              </p>
              <p>
                We specialize in practical, hands-on training that aligns with real-world job requirements and current IT industry demand. Our training programs are designed for students, graduates, and working professionals who want to build strong technical foundations and advance their careers in the IT domain.
              </p>
              <p>
                At SkillDisha TechLab, learning goes beyond theory — we emphasize real-time labs, practical scenarios, and skill-based learning to ensure job readiness. Training is delivered by experienced industry experts with real corporate exposure, enabling learners to gain both technical expertise and practical confidence.
              </p>
              <p>
                We focus on career guidance, certification preparation, live projects, internships, and job-ready skills, helping learners prepare for employment opportunities in today’s competitive IT market. SkillDisha TechLab is committed to empowering learners with in-demand IT skills, career support, and industry-relevant knowledge to build successful and sustainable careers in technology.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            whileHover={{ y: -5 }}
            className="p-10 bg-white rounded-[40px] border border-slate-100 shadow-xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 text-blue-50 opacity-100 group-hover:scale-110 transition-transform">
              <Trophy size={80} />
            </div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-blue-200">
                <Shield size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">🎯 Mission</h3>
              <p className="text-slate-600 leading-relaxed font-medium">
                To bridge the gap between academics and industry by delivering practical, job-oriented IT training in Cyber Security, Cloud, and IT Infrastructure, enabling learners to build real-world skills and sustainable IT careers.
              </p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="p-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-[40px] shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 text-white/5 opacity-100 group-hover:scale-110 transition-transform">
              <GraduationCap size={80} />
            </div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-white mb-6 border border-white/20">
                <Users size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">🌟 Vision</h3>
              <p className="text-blue-50 leading-relaxed font-medium">
                To be a trusted and industry-aligned IT training institute that creates skilled, confident, and job-ready professionals capable of meeting the evolving demands of the global IT industry.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const FeaturesSection = () => {
  const features = [
    { name: "Practical Training", icon: <Terminal />, color: "bg-blue-100 text-blue-600" },
    { name: "Industry Trainers", icon: <Users />, color: "bg-emerald-100 text-emerald-600" },
    { name: "Live Projects", icon: <Code />, color: "bg-orange-100 text-orange-600" },
    { name: "Small Batches", icon: <Users />, color: "bg-purple-100 text-purple-600" },
    { name: "Personal Attention", icon: <MessageSquare />, color: "bg-cyan-100 text-cyan-600" },
    { name: "Updated Curriculum", icon: <GraduationCap />, color: "bg-rose-100 text-rose-600" },
    { name: "Certification", icon: <Trophy />, color: "bg-amber-100 text-yellow-600" },
    { name: "Career Guidance", icon: <Briefcase />, color: "bg-indigo-100 text-indigo-600" },
    { name: "Job Support", icon: <Shield />, color: "bg-slate-100 text-slate-600" }
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900">Why <span className="text-blue-600">SkillDisha?</span></h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center text-center p-8 bg-white border border-slate-100 rounded-3xl group hover:border-blue-200 hover:shadow-xl hover:shadow-blue-50/50 transition-all"
            >
              <div className={`p-5 rounded-2xl mb-6 ${f.color} group-hover:scale-110 transition-transform shadow-sm`}>
                {React.cloneElement(f.icon, { size: 32 })}
              </div>
              <p className="font-bold text-lg text-slate-700 uppercase tracking-tight">{f.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CareerSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-[40px] p-8 md:p-16 border border-blue-100 relative shadow-sm">
          <div className="absolute top-0 right-0 p-8 text-blue-200/50 opacity-100"><Briefcase size={120} /></div>
          <div className="max-w-3xl relative z-10">
            <h2 className="text-4xl font-bold mb-8 text-slate-900 capitalize">Launch your career across elite domains</h2>
            <div className="flex flex-wrap gap-4">
              {["Cyber Security Analyst", "Penetration Tester", "Web Developer", "Full Stack Developer", "SOC Analyst", "Data Engineer"].map((job) => (
                <div key={job} className="bg-white/80 backdrop-blur-md px-6 py-3 rounded-full border border-slate-200 text-sm font-bold text-slate-700 shadow-sm hover:border-blue-300 transition-colors">
                  {job}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">Success <span className="text-blue-600">Stories</span></h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: "Rahul S.", role: "Security Analyst at Google", text: "The hands-on lab sessions were game-changers for me. SkillDisha's curriculum is years ahead." },
            { name: "Priya V.", role: "Software Engineer at Meta", text: "From zero coding knowledge to building full-stack apps in 4 months. The mentorship is exceptional." },
            { name: "Aman K.", role: "SOC Analyst at TCS", text: "The placement support didn't just get me a job, it got me my dream career path at SkillDisha." }
          ].map((t, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl relative border border-slate-100 shadow-sm hover:shadow-xl transition-shadow">
              <MessageSquare className="absolute top-8 right-8 text-blue-100" size={40} />
              <div className="flex gap-1 text-orange-400 mb-4">
                {[1, 2, 3, 4, 5].map(s => <small key={s} className="text-lg">★</small>)}
              </div>
              <p className="text-slate-600 italic mb-8 leading-relaxed font-medium">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold border border-blue-100">
                  {t.name[0]}
                </div>
                <div>
                  <p className="font-bold text-slate-900">{t.name}</p>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wide">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TrainerSection = () => {
  const achievements = [
    "Microsoft-certified (MCP, MCSA, MCSE, Hyper-V, MCTS, MCT)",
    "20+ years of proven IT industry experience",
    "2500+ students successfully trained",
    "Delivered 200+ seminars, webinars, and awareness sessions",
    "Extensive corporate, government & Indian Army training experience",
    "Featured speaker at THM Surat and OPAL India (Security Week)",
    "Media presence: 'Cyber Talk with Shailesh' by Exotic Web Media",
    "Specialized experience in government workforce training",
    "Comprehensive career guidance, mentorship & placement support"
  ];

  return (
    <section id="trainer" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-2 relative flex justify-center"
          >
            <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl border-8 border-white group max-w-sm">
              <img
                src={profilePic}
                alt="Shailesh Patel"
                className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/90 to-transparent p-10 pt-20">
                <h3 className="text-2xl font-bold text-white mb-1">Shailesh Patel</h3>
                <p className="text-blue-400 font-bold uppercase tracking-widest text-[10px]">Chief IT Trainer & Security Expert</p>
              </div>
            </div>
            {/* Decorative background elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-blue-100 rounded-full blur-3xl -z-10 opacity-60"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-3"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-bold mb-6">
              <Trophy size={14} /> Certified, Experienced, Recognized
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-slate-900 leading-tight">
              Know Your <span className="text-blue-600 font-black">Trainer</span>
            </h2>
            <p className="text-slate-600 text-lg font-medium leading-relaxed mb-10">
              With over two decades of industry leadership, Shailesh Patel has dedicated his career to building IT experts. His practical, hands-on approach has empowered thousands of professionals across corporate and government sectors.
            </p>

            <div className="grid sm:grid-cols-1 gap-4">
              {achievements.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-all hover:bg-white hover:shadow-lg hover:shadow-blue-50 group"
                >
                  <div className="mt-1 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <CheckCircle size={14} />
                  </div>
                  <span className="text-slate-700 font-bold text-sm leading-relaxed">{item}</span>
                </motion.div>
              ))}
            </div>

            <button
              onClick={() => handleWhatsApp("Hello Shailesh! I'd like to book a career strategy call with you.")}
              className="mt-12 group bg-slate-900 hover:bg-black text-white px-10 py-5 rounded-2xl font-black transition-all shadow-xl flex items-center gap-3"
            >
              Book a Strategy Call <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formData, setFormData] = React.useState({ name: '', email: '', course: 'Cyber Security', message: '' });
  const [errors, setErrors] = React.useState({});
  const [status, setStatus] = React.useState('');

  const sanitizeInput = (str) => {
    return str.replace(/[^\w. ]/gi, (c) => `&#${c.charCodeAt(0)};`);
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Invalid email address';
    if (!formData.message.trim()) newErrors.message = 'Message cannot be empty';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Construct WhatsApp message
    const message = `Hello SkillDisha Team!
    
I'm interested in the *${formData.course}* course.

*Details:*
- Name: ${formData.name}
- Email: ${formData.email}
- Course: ${formData.course}

*Message:*
${formData.message}`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    // Redirect to WhatsApp
    window.open(whatsappUrl, '_blank');

    // Reset form
    setFormData({ name: '', email: '', course: 'Cyber Security', message: '' });
    setErrors({});
    setStatus('Redirecting to WhatsApp...');
  };

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-slate-900">Let's Talk About Your <span className="text-blue-600">Future.</span></h2>
            <p className="text-slate-600 mb-10 text-lg font-medium">
              Have questions about courses or career paths? Our counselors are here to help you navigate your journey.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white rounded-xl shadow-sm border border-slate-100"><Mail className="text-blue-600" /></div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Email Us</p>
                  <a href="mailto:hello@skilldisha.com" className="font-bold text-slate-700 text-lg hover:text-blue-600 transition-colors">hello@skilldisha.com</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white rounded-xl shadow-sm border border-slate-100"><Phone className="text-emerald-600" /></div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Call Us</p>
                  <a href={`tel:+${WHATSAPP_NUMBER}`} className="font-bold text-slate-700 text-lg hover:text-emerald-600 transition-colors">+91 63563 75745</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white rounded-xl shadow-sm border border-slate-100"><MapPin className="text-rose-600" /></div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Location</p>
                  <p className="font-bold text-slate-700 text-lg">Cyber Hub, New Delhi, India</p>
                </div>
              </div>
            </div>

            <button
              onClick={() => handleWhatsApp()}
              className="mt-10 flex items-center gap-3 bg-[#25D366] px-8 py-4 rounded-xl font-bold text-white hover:scale-105 transition-transform shadow-lg shadow-green-200"
            >
              Chat on WhatsApp <ArrowRight size={18} />
            </button>
          </div>

          <div className="bg-white p-10 rounded-[40px] border border-slate-100 shadow-2xl">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs font-bold text-slate-400 uppercase block mb-2 tracking-widest">Full Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full bg-slate-50 border ${errors.name ? 'border-red-500' : 'border-slate-200'} rounded-xl p-4 focus:border-blue-600 focus:bg-white transition-all outline-none font-medium`}
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="text-red-500 text-[10px] mt-1 font-bold">{errors.name}</p>}
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-400 uppercase block mb-2 tracking-widest">Email Address</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full bg-slate-50 border ${errors.email ? 'border-red-500' : 'border-slate-200'} rounded-xl p-4 focus:border-blue-600 focus:bg-white transition-all outline-none font-medium`}
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="text-red-500 text-[10px] mt-1 font-bold">{errors.email}</p>}
                </div>
              </div>
              <div>
                <label className="text-xs font-bold text-slate-400 uppercase block mb-2 tracking-widest">Interested Course</label>
                <select
                  value={formData.course}
                  onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 focus:border-blue-600 focus:bg-white transition-all outline-none font-medium"
                >
                  <option>IT Infrastructure & System Administration</option>
                  <option>Professional Cyber Security Programs</option>
                  <option>Professional Cloud & Virtualization Programs</option>
                  <option>Software Development & Programming</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-bold text-slate-400 uppercase block mb-2 tracking-widest">Message</label>
                <textarea
                  rows="4"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`w-full bg-slate-50 border ${errors.message ? 'border-red-500' : 'border-slate-200'} rounded-xl p-4 focus:border-blue-600 focus:bg-white transition-all outline-none font-medium`}
                  placeholder="Tell us about your goals..."
                ></textarea>
                {errors.message && <p className="text-red-500 text-[10px] mt-1 font-bold">{errors.message}</p>}
              </div>
              <button className="w-full py-4 bg-blue-600 rounded-2xl font-bold text-white hover:bg-blue-700 transition-all shadow-lg shadow-blue-100 text-lg">Send Message</button>
              {status && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-emerald-600 text-sm font-bold text-center mt-4">{status}</motion.p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = ({ setActiveTab }) => {
  return (
    <footer className="bg-slate-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src={logoTechLab} alt="SkillDisha TechLab" className="h-14 w-auto object-contain rounded-lg" />
            </div>
            <p className="text-slate-400 text-sm max-w-xs leading-relaxed">
              Empowering individuals with next-generation technology skills. Join India's tech revolution with SkillDisha.
            </p>
            <div className="flex gap-3 mt-6">
              {[Twitter, Github, Linkedin].map((Icon, i) => (
                <div key={i} className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-blue-400 hover:border-blue-400/50 cursor-pointer transition-all">
                  <Icon size={18} />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-5 text-base">Explore</h4>
            <ul className="space-y-3 text-sm text-slate-400 font-medium">
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#trainer" className="hover:text-blue-400 transition-colors">Know Your Trainer</a></li>
              <li><a href="#features" className="hover:text-blue-400 transition-colors">Features</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-5 text-base">Programs</h4>
            <ul className="space-y-3 text-sm text-slate-400 font-medium">
              <li><a href="#programs" onClick={() => setActiveTab(0)} className="hover:text-blue-400 transition-colors">IT Infra & Admin</a></li>
              <li><a href="#programs" onClick={() => setActiveTab(1)} className="hover:text-blue-400 transition-colors">Cyber Security</a></li>
              <li><a href="#programs" onClick={() => setActiveTab(2)} className="hover:text-blue-400 transition-colors">Cloud & Tech</a></li>
              <li><a href="#programs" onClick={() => setActiveTab(3)} className="hover:text-blue-400 transition-colors">Software Dev</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-5 text-base">Contact Info</h4>
            <ul className="space-y-4 text-sm text-slate-400 font-medium">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-blue-500 mt-0.5 flex-shrink-0" />
                <span>Cyber Hub, New Delhi,<br />India 110001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-emerald-500 flex-shrink-0" />
                <a href={`tel:+${WHATSAPP_NUMBER}`} className="hover:text-blue-400 transition-colors">+91 63563 75745</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-blue-500 flex-shrink-0" />
                <a href="mailto:hello@skilldisha.com" className="hover:text-blue-400 transition-colors">hello@skilldisha.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs font-medium">
          <p>© 2026 SkillDisha Training Institute. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-300">Privacy</a>
            <a href="#" className="hover:text-slate-300">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [activeTab, setActiveTab] = useState(0);

  React.useEffect(() => {
    const handleContextMenu = (e) => e.preventDefault();
    const handleKeyDown = (e) => {
      // Disable Ctrl+C, Ctrl+U, Ctrl+S, F12
      if (
        (e.ctrlKey && (e.key === 'c' || e.key === 'u' || e.key === 's')) ||
        e.key === 'F12'
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="bg-slate-50 text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      <Navbar setActiveTab={setActiveTab} />
      <ImageSlider />
      <main>
        <Hero />
        <FeaturesSection />
        <ProfessionalPrograms activeTab={activeTab} setActiveTab={setActiveTab} />
        <AboutSection />
        <CareerSection />
        <TrainerSection />
        <Testimonials />
        <Contact />
      </main>
      <Footer setActiveTab={setActiveTab} />
    </div>
  );
}
