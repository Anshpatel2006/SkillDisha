import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo1 from './assets/Logo.jpg-removebg-preview.png'
import logoTechLab from './assets/SkillDisha_TechLab_JPG.jpg.jpeg';
import homePic1 from './assets/Home_Page_Pic_1.jpeg';
import homePic2 from './assets/Home_Page_Pic_2.jpeg';
import profilePic from './assets/Profile_Pic.jpeg';
import {
    Shield, Code, Terminal, Database, Trophy, Users,
    ChevronRight, CheckCircle, Mail, Phone, MapPin,
    Github, Twitter, Linkedin, Briefcase, GraduationCap,
    MessageSquare, Menu, X, ArrowRight, ChevronDown,
    Sun, Moon
} from 'lucide-react';

// --- Constants & Helpers ---

const WHATSAPP_NUMBER = "916356375745";

const handleWhatsApp = (message = "Hello SkillDisha! I'm interested in learning more about your programs.") => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
};

// --- Components ---

const ThemeToggle = ({ isDarkMode, toggleTheme }) => (
    <button
        type="button"
        onClick={(e) => {
            e.preventDefault();
            toggleTheme();
        }}
        className="relative w-16 h-8 rounded-full bg-slate-100 transition-all duration-300 focus:outline-none p-1 group cursor-pointer border-2 border-slate-200 hover:border-blue-400"
        aria-label="Toggle Theme"
    >
        <div className="absolute inset-0 flex justify-between items-center px-2 opacity-60 pointer-events-none text-slate-400">
            <Sun size={14} className="text-orange-500" />
            <Moon size={14} className="text-blue-400" />
        </div>
        <div
            style={{ transform: `translateX(${isDarkMode ? 32 : 0}px)` }}
            className="w-6 h-6 rounded-full bg-white shadow-lg flex items-center justify-center relative z-10 transition-transform duration-300 pointer-events-none"
        >
            {isDarkMode ? (
                <Moon size={12} className="text-blue-600" />
            ) : (
                <Sun size={12} className="text-orange-500" />
            )}
        </div>
    </button>
);

