import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Shield, Code, Terminal, Database, Trophy, Users,
  ChevronRight, CheckCircle, Mail, Phone, MapPin,
  Github, Twitter, Linkedin, Briefcase, GraduationCap,
  MessageSquare, Menu, X, ArrowRight
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Courses', href: '#courses' },
    { name: 'About', href: '#about' },
    { name: 'Features', href: '#features' },
    { name: 'Faculty', href: '#faculty' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-slate-200 py-3 shadow-sm' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-blue-600 rounded-lg shadow-md shadow-blue-200">
            <Shield className="text-white h-6 w-6" />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900 uppercase">Skill<span className="text-blue-600">Disha</span></span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-slate-600 hover:text-blue-600 transition-colors font-medium">
              {link.name}
            </a>
          ))}
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold transition-all shadow-lg shadow-blue-200">
            Join Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-900" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white border-b border-slate-200 p-6 flex flex-col gap-4 md:hidden shadow-xl"
          >
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-slate-600 py-2 border-b border-slate-100" onClick={() => setIsMobileMenuOpen(false)}>
                {link.name}
              </a>
            ))}
            <button className="bg-blue-600 text-white py-3 rounded-xl font-bold mt-2 shadow-lg shadow-blue-200">Enroll Now</button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden min-h-screen flex items-center bg-slate-50">
      <div className="absolute top-0 left-0 w-full h-full -z-10 bg-[radial-gradient(circle_at_50%_40%,#eff6ff_0%,#f8fafc_100%)]"></div>
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-100 rounded-full blur-[120px] opacity-60"></div>
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-emerald-50 rounded-full blur-[120px] opacity-60"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold mb-6">
            <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></div>
            Next Batch Starting: March 15th
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6 text-slate-900">
            Unlocking Potential with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">SkillDisha.</span>
          </h1>
          <p className="text-slate-600 text-lg mb-8 max-w-xl">
            Elite training in Cyber Security, Full-Stack Development, and AI. Get industry-ready with hands-on projects and placement support from SkillDisha – India's premier tech institute.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="group bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-bold text-white flex items-center gap-2 transition-all shadow-lg shadow-blue-200">
              Enroll Now <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 rounded-xl font-bold text-slate-700 border border-slate-200 hover:bg-white transition-all shadow-sm">
              Download Brochure
            </button>
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

