import { Monitor, Code, Award, Briefcase, Globe, GraduationCap, Wrench, Sparkles, FileText, Palette, Database, Shield, Network, Calculator, ShoppingCart, Megaphone, PenTool, Layers, Box, BarChart3, LayoutTemplate, Type, Cpu, Command, Terminal, BookOpen, MessageSquare, CreditCard, Store } from "lucide-react";

export type Course = {
  slug: string;
  title: string;
  category: string;
  duration: string;
  fees: string;
  eligibility: string;
  description: string;
  icon: typeof Monitor;
  featured?: boolean;
};

export const courses: Course[] = [
  // HKCL Government Certified
  { slug: "hs-cit", title: "HS-CIT [Certificate in Information Technology]", category: "HKCL Government Certified", duration: "132 Hours", fees: "₹4,500", eligibility: "10th pass", description: "Haryana State Certificate in Information Technology — government recognised IT certification by HKCL.", icon: Award, featured: true },
  { slug: "hs-cit-a", title: "HS-CIT (A) [Haryana State Certificate in IT Applications]", category: "HKCL Government Certified", duration: "6 Months", fees: "₹9,000", eligibility: "10th pass", description: "HS-CIT Applications — practical application-focused IT certification from HKCL.", icon: Award, featured: true },
  { slug: "hs-cit-aplus", title: "HS-CIT (A+) [Haryana State Certificate in IT Advanced Applications]", category: "HKCL Government Certified", duration: "1 Year", fees: "₹18,000", eligibility: "12th pass", description: "Advanced HS-CIT covering enterprise applications, networking basics & advanced IT.", icon: Award, featured: true },

  // Accounting & Finance
  { slug: "financial-accounting", title: "Certificate in Financial Accounting", category: "Accounting & Finance", duration: "120 Hours", fees: "₹4,500", eligibility: "10th pass", description: "Learn financial accounting principles, journal entries, ledger, balance sheet & financial statements.", icon: Calculator, featured: true },
  { slug: "advanced-accounting", title: "Certificate in Advanced Accounting", category: "Accounting & Finance", duration: "120 Hours", fees: "₹4,500", eligibility: "10th pass", description: "Advanced accounting concepts, cost accounting, taxation & corporate accounting practices.", icon: Calculator },
  { slug: "advanced-tally", title: "Certificate in Advanced Tally (with latest version of Tally Prime)", category: "Accounting & Finance", duration: "120 Hours", fees: "₹4,500", eligibility: "10th pass", description: "Master Tally Prime — GST billing, inventory, payroll, financial reports & compliance.", icon: Monitor, featured: true },

  // Office & Productivity
  { slug: "advanced-excel", title: "Certificate in Advanced Excel", category: "Office & Productivity", duration: "120 Hours", fees: "₹4,500", eligibility: "10th pass", description: "Advanced Excel formulas, pivot tables, macros, data analysis & business dashboards.", icon: BarChart3, featured: true },
  { slug: "office-assistance", title: "Certificate in Office Assistance", category: "Office & Productivity", duration: "120 Hours", fees: "₹4,500", eligibility: "10th pass", description: "Complete office administration training — MS Office, scheduling, communication & record keeping.", icon: FileText },
  { slug: "data-entry", title: "Certificate in Data Entry and Data Management", category: "Office & Productivity", duration: "120 Hours", fees: "₹4,500", eligibility: "10th pass", description: "Fast & accurate data entry techniques, database management & information processing skills.", icon: Database },

  // Design & Multimedia
  { slug: "autocad", title: "Certificate in AutoCAD", category: "Design & Multimedia", duration: "120 Hours", fees: "₹4,500", eligibility: "10th pass", description: "2D & 3D drafting, architectural drawings, mechanical designs & CAD modelling with AutoCAD.", icon: PenTool },
  { slug: "photo-editing", title: "Certificate in Photo Editing", category: "Design & Multimedia", duration: "120 Hours", fees: "₹4,500", eligibility: "10th pass", description: "Professional photo editing, retouching, colour correction & image manipulation techniques.", icon: Palette },
  { slug: "coral-draw", title: "Certificate in Coral Draw (DTP)", category: "Design & Multimedia", duration: "120 Hours", fees: "₹4,500", eligibility: "10th pass", description: "Desktop publishing with CorelDRAW — vector graphics, brochures, banners & print design.", icon: Layers },
  { slug: "adobe-dtp", title: "Certificate in Adobe (DTP)", category: "Design & Multimedia", duration: "120 Hours", fees: "₹4,500", eligibility: "10th pass", description: "Adobe Creative Suite for desktop publishing — Photoshop, Illustrator & InDesign basics.", icon: Box },
  { slug: "graphic-designing", title: "Certificate in Graphic Designing", category: "Design & Multimedia", duration: "120 Hours", fees: "₹4,500", eligibility: "10th pass", description: "Creative graphic design — branding, logos, social media creatives & visual communication.", icon: Palette, featured: true },
  { slug: "video-editing", title: "Certificate in Video Editing", category: "Design & Multimedia", duration: "120 Hours", fees: "₹4,500", eligibility: "10th pass", description: "Professional video editing, transitions, effects, colour grading & post-production workflow.", icon: Monitor },

  // IT & Networking
  { slug: "it-network-support", title: "Certificate in IT Network Support", category: "IT & Networking", duration: "120 Hours", fees: "₹4,500", eligibility: "10th pass", description: "Network fundamentals, LAN/WAN setup, troubleshooting, cabling & network administration.", icon: Network },
  { slug: "it-security-support", title: "Certificate in IT Security Support", category: "IT & Networking", duration: "120 Hours", fees: "₹4,500", eligibility: "10th pass", description: "Cybersecurity basics, threat protection, firewall setup, antivirus & security best practices.", icon: Shield },
  { slug: "dbms", title: "Certificate in Database Management System (DBMS)", category: "IT & Networking", duration: "120 Hours", fees: "₹4,500", eligibility: "10th pass", description: "Database design, SQL queries, normalisation, ER diagrams & RDBMS management.", icon: Database, featured: true },

  // Programming & Development
  { slug: "java", title: "Certificate in Java", category: "Programming & Development", duration: "120 Hours", fees: "₹4,500", eligibility: "10th pass", description: "Core Java programming — OOP concepts, collections, exception handling & real-world projects.", icon: BookOpen },
  { slug: "python", title: "Certificate in Python", category: "Programming & Development", duration: "120 Hours", fees: "₹4,500", eligibility: "10th pass", description: "Python programming — data structures, file handling, automation & beginner projects.", icon: Code, featured: true },
  { slug: "c-cpp", title: "Certificate in C & C++ Programming", category: "Programming & Development", duration: "120 Hours", fees: "₹4,500", eligibility: "10th pass", description: "C & C++ fundamentals — variables, loops, functions, pointers, OOP & memory management.", icon: Terminal },
  { slug: "php", title: "Certificate in PHP", category: "Programming & Development", duration: "120 Hours", fees: "₹4,500", eligibility: "10th pass", description: "PHP web development — forms, sessions, MySQL integration & dynamic website building.", icon: Globe },
  { slug: "web-designing", title: "Certificate in Web Designing", category: "Programming & Development", duration: "120 Hours", fees: "₹4,500", eligibility: "10th pass", description: "Creative web design — HTML, CSS, JavaScript, responsive layouts & UI/UX principles.", icon: LayoutTemplate, featured: true },
  { slug: "html-css", title: "Certificate in HTML with CSS", category: "Programming & Development", duration: "120 Hours", fees: "₹4,500", eligibility: "10th pass", description: "Build modern, responsive web pages from scratch with semantic HTML5 & CSS3.", icon: Code },
  { slug: "csharp", title: "Certificate in C#", category: "Programming & Development", duration: "120 Hours", fees: "₹4,500", eligibility: "10th pass", description: "C# programming — .NET basics, Windows forms, OOP & application development.", icon: Command },
  { slug: "data-structures", title: "Certificate in Data Structures using C and C++", category: "Programming & Development", duration: "120 Hours", fees: "₹4,500", eligibility: "10th pass", description: "Data structures & algorithms — arrays, linked lists, stacks, queues, trees & sorting.", icon: Cpu, featured: true },

  // Business & Soft Skills
  { slug: "english-communication", title: "Certificate in English Communication & Soft Skills", category: "Business & Soft Skills", duration: "120 Hours", fees: "₹4,500", eligibility: "10th pass", description: "Spoken English, business communication, presentation skills, interview prep & personality development.", icon: MessageSquare, featured: true },
  { slug: "digital-freelancing", title: "Certificate in Digital Freelancing", category: "Business & Soft Skills", duration: "60 Hours", fees: "₹2,250", eligibility: "10th pass", description: "Start freelancing online — platforms, client management, pricing & building a digital portfolio.", icon: Briefcase, featured: true },
  { slug: "bfsi", title: "Certificate in BFSI", category: "Business & Soft Skills", duration: "120 Hours", fees: "₹4,500", eligibility: "10th pass", description: "Banking, Financial Services & Insurance — operations, regulations, customer service & sales.", icon: CreditCard },
  { slug: "retail-management", title: "Certificate in Retail Management", category: "Business & Soft Skills", duration: "120 Hours", fees: "₹4,500", eligibility: "10th pass", description: "Retail operations, inventory management, customer service, merchandising & store administration.", icon: Store },
  { slug: "social-media-marketing", title: "Certificate in Social Media Marketing", category: "Business & Soft Skills", duration: "60 Hours", fees: "₹2,250", eligibility: "10th pass", description: "Social media strategy, content creation, paid ads, analytics & brand growth on all platforms.", icon: Megaphone, featured: true },
];