const Navbar = ({ setActiveTab, isDarkMode, toggleTheme }) => {
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
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] py-3 border-b border-slate-100' : 'bg-transparent py-5'}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <a href="#" className="flex items-center gap-2 group">
                    <img src={logo1} alt="SkillDisha TechLab" className="h-16 w-auto object-contain rounded-lg transition-transform group-hover:scale-105" />
                </a>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    <div
                        className="relative group"
                        onMouseEnter={() => setIsDropdownOpen(true)}
                        onMouseLeave={() => setIsDropdownOpen(false)}
                    >
                        <button className={`flex items-center gap-1 transition-all duration-300 font-bold py-2 relative ${isScrolled ? 'text-slate-800' : 'text-white'}`}>
                            Courses <ChevronDown size={14} className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                            <span className="absolute bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                        </button>
                        <AnimatePresence>
                            {isDropdownOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    className="absolute top-full left-0 w-64 bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-slate-100 p-3 mt-2"
                                >
                                    {categories.map((cat) => (
                                        <a
                                            key={cat.name}
                                            href={cat.href}
                                            onClick={() => handleProgramClick(cat.index)}
                                            className="group/item block px-4 py-3 rounded-xl hover:bg-blue-50 text-slate-700 hover:text-blue-600 transition-all text-sm font-bold flex items-center justify-between"
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
                        <a key={link.name} href={link.href} className={`transition-colors font-bold relative group ${isScrolled ? 'text-slate-800' : 'text-white'}`}>
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                    <a href="tel:+916356375745" className={`hidden lg:flex items-center gap-2 font-black transition-all ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center shadow-sm ${isScrolled ? 'bg-blue-50 text-blue-600' : 'bg-white/20 text-white backdrop-blur-md'}`}>
                            <Phone size={18} />
                        </div>
                        <span className="text-sm">63563 75745</span>
                    </a>
                    <div className={`h-6 w-px mx-1 ${isScrolled ? 'bg-slate-200' : 'bg-white/30'}`}></div>
                    <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
                    <button
                        onClick={() => handleWhatsApp()}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg shadow-blue-200 active:scale-95"
                    >
                        Join Now
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button className={`md:hidden p-2 rounded-xl transition-colors ${isScrolled ? 'text-slate-900 bg-slate-50' : 'text-white bg-white/20 backdrop-blur-md'}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
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
                        className="absolute top-full left-0 w-full bg-white border-b border-slate-100 md:hidden overflow-hidden shadow-2xl"
                    >
                        <div className="p-6 flex flex-col gap-4">
                            <div className="flex justify-between items-center p-4 bg-slate-50 rounded-2xl mb-2">
                                <span className="text-sm font-black text-slate-800 uppercase tracking-widest">Toggle Theme</span>
                                <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
                            </div>
                            <div className="space-y-1">
                                <button
                                    onClick={() => setIsMobileProgramsOpen(!isMobileProgramsOpen)}
                                    className="w-full flex items-center justify-between text-slate-900 py-4 px-4 font-bold rounded-xl hover:bg-blue-50 transition-all"
                                >
                                    Our Courses <ChevronDown size={14} className={`transition-transform duration-200 ${isMobileProgramsOpen ? 'rotate-180' : ''}`} />
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
                                                    className="block text-slate-600 py-3 px-4 hover:text-blue-600 font-bold text-sm border-l-2 border-slate-100 hover:border-blue-600 transition-all font-inter"
                                                    onClick={() => handleProgramClick(cat.index)}
                                                >
                                                    {cat.name}
                                                </a>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                            {navLinks.map((link) => (
                                <a key={link.name} href={link.href} className="text-slate-900 py-4 px-4 font-bold rounded-xl hover:bg-blue-50 hover:text-blue-600 transition-all border-b border-slate-50 last:border-0" onClick={() => setIsMobileMenuOpen(false)}>
                                    {link.name}
                                </a>
                            ))}
                            <div className="h-px bg-slate-100 my-2"></div>
                            <a
                                href="tel:+916356375745"
                                className="flex items-center gap-3 text-slate-900 py-4 px-4 font-black rounded-xl bg-blue-50/50 hover:text-blue-600 transition-all"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <Phone size={18} className="text-blue-600" />
                                <span>63563 75745</span>
                            </a>
                            <button
                                onClick={() => handleWhatsApp()}
                                className="bg-blue-600 text-white py-5 rounded-2xl font-black mt-2 shadow-xl shadow-blue-200"
                            >
                                Get Expert Advice
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
        <div className="relative h-[400px] md:h-[600px] w-full overflow-hidden">
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
        <section className="relative pt-24 md:pt-32 pb-12 md:pb-20 overflow-hidden bg-white">
            <div className="absolute top-0 left-0 w-full h-full -z-10 bg-[radial-gradient(circle_at_50%_0%,#f8fafc_0%,#ffffff_100%)]"></div>
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-50 rounded-full blur-[140px] opacity-70"></div>
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-50 rounded-full blur-[140px] opacity-70"></div>

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-black uppercase tracking-widest mb-8">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                        </span>
                        Batch Starting Soon
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] mb-8 text-slate-900 tracking-tight">
                        Unlocking Potential with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">SkillDisha.</span>
                    </h1>
                    <p className="text-slate-600 text-xl mb-10 max-w-xl font-medium leading-relaxed">
                        Industry-ready training in <span className="text-slate-900 font-bold">Cyber Security</span>, <span className="text-slate-900 font-bold">Cloud Computing</span>, and <span className="text-slate-900 font-bold">IT Infrastructure</span>. Hands-on labs & placement support.
                    </p>
                    <div className="flex flex-wrap gap-5">
                        <button
                            onClick={() => handleWhatsApp("Hello SkillDisha! I want to enroll in a batch.")}
                            className="group bg-blue-600 hover:bg-blue-700 px-10 py-5 rounded-2xl font-black text-white flex items-center gap-3 transition-all shadow-[0_20px_40px_-10px_rgba(37,99,235,0.3)] hover:-translate-y-1 active:scale-95"
                        >
                            Enroll Now <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        <a
                            href="/brochure.pdf"
                            download="SkillDisha_Brochure.pdf"
                            className="px-10 py-5 rounded-2xl font-black text-slate-800 border-2 border-slate-100 hover:border-blue-200 hover:bg-slate-50 transition-all inline-block text-center bg-white shadow-sm"
                        >
                            Brochure PDF
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    <div className="relative z-10 bg-white p-2 rounded-[40px] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] border border-slate-100 overflow-hidden">
                        <div className="bg-slate-50 rounded-[32px] p-10 overflow-hidden">
                            <div className="flex gap-4 mb-8">
                                <div className="flex -space-x-4">
                                    {[1, 2, 3, 4].map(i => (
                                        <div key={i} className="w-12 h-12 rounded-full border-4 border-slate-50 overflow-hidden shadow-sm">
                                            <img src={`https://i.pravatar.cc/150?u=${i}`} alt="student" />
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    <p className="text-sm font-black text-slate-900">1,000+ Alumni</p>
                                    <p className="text-xs text-slate-500 font-bold">Industry Placed</p>
                                </div>
                            </div>
                            <div className="bg-slate-900 rounded-2xl p-8 font-mono text-sm leading-relaxed overflow-hidden border border-slate-800 shadow-2xl">
                                <p className="text-emerald-400">// Ethical Hacking Module</p>
                                <p className="text-blue-400">class SecurityScanner &#123;</p>
                                <p className="pl-4 text-slate-300">async scan(target) &#123;</p>
                                <p className="pl-8 text-slate-400">console.log(`Scanning $&#123;target&#125;...`);</p>
                                <p className="pl-8 text-emerald-400">return await vulnDB.check(target);</p>
                                <p className="pl-4 text-slate-300">&#125;</p>
                                <p className="text-blue-400">&#125;</p>
                            </div>
                        </div>
                    </div>
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-40 -z-10"></div>
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
                { title: "Digital Office Productivity & Collaboration Tools", desc: "Word, Excel, PowerPoint, Email, Cloud & Team Collaboration" },
                { title: "PC Hardware, Diagnostics & System Maintenance", desc: "Computer Components, Assembly, Troubleshooting, Preventive Maintenance & System Health" },
                { title: "Computer Networking Foundations & Connectivity Essentials", desc: "Networking Basics, LAN/WAN Concepts, Devices, IP Addressing & Connectivity" },
                { title: "Client Operating Systems: Windows 10 /11 Administration", desc: "Installation, Configuration, User Management, Security & Troubleshooting" },
                { title: "Enterprise Windows Server Administration (Server 2019 / 2022)", desc: "Active Directory, Users/Group, Domains, DNS, DHCP, Group Policy, File Services & Security" },
                { title: "Enterprise Linux System Administration (Redhat 8/9)", desc: "System Installation, Users & Permissions, Services, Networking & Security" }
            ]
        },
        {
            id: "cyber-sec",
            title: "Professional Cyber Security Programs",
            duration: "3-4 Months",
            description: "Advanced security training covering threat intelligence, ethical hacking, and incident response.",
            modules: [
                { title: "Cyber Security Foundations & Threat Intelligence", duration: "15 Days", desc: "Understand cyber threats, attack vectors, and security fundamentals" },
                { title: "Network Security, Firewalls & Perimeter Défense", duration: "1 Month", desc: "Secure enterprise networks against internal and external attacks" },
                { title: "Linux Security & Open-Source Security Operations", duration: "1 Month", desc: "Master Linux administration from a cyber security perspective" },
                { title: "Windows & Active Directory Security Engineering", duration: "1 Month", desc: "Secure enterprise Windows domains and enterprise environments" },
                { title: "Ethical Hacking & Penetration Testing Essentials", duration: "2-3 Month", desc: "Learn legal ethical hacking techniques using structured methodologies" },
                { title: "Web Application Security & OWASP Top 10", duration: "1-2 Month", desc: "Identify, exploit, and remediate real-world web vulnerabilities" },
                { title: "Vulnerability Assessment & Penetration Testing (VAPT)", duration: "1-2 Month", desc: "Assess risk, perform audits, and deliver professional security reports" },
                { title: "Bug Bounty Hunting & Responsible Disclosure Practices", duration: "1-2 Month", desc: "Find real-world vulnerabilities and report them ethically to organizations" },
                { title: "Security Operations Center (SOC) & SIEM Monitoring", duration: "1-2 Month", desc: "Detect, analyse, and respond to live security incidents" },
                { title: "Digital Forensics & Incident Response (DFIR)", duration: "1-2 Month", desc: "Investigate cyber-attacks and handle security breaches professionally" },
                { title: "Cloud Security Fundamentals & Zero-Trust Architecture", duration: "1-Month", desc: "Secure cloud, hybrid, and modern enterprise environments" },
                { title: "Linux Shell Scripting for Cyber Security & Automation", duration: "1-Month", desc: "Learn Linux shell scripting fundamentals to automate basic cyber security and system administration tasks." }
            ]
        },
        {
            id: "cloud-v",
            title: "Professional Cloud & Virtualization Programs",
            duration: "3-4 Months",
            description: "Expertise in data center architecture, virtualization, and multi-cloud infrastructure.",
            modules: [
                { title: "Data Center Architecture & Design", duration: "15 Days", desc: "Understand modern data centre architecture, components, power, cooling, and high-availability design concepts." },
                { title: "Enterprise Storage Fundamentals", duration: "15 Days", desc: "Learn core storage technologies including SAN, NAS, DAS, redundancy, backup, and data protection basics." },
                { title: "Server Virtualization with Microsoft Hyper-V", duration: "1 Month", desc: "Deploy and manage virtual machines using Microsoft Hyper-V in enterprise server environments." },
                { title: "Enterprise Virtualization with VMware ESXi & vSphere", duration: "1 Month", desc: "Configure, manage, and optimize virtual infrastructure using VMware ESXi and vSphere technologies." },
                { title: "Amazon Web Services (AWS) Cloud Infrastructure Fundamentals", duration: "1 Month", desc: "Build and manage core AWS cloud services including compute, storage, networking, and security basics." },
                { title: "Microsoft Azure Cloud Infrastructure Fundamentals", duration: "1 Month", desc: "Design and operate cloud infrastructure using Microsoft Azure services and management tools." },
                { title: "Microsoft 365 Fundamentals: Identity, Email & Collaboration", duration: "10 Days", desc: "Administer cloud-based identity, email, and collaboration services using Microsoft 365." },
                { title: "Basic Cloud Automation & Operations", duration: "10 Days", desc: "Automate routine cloud operations, monitoring, backups, and cost optimization using basic scripting and tools." }
            ]
        },
        {
            id: "soft-dev",
            title: "Software Development",
            duration: "Custom",
            description: "Comprehensive coding programs from school syllabus to elite internship projects.",
            modules: [
                { title: "Website Development (Front End / Back End / Full Stack)", desc: "Learn to design and develop complete websites—from user interface to database and deployment—using industry-relevant tools and live projects." },
                { title: "Programming (C, C++, Java, Python)", desc: "Build strong programming fundamentals, logic and problem-solving skills using the most in-demand languages for academics and IT careers." },
                { title: "College Projects & Internship", desc: "Industry-guided mini and final year projects with practical implementation, documentation, internship certification and viva support." },
                { title: "School Syllabus", desc: "Complete support for school computer syllabus, practical and basic coding to build strong technical foundations from an early stage." }
            ]
        }
    ];

    return (
        <section id="courses" className="py-24 bg-[#fafbfc] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <span className="text-blue-600 font-black uppercase tracking-[0.2em] text-xs mb-4 block">Our Training Catalog</span>
                    <h2 className="text-4xl lg:text-6xl font-black mb-6 text-slate-900 tracking-tight">
                        Job-Oriented Career Programs
                    </h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-xl font-medium leading-relaxed">
                        Curated curriculum designed by industry experts to make you day-one ready.
                    </p>
                </div>

                {/* Tab Navigation */}
                <div className="flex flex-wrap justify-center gap-3 mb-16">
                    {programs.map((program, idx) => (
                        <button
                            key={program.id}
                            onClick={() => setActiveTab(idx)}
                            className={`px-8 py-4 rounded-2xl font-black transition-all text-sm tracking-tight ${activeTab === idx
                                ? 'bg-blue-600 text-white shadow-[0_15px_30px_-5px_rgba(37,99,235,0.4)]'
                                : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-100 hover:border-slate-200'
                                }`}
                        >
                            {program.title}
                        </button>
                    ))}
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="flex flex-col gap-12"
                    >
                        <div className="w-full">
                            <div className="bg-white p-12 md:p-20 rounded-[48px] border border-slate-100 flex flex-col items-center text-center max-w-6xl mx-auto shadow-[0_40px_80px_-40px_rgba(0,0,0,0.05)] relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600"></div>
                                <h3 className="text-3xl md:text-5xl font-black mb-6 text-slate-900 leading-tight">
                                    {programs[activeTab].title}
                                </h3>
                                <div className="flex items-center gap-3 bg-blue-50 px-6 py-2 rounded-full text-blue-700 font-black text-sm mb-8">
                                    <Terminal size={18} />
                                    <span>Program Duration: {programs[activeTab].duration}</span>
                                </div>
                                <p className="text-slate-500 mb-10 leading-relaxed text-xl max-w-4xl font-medium">
                                    {programs[activeTab].description}
                                </p>
                                <button
                                    onClick={() => handleWhatsApp(`Hello! I would like to request more information about the *${programs[activeTab].title}* program.`)}
                                    className="px-10 py-5 bg-slate-900 rounded-2xl font-black text-white hover:bg-black transition-all flex items-center gap-3 shadow-xl shadow-slate-200"
                                >
                                    Get Course Details <ArrowRight size={20} />
                                </button>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {programs[activeTab].modules.map((module, mIdx) => (
                                <motion.div
                                    key={mIdx}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: mIdx * 0.05 }}
                                    className="p-8 bg-white border border-slate-100 rounded-3xl hover:border-blue-400 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all group lg:min-h-[220px] flex flex-col justify-center"
                                >
                                    {module.name && (
                                        <span className="text-[10px] font-black uppercase text-blue-600 tracking-[0.2em] block mb-3 bg-blue-50 w-fit px-2 py-1 rounded">
                                            {module.name}
                                        </span>
                                    )}
                                    <h4 className="font-black text-slate-900 mb-3 text-lg leading-tight group-hover:text-blue-600 transition-colors">
                                        {module.title}
                                    </h4>
                                    {module.duration && (
                                        <div className="flex items-center gap-2 mb-4 text-emerald-600 font-bold text-xs uppercase tracking-wider">
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                                            {module.duration}
                                        </div>
                                    )}
                                    <p className="text-sm text-slate-500 leading-relaxed font-medium">
                                        {module.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

const AboutSection = () => {
    return (
        <section id="about" className="py-24 relative overflow-hidden bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl lg:text-5xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-emerald-600 to-blue-700 leading-tight">
                    About SkillDisha TechLab
                </h2>

                <div className="block">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="md:float-right md:ml-12 md:mb-8 mb-10 w-full md:w-[450px] relative z-10"
                    >
                        <div className="aspect-video md:aspect-[4/3] bg-white/50 backdrop-blur-md rounded-[40px] overflow-hidden shadow-2xl border-white/50">
                            <img
                                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1000"
                                alt="IT Training Environment"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-blue-600/10 mix-blend-multiply"></div>
                        </div>
                        <div className="absolute -bottom-6 -left-6 bg-white/80 backdrop-blur-md p-6 rounded-2xl border-blue-50 shadow-xl hidden lg:block">
                            <p className="text-4xl font-black text-blue-600">20+</p>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Years of Excellence</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="text-slate-600 text-lg font-medium leading-relaxed space-y-6"
                    >
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
                    </motion.div>
                    <div className="clear-both"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mt-20">
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="p-10 bg-white rounded-[40px] border border-slate-100 shadow-xl relative overflow-hidden group transition-colors duration-500"
                    >
                        <div className="absolute top-0 right-0 p-8 text-blue-50 opacity-100 group-hover:scale-110 transition-transform">
                            <Trophy size={80} />
                        </div>
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">🎯 Mission</h3>
                            <p className="text-slate-600 leading-relaxed font-medium">
                                To bridge the gap between academics and industry by delivering practical, job-oriented IT training in Cyber Security, Cloud, and IT Infrastructure, enabling learners to build real-world skills and sustainable IT careers.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -5 }}
                        className="p-10 bg-white rounded-[40px] border border-slate-100 shadow-xl relative overflow-hidden group transition-colors duration-500"
                    >
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">🌟 Vision</h3>
                            <p className="text-slate-600 leading-relaxed font-medium">
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
                    <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
                        Why SkillDisha?
                    </h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                    {features.map((f, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.05 }}
                            className="flex flex-col items-center text-center p-6 bg-white border border-slate-100 rounded-2xl group hover:border-blue-200 hover:shadow-xl hover:shadow-blue-50/50 transition-all font-inter"
                        >
                            <div className={`p-4 rounded-xl mb-4 ${f.color} group-hover:scale-110 transition-transform shadow-sm`}>
                                {React.cloneElement(f.icon, { size: 24 })}
                            </div>
                            <p className="font-bold text-sm text-slate-700 uppercase tracking-tight">{f.name}</p>
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
                <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-[40px] p-8 md:p-16 border border-blue-100 transition-colors duration-500 relative shadow-sm overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8 text-blue-200/50 opacity-100 group-hover:scale-110 transition-transform"><Briefcase size={120} /></div>
                    <div className="max-w-3xl relative z-10">
                        <h2 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600 capitalize">
                            Launch your career across elite domains
                        </h2>
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
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                    Success Stories
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { name: "Rahul S.", role: "Security Analyst at Google", text: "The hands-on lab sessions were game-changers for me. SkillDisha's curriculum is years ahead." },
                        { name: "Priya V.", role: "Software Engineer at Meta", text: "From zero coding knowledge to building full-stack apps in 4 months. The mentorship is exceptional." },
                        { name: "Aman K.", role: "SOC Analyst at TCS", text: "The placement support didn't just get me a job, it got me my dream career path at SkillDisha." }
                    ].map((t, i) => (
                        <div key={i} className="bg-white p-8 rounded-3xl relative border border-slate-100 shadow-sm hover:shadow-xl transition-all font-inter">
                            <MessageSquare className="absolute top-8 right-8 text-blue-100" size={40} />
                            <div className="flex gap-1 text-orange-400 mb-4">
                                {[1, 2, 3, 4, 5].map(s => <small key={s} className="text-lg">★</small>)}
                            </div>
                            <p className="text-slate-600 mb-6 font-medium italic leading-relaxed">"{t.text}"</p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                                    {t.name.split(' ')[0][0]}
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900">{t.name}</h4>
                                    <p className="text-sm text-slate-500 font-bold">{t.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const AchievementCard = ({ item, idx }) => (
    <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: idx * 0.05 }}
        className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-all hover:bg-white hover:shadow-lg hover:shadow-blue-50 group font-inter"
    >
        <div className="mt-1 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
            <CheckCircle size={14} />
        </div>
        <span className="text-slate-700 font-bold text-sm leading-relaxed">{item}</span>
    </motion.div>
);

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

    const leftAchievements = achievements.slice(0, 3);
    const rightAchievements = achievements.slice(3);

    return (
        <section id="trainer" className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left Column: Image (Top) + first 3 points */}
                    <div className="flex flex-col gap-10">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="relative flex justify-center"
                        >
                            <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl border-8 border-white group w-full max-w-sm transition-colors duration-500">
                                <img
                                    src={profilePic}
                                    alt="Shailesh Patel"
                                    className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/90 to-transparent p-10 pt-20">
                                    <h3 className="text-2xl font-bold text-white mb-1 font-inter uppercase">Shailesh Patel</h3>
                                    <p className="text-blue-400 font-bold uppercase tracking-widest text-[10px]">Chief IT Trainer & Security Expert</p>
                                </div>
                            </div>
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-blue-100 rounded-full blur-3xl -z-10 opacity-60"></div>
                        </motion.div>

                        <div className="hidden lg:grid grid-cols-1 gap-4">
                            {leftAchievements.map((item, idx) => (
                                <AchievementCard key={idx} item={item} idx={idx} />
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Heading (Top) + remaining points */}
                    <div className="flex flex-col gap-10">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-bold mb-6 transition-colors duration-500">
                                <Trophy size={14} /> Certified, Experienced, Recognized
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 leading-tight">
                                Know Your Trainer
                            </h2>
                            <p className="text-slate-600 text-lg font-medium leading-relaxed font-inter">
                                With over two decades of industry leadership, Shailesh Patel has dedicated his career to building IT experts. His practical, hands-on approach has empowered thousands of professionals across corporate and government sectors.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 gap-4">
                            <div className="hidden lg:block space-y-4">
                                {rightAchievements.map((item, idx) => (
                                    <AchievementCard key={idx} item={item} idx={idx + 3} />
                                ))}
                            </div>

                            <div className="lg:hidden grid grid-cols-1 gap-4">
                                {achievements.map((item, idx) => (
                                    <AchievementCard key={idx} item={item} idx={idx} />
                                ))}
                            </div>
                        </div>

                        <button
                            onClick={() => handleWhatsApp("Hello Shailesh! I'd like to book a career strategy call with you.")}
                            className="mt-4 group bg-slate-900 hover:bg-black text-white px-10 py-5 rounded-2xl font-black transition-all shadow-xl flex items-center justify-center lg:justify-start gap-3 w-full lg:w-fit"
                        >
                            Book a Strategy Call <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Contact = () => {
    const [formData, setFormData] = React.useState({ name: '', email: '', course: 'Cyber Security', message: '' });
    const [errors, setErrors] = React.useState({});
    const [status, setStatus] = React.useState('');

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

        const message = `Hello SkillDisha Team!\n\nI'm interested in the *${formData.course}* course.\n\n*Details:*\n- Name: ${formData.name}\n- Email: ${formData.email}\n- Course: ${formData.course}\n\n*Message:*\n${formData.message}`;
        const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');

        setFormData({ name: '', email: '', course: 'Cyber Security', message: '' });
        setStatus("Thank you! Your inquiry has been sent successfully.");
        setErrors({});
        setTimeout(() => setStatus(""), 5000);
    };

    return (
        <section id="contact" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                            Get in Touch
                        </h2>
                        <p className="text-slate-600 text-lg font-medium mb-10 leading-relaxed font-inter">
                            Ready to start your IT journey? Our experts are here to guide you through every step of your professional development.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-white rounded-xl shadow-sm border border-slate-100 transition-colors duration-500"><Phone className="text-emerald-600" /></div>
                                <div>
                                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Call Us</p>
                                    <a href={`tel:+${WHATSAPP_NUMBER}`} className="font-bold text-slate-700 text-lg hover:text-emerald-600 transition-colors">+91 63563 75745</a>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-white rounded-xl shadow-sm border border-slate-100 transition-colors duration-500"><MapPin className="text-rose-600" /></div>
                                <div>
                                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Location</p>
                                    <p className="font-bold text-slate-900 text-lg font-inter">203 , Atmos , Beside Sindhu Seva Samiti School, Anand Mahal Road , Adajan , Surat - 395009.</p>
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

                    <div className="bg-white p-10 rounded-[40px] border border-slate-100 shadow-2xl transition-colors duration-500">
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="text-xs font-bold text-slate-400 uppercase block mb-2 tracking-widest">Full Name</label>
                                    <input
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className={`w-full bg-slate-50 border ${errors.name ? 'border-red-500' : 'border-slate-200'} text-slate-900 rounded-xl p-4 focus:border-blue-600 focus:bg-white transition-all outline-none font-medium`}
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
                                        className={`w-full bg-slate-50 border ${errors.email ? 'border-red-500' : 'border-slate-200'} text-slate-900 rounded-xl p-4 focus:border-blue-600 focus:bg-white transition-all outline-none font-medium`}
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
                                    className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-xl p-4 focus:border-blue-600 focus:bg-white transition-all outline-none font-medium"
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
                                    className={`w-full bg-slate-50 border ${errors.message ? 'border-red-500' : 'border-slate-200'} text-slate-900 rounded-xl p-4 focus:border-blue-600 focus:bg-white transition-all outline-none font-medium`}
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
        <footer className="bg-slate-50 text-slate-600 pt-16 pb-8 border-t border-slate-200 transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <img src={logoTechLab} alt="SkillDisha TechLab" className="h-14 w-auto object-contain rounded-lg shadow-sm" />
                        </div>
                        <p className="text-slate-400 text-sm max-w-xs leading-relaxed font-inter font-medium">
                            Empowering individuals with next-generation technology skills. Join India's tech revolution with SkillDisha.
                        </p>
                        <div className="flex gap-3 mt-6">
                            {[Twitter, Github, Linkedin].map((Icon, i) => (
                                <div key={i} className="w-10 h-10 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-500 hover:text-blue-600 hover:border-blue-300 cursor-pointer transition-all">
                                    <Icon size={18} />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-slate-900 mb-5 text-base">Explore</h4>
                        <ul className="space-y-3 text-sm text-slate-500 font-bold">
                            <li><a href="#about" className="hover:text-blue-600 transition-colors">About Us</a></li>
                            <li><a href="#trainer" className="hover:text-blue-600 transition-colors">Know Your Trainer</a></li>
                            <li><a href="#features" className="hover:text-blue-600 transition-colors">Why Us</a></li>
                            <li><a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-slate-900 mb-5 text-base">Programs</h4>
                        <ul className="space-y-3 text-sm text-slate-500 font-bold">
                            <li><a href="#courses" onClick={() => setActiveTab(0)} className="hover:text-blue-600 transition-colors">IT Infra & Admin</a></li>
                            <li><a href="#courses" onClick={() => setActiveTab(1)} className="hover:text-blue-600 transition-colors">Cyber Security</a></li>
                            <li><a href="#courses" onClick={() => setActiveTab(2)} className="hover:text-blue-600 transition-colors">Cloud & Tech</a></li>
                            <li><a href="#courses" onClick={() => setActiveTab(3)} className="hover:text-blue-600 transition-colors">Software Dev</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-slate-900 mb-5 text-base">Contact Info</h4>
                        <ul className="space-y-4 text-sm text-slate-500 font-bold">
                            <li className="flex items-start gap-3">
                                <MapPin size={16} className="text-blue-500 mt-0.5 flex-shrink-0" />
                                <a
                                    href="https://maps.app.goo.gl/inDisEPsARFDRdT98"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-blue-600"
                                >
                                    <span>
                                        203, Atmos,<br />
                                        Beside Sindhu Seva Samiti School,<br />
                                        Anand Mahal Road,<br />
                                        Adajan, Surat,<br />
                                        Gujarat 395009.
                                    </span>
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={16} className="text-emerald-500 flex-shrink-0" />
                                <a href={`tel:+${WHATSAPP_NUMBER}`} className="hover:text-blue-600 transition-colors">+91 63563 75745 <br />+91 97731 62289</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={16} className="text-blue-500 flex-shrink-0" />
                                <a href="mailto:info@skilldishatechlab.com" className="hover:text-blue-600 transition-colors">info@skilldishatechlab.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <hr className="border-slate-200" />
                <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs font-bold font-inter">
                    <p>© 2026 SkillDisha Training Institute. All rights reserved.</p>
                    <div className="flex gap-3">
                        <a href="#" className="hover:text-blue-600 transition-colors">Privacy</a>
                        <a href="#" className="hover:text-blue-600 transition-colors">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default function AppLight({ isDarkMode, toggleTheme }) {
    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        const handleContextMenu = (e) => e.preventDefault();
        const handleKeyDown = (e) => {
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
        <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
            <Navbar setActiveTab={setActiveTab} isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
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