const CourseSection = () => {
  const courses = [
    {
      title: "Cyber Security Elite",
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      duration: "6 Months",
      level: "Beginner to Pro",
      tools: ["Metasploit", "Nmap", "Wireshark", "Burp Suite"],
      status: "Premium",
      color: "blue"
    },
    {
      title: "Full Stack Web Dev",
      icon: <Code className="w-8 h-8 text-emerald-600" />,
      duration: "4 Months",
      level: "Intermediate",
      tools: ["React", "Node.js", "MongoDB", "Tailwind"],
      status: "Bestseller",
      color: "emerald"
    },
    {
      title: "Python & Data Science",
      icon: <Terminal className="w-8 h-8 text-orange-600" />,
      duration: "3 Months",
      level: "Beginner",
      tools: ["Pandas", "NumPy", "Scikit-Learn", "Matplotlib"],
      status: "Trending",
      color: "orange"
    },
    {
      title: "AI Basics & Prompt Eng.",
      icon: <Database className="w-8 h-8 text-purple-600" />,
      duration: "2 Months",
      level: "Everyone",
      tools: ["OpenAI", "LangChain", "Vector DBs"],
      status: "New",
      color: "purple"
    },
    {
      title: "Hackathon Bootcamp",
      icon: <Trophy className="w-8 h-8 text-rose-600" />,
      duration: "6 Weeks",
      level: "Advanced",
      tools: ["Problem Solving", "MVP Design", "Pitching"],
      status: "Intensive",
      color: "rose"
    },
    {
      title: "Placement Support",
      icon: <Briefcase className="w-8 h-8 text-cyan-600" />,
      duration: "Lifetime",
      level: "Graduates",
      tools: ["Resume Building", "Mock Interviews", "Referrals"],
      status: "Included",
      color: "cyan"
    }
  ];

  return (
    <section id="courses" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-slate-900">Choose Your <span className="text-blue-600">Career Path</span></h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Industry-vetted programs designed to take you from zero to expert in months.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-3xl border border-slate-100 hover:border-blue-200 transition-all flex flex-col group shadow-sm hover:shadow-xl"
            >
              <div className="mb-6 p-4 bg-slate-50 rounded-2xl w-fit group-hover:scale-110 transition-transform shadow-inner">
                {course.icon}
              </div>
              <div className="mb-2">
                <span className={`text-[10px] uppercase font-black tracking-widest text-${course.color}-600 bg-${course.color}-50 px-2 py-0.5 rounded-md border border-${course.color}-100`}>
                  {course.status}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">{course.title}</h3>

              <div className="flex gap-4 text-sm text-slate-500 mb-6 pb-6 border-b border-slate-100">
                <div className="flex items-center gap-1 font-medium"><GraduationCap size={16} /> {course.level}</div>
                <div className="flex items-center gap-1 font-medium"><Terminal size={16} /> {course.duration}</div>
              </div>

              <div className="mb-8">
                <p className="text-xs text-slate-400 font-bold uppercase mb-3 tracking-wide">Tools Covered</p>
                <div className="flex flex-wrap gap-2">
                  {course.tools.map(tool => (
                    <span key={tool} className="text-xs px-2 py-1 rounded-md bg-slate-50 border border-slate-200 text-slate-600 font-medium">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <button className="mt-auto w-full py-3 bg-slate-100/50 border border-slate-200 rounded-xl font-bold text-slate-700 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all">
                Enroll Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
        >
          <div className="relative">
            <div className="aspect-square glass rounded-3xl overflow-hidden neon-border shadow-2xl">
              <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" alt="Cyber Security Lab" className="w-full h-full object-cover opacity-80" />
            </div>
            <div className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl border-emerald-100 shadow-xl">
              <p className="text-4xl font-bold text-emerald-600">98%</p>
              <p className="text-sm font-bold text-slate-700 uppercase tracking-tighter">Placement Ratio</p>
            </div>
          </div>
        </motion.div>

        <div>
          <h2 className="text-4xl font-bold mb-6 text-slate-900 leading-tight">Empowering the Next Generation of <span className="text-emerald-600">Tech Innovators.</span></h2>
          <p className="text-slate-600 mb-8 text-lg">
            Founded with a mission to bridge the gap between academic education and industry requirements, SkillDisha Training Institute provides cutting-edge training in high-demand technologies.
          </p>

          <div className="space-y-4 mb-10">
            {[
              { title: "Project-Based Learning", desc: "Build real-world applications as you learn.", iconColor: "emerald" },
              { title: "Mentorship from Experts", desc: "Get guided by professionals working in top tech firms.", iconColor: "blue" },
              { title: "Career-Ready Skills", desc: "Curriculum designed to get you hired.", iconColor: "orange" }
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle className={`text-${item.iconColor}-600`} size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{item.title}</h4>
                  <p className="text-sm text-slate-500 font-medium">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="glass p-5 rounded-2xl border-slate-200">
              <h5 className="font-bold text-emerald-600 mb-1">Our Mission</h5>
              <p className="text-xs text-slate-500 leading-relaxed font-medium">To democratize deep-tech skills through hands-on education.</p>
            </div>
            <div className="glass p-5 rounded-2xl border-slate-200">
              <h5 className="font-bold text-blue-600 mb-1">Our Vision</h5>
              <p className="text-xs text-slate-500 leading-relaxed font-medium">Creating a global hub for skilled developers and security experts.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeaturesSection = () => {
  const features = [
    { name: "Live Projects", icon: <Terminal />, color: "bg-blue-100 text-blue-600" },
    { name: "Real-World Training", icon: <CheckCircle />, color: "bg-emerald-100 text-emerald-600" },
    { name: "Certification", icon: <Trophy />, color: "bg-orange-100 text-orange-600" },
    { name: "Placement Assistance", icon: <Briefcase />, color: "bg-rose-100 text-rose-600" },
    { name: "Hackathon Mentorship", icon: <Users />, color: "bg-purple-100 text-purple-600" },
    { name: "24/7 Lab Access", icon: <Database />, color: "bg-cyan-100 text-cyan-600" }
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900">Why <span className="text-blue-600">SkillDisha?</span></h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center text-center p-6 bg-white border border-slate-100 rounded-3xl group hover:border-blue-200 hover:shadow-xl hover:shadow-blue-50/50 transition-all"
            >
              <div className={`p-4 rounded-2xl mb-4 ${f.color} group-hover:scale-110 transition-transform shadow-sm`}>
                {f.icon}
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

const Faculty = () => {
  return (
    <section id="faculty" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">Learn from the <span className="text-emerald-600">Experts</span></h2>
        <div className="grid md:grid-cols-3 gap-12">
          {[
            { name: "Prof. Shailesh Singh", role: "Chief Security Architect", expert: "Cyber Security" },
            { name: "Dr. Ananya Ray", role: "Ex-Senior Dev at Amazon", expert: "Web Architecture" },
            { name: "Vikram Seth", role: "AI Researcher", expert: "Data Science" }
          ].map((f, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="w-full aspect-square bg-slate-100 rounded-3xl mb-6 overflow-hidden border-4 border-white shadow-xl relative group">
                <div className="absolute inset-0 bg-blue-600/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                  <Linkedin className="text-white h-10 w-10" />
                </div>
                <img src={`https://i.pravatar.cc/300?u=${i + 10}`} alt={f.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">{f.name}</h3>
              <p className="text-blue-600 font-bold mb-2">{f.role}</p>
              <span className="text-xs uppercase tracking-widest text-slate-400 font-black">{f.expert} Expert</span>
            </div>
          ))}
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
    const phoneNumber = "919773162289"; // SkillDisha Official Number (Replace with actual)
    const message = `Hello SkillDisha Team!
    
I'm interested in the *${formData.course}* course.

*Details:*
- Name: ${formData.name}
- Email: ${formData.email}
- Course: ${formData.course}

*Message:*
${formData.message}`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

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
                  <p className="font-bold text-slate-700 text-lg">hello@skilldisha.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white rounded-xl shadow-sm border border-slate-100"><Phone className="text-emerald-600" /></div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Call Us</p>
                  <p className="font-bold text-slate-700 text-lg">+91 98765 43210</p>
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

            <button className="mt-10 flex items-center gap-3 bg-[#25D366] px-8 py-4 rounded-xl font-bold text-white hover:scale-105 transition-transform shadow-lg shadow-green-200">
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
                  <option>Cyber Security</option>
                  <option>Web Development</option>
                  <option>Python Programming</option>
                  <option>Data Science</option>
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

const Footer = () => {
  return (
    <footer className="bg-slate-900 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-6 text-white text-2xl font-bold uppercase tracking-tight">
              <Shield className="text-blue-400 h-8 w-8" />
              <span>Skill<span className="text-emerald-400">Disha</span></span>
            </div>
            <p className="text-slate-400 text-base max-w-xs leading-relaxed">
              Empowering individuals with next-generation technology skills. Join us and become a part of India's tech revolution.
            </p>
            <div className="flex gap-4 mt-8">
              <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-blue-400 hover:border-blue-400/50 cursor-pointer transition-all"><Twitter size={20} /></div>
              <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-blue-400 hover:border-blue-400/50 cursor-pointer transition-all"><Github size={20} /></div>
              <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-blue-400 hover:border-blue-400/50 cursor-pointer transition-all"><Linkedin size={20} /></div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 text-lg">Explore</h4>
            <ul className="space-y-4 text-sm text-slate-400 font-medium">
              <li className="hover:text-blue-400 cursor-pointer transition-colors">Courses</li>
              <li className="hover:text-blue-400 cursor-pointer transition-colors">About Us</li>
              <li className="hover:text-blue-400 cursor-pointer transition-colors">Careers</li>
              <li className="hover:text-blue-400 cursor-pointer transition-colors">Placement</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 text-lg">Courses</h4>
            <ul className="space-y-4 text-sm text-slate-400 font-medium">
              <li className="hover:text-blue-400 cursor-pointer transition-colors">Cyber Security</li>
              <li className="hover:text-blue-400 cursor-pointer transition-colors">Web Dev</li>
              <li className="hover:text-blue-400 cursor-pointer transition-colors">Python</li>
              <li className="hover:text-blue-400 cursor-pointer transition-colors">AI Basics</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 text-lg">Legal</h4>
            <ul className="space-y-4 text-sm text-slate-400 font-medium">
              <li className="hover:text-blue-400 cursor-pointer transition-colors">Privacy Policy</li>
              <li className="hover:text-blue-400 cursor-pointer transition-colors">Terms of Service</li>
              <li className="hover:text-blue-400 cursor-pointer transition-colors">Cookie Policy</li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-800 flex flex-col md:row justify-between items-center gap-4 text-slate-500 text-sm font-medium">
          <p>© 2026 SkillDisha Training Institute. All rights reserved.</p>
          <p>Developed with ❤️ for the next generation of builders.</p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
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
      <Navbar />
      <main>
        <Hero />
        <FeaturesSection />
        <CourseSection />
        <AboutSection />
        <CareerSection />
        <Faculty />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
