export const WHATSAPP_NUMBER = "916356375745";
export const SECONDARY_PHONE_NUMBER = "919773162289";

export const handleWhatsApp = (message = "Hello SkillDisha! I'm interested in learning more about your programs.") => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
};

export const handleCall = (number = WHATSAPP_NUMBER) => {
    window.location.href = `tel:+${number}`;
};

export const navLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Know Your Trainer', href: '#trainer' },
    { name: 'Why Us', href: '#features' },
    { name: 'Contact', href: '#contact' },
];

export const categories = [
    { name: 'Cyber Security', href: '#courses', index: 1 },
    { name: 'Cloud Computing & Virtualization', href: '#courses', index: 2 },
    { name: 'IT Infrastructure, Network & System Administration', href: '#courses', index: 0 },
    { name: 'Software Development & Programming', href: '#courses', index: 3 },
];

export const achievements = [
    "Microsoft-certified professional holding MCP, MCSA, MCSE, Hyper-V, MCTS and MCT credentials, along with multiple globally recognized Cyber Security certifications, delivering industry-aligned training across IT Infrastructure, Cloud & Cyber Security.",
    "Delivered 200+ seminars, webinars, and awareness sessions on Cyber Security, Cloud Computing, Virtualization and other Technologies.",
    "20+ years of proven IT industry experience.",
    "2500+ students successfully trained.",
    "Extensive corporate, government & Indian Army training experience.",
    "Award-winning and professionally recognized trainer.",
    "Featured speaker at leading industry and academic platforms, including THM Surat and OPAL India (Security Week).",
    "Media presence and thought leadership, featured in “Cyber Talk with Shailesh” by Exotic Web Media.",
    "Specialized experience in government workforce training, covering digital literacy and cyber security for GEB staff, Clerks, Teachers, Taluka panchayat members and other.",
    "Comprehensive career guidance, mentorship & placement support, including resume building, interview preparation, and personalized career roadmaps."];

export const programs = [
    {
        id: "it-infra",
        title: "IT Infrastructure & System Administration",
        duration: "6-8 Months",
        description: "Learn IT Infrastructure, Computer Networking, Windows Server, and Linux System Administration with hands-on training. This program prepares students for careers in IT support, network administration, and system administration used in modern enterprise environments. ",
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
        description: "Master Cyber Security, Ethical Hacking, VAPT, Web Security, SOC Operations, and Bug Bounty Hunting with practical labs. This course helps students build skills to detect, prevent, and respond to cyber-attacks using industry-standard security tools. ",
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
        description: "Build expertise in Cloud Computing, Data Center Technologies, Server Virtualization, AWS, and Microsoft Azure. Learn to deploy, manage, and secure modern cloud infrastructure and enterprise virtual environments. ",
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
        title: "Software Development & Programming",
        duration: "Custom",
        description: "Learn Programming and Website Development (Front-End, Back-End, and Full Stack) using languages like C, C++, Java, and Python. Gain practical experience through live projects, internships, and real-world application development. ",
        modules: [
            { title: "Website Development (Front End / Back End / Full Stack)", desc: "Learn to design and develop complete websites—from user interface to database and deployment—using industry-relevant tools and live projects." },
            { title: "Programming (C, C++, Java, Python)", desc: "Build strong programming fundamentals, logic and problem-solving skills using the most in-demand languages for academics and IT careers." },
            { title: "College Projects & Internship", desc: "Industry-guided mini and final year projects with practical implementation, documentation, internship certification and viva support." },
            { title: "School Syllabus", desc: "Complete support for school computer syllabus, practical and basic coding to build strong technical foundations from an early stage." }
        ]
    }
];
