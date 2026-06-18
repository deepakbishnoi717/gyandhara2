import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Award, CheckCircle2, Clock, Phone, Star, Users } from "lucide-react";
import { courses } from "@/lib/courses";
import heroImg from "@/assets/hero-students.jpg";

export default function Home() {
  const featured = courses.filter((c) => c.featured);
  return (
    <Layout>
      <Helmet>
        <title>Gyan Dhara Institute Tohana — HKCL Certified Computer Courses</title>
        <meta name="description" content="Computer Sikhna Ab Hua Aasan! HKCL recognized computer training in Tohana — HS-CIT, web development, basic & advanced courses. Enroll today." />
        <meta name="keywords" content="computer course Tohana, HKCL Tohana, HS-CIT Tohana, web development Tohana, computer training Fatehabad, HTML CSS course Tohana" />
        <meta property="og:title" content="Gyan Dhara Institute Tohana — HKCL Certified Computer Courses" />
        <meta property="og:description" content="Government-recognised computer training in Tohana. HS-CIT, web development, basic to advanced. Enroll now." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      {/* Hero */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center bg-[#020817]">
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 lg:grid-cols-2 lg:py-24 items-center">
          <div className="z-10">
            <Badge className="bg-cyan-500 text-slate-950 font-bold mb-5 shadow-[0_0_15px_#06b6d4] uppercase tracking-wider">🏆 HKCL Government Recognized</Badge>
            <h1 className="font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-7xl neon-heading">
              Tech Education <br />
              <span className="neon-accent">Redefined.</span>
            </h1>
            <p className="mt-5 text-lg text-slate-400 max-w-xl border-l-2 border-cyan-500/30 pl-6 italic">
              Master the future with Tohana's elite computer institute. From HS-CIT to Advanced Web Architectures, we build the pioneers of tomorrow.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/admissions" className="btn-primary uppercase tracking-widest text-sm py-4 px-8">
                Join the Matrix <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/courses" className="inline-flex items-center justify-center px-8 py-4 border border-slate-800 text-white font-bold uppercase tracking-widest text-sm hover:bg-white/5 backdrop-blur-sm rounded-lg transition-all">
                Explore Hub
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-6 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-500" /> HKCL Certified</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-500" /> Expert Faculty</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-500" /> Tohana Center</div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-2xl blur-2xl opacity-10 animate-pulse"></div>
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
              <img src={heroImg} alt="Students learning" className="w-full grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020817] to-transparent opacity-60"></div>
            </div>
            <div className="absolute -bottom-5 -left-5 glass-panel px-6 py-5 shadow-neon border-l-4 border-cyan-500">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-500 text-slate-950 shadow-neon"><Users className="h-6 w-6" /></div>
                <div>
                  <div className="font-display font-bold text-2xl text-white">500+</div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Digital Pioneers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-white/5 bg-slate-950/50 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { n: "500+", l: "Digital Pioneers" },
            { n: "31+", l: "Core Modules" },
            { n: "5★", l: "User Rating" },
            { n: "HKCL", l: "Certified Hub" },
          ].map((s) => (
            <div key={s.l} className="group cursor-default">
              <div className="font-display text-4xl font-bold text-cyan-400 group-hover:text-emerald-400 transition-colors duration-500 mb-1">{s.n}</div>
              <div className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-bold group-hover:text-slate-300 transition-colors">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About brief */}
      <section className="mx-auto max-w-7xl px-4 py-32 grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <Badge variant="secondary" className="mb-6 bg-emerald-500/10 text-emerald-400 border-emerald-500/20 uppercase tracking-[0.2em] text-[10px] font-bold py-1 px-3">The Vision</Badge>
          <h2 className="font-display text-4xl sm:text-6xl font-bold mb-8 text-white leading-tight">Architecting Digital <span className="text-emerald-500">Careers</span></h2>
          <p className="text-slate-400 leading-relaxed mb-10 text-xl border-l-2 border-emerald-500/30 pl-8">
            Gyan Dhara Institute isn't just a training center; it's a launchpad. We bridge the gap between classroom theory and industry reality, serving the Fatehabad district with high-octane technical education.
          </p>
          <Link to="/about" className="inline-flex items-center text-emerald-400 hover:text-cyan-400 font-bold uppercase tracking-[0.2em] text-xs transition-colors group">
            Our Protocol <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-6">
          {[
            { icon: Award, title: "Certified", text: "Govt. Validated" },
            { icon: Users, title: "Elite Mentors", text: "Industry Experts" },
            { icon: Clock, title: "Dynamic", text: "Flexible Batches" },
            { icon: Star, title: "Next-Gen Lab", text: "High-End Gear" },
          ].map((f) => (
            <div key={f.title} className="glass-panel p-8 hover:border-cyan-500/50 transition-all group relative overflow-hidden">
              <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <f.icon className="h-24 w-24" />
              </div>
              <f.icon className="h-10 w-10 text-emerald-500 mb-6 group-hover:text-cyan-400 transition-colors" />
              <div className="font-bold mb-2 text-white text-lg">{f.title}</div>
              <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">{f.text}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Courses */}
      <section className="relative py-32 bg-[#020817] border-y border-white/5">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-16">
            <div>
              <Badge variant="secondary" className="mb-4 bg-cyan-500/10 text-cyan-400 border-cyan-500/20 uppercase tracking-[0.2em] text-[10px] font-bold py-1 px-3">Active Modules</Badge>
              <h2 className="font-display text-4xl sm:text-6xl font-bold text-white">Neural <span className="text-cyan-400">Pathways</span></h2>
            </div>
            <Link to="/courses" className="text-slate-500 hover:text-cyan-400 uppercase tracking-widest text-[10px] font-bold flex items-center gap-2 group transition-colors">
              Access All Nodes <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featured.map((c) => (
              <div key={c.slug} className="course-card p-10 group">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-primary text-slate-950 mb-8 shadow-neon group-hover:scale-110 transition-transform duration-500">
                  <c.icon className="h-8 w-8" />
                </div>
                <Badge variant="outline" className="mb-4 text-[10px] border-slate-700 text-slate-500 uppercase tracking-[0.2em] font-bold py-0.5 px-2">{c.category}</Badge>
                <h3 className="font-display font-bold text-2xl mb-4 text-white group-hover:text-cyan-400 transition-colors">{c.title}</h3>
                <p className="text-slate-400 mb-8 line-clamp-2 leading-relaxed text-sm">{c.description}</p>
                <div className="flex items-center justify-between text-[11px] mb-8 font-bold uppercase tracking-[0.2em] text-slate-500">
                  <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-emerald-500" /> {c.duration}</span>
                  <span className="text-cyan-400">{c.fees}</span>
                </div>
                <Link to="/admissions" className="w-full flex items-center justify-center py-4 bg-white/5 hover:bg-cyan-500 hover:text-slate-950 border border-white/10 rounded-lg transition-all duration-500 font-bold uppercase tracking-widest text-xs">
                  Initialize
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-4 py-32">
        <div className="text-center mb-20">
          <Badge variant="secondary" className="mb-4 bg-emerald-500/10 text-emerald-400 border-emerald-500/20 uppercase tracking-[0.2em] text-[10px] font-bold py-1 px-3">Feedback Loop</Badge>
          <h2 className="font-display text-4xl sm:text-6xl font-bold text-white">Student <span className="text-emerald-500">Core</span> Responses</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: "Priya Sharma", course: "HS-CIT", text: "Bohot accha experience raha! Teachers ne har concept clearly samjhaya. Government certification mil gaya, ab job ke liye apply kar rahi hoon." },
            { name: "Rahul Verma", course: "Web Development", text: "Best institute in Tohana for web development. Practical training milti hai jo industry me actually use hoti hai. Highly recommended!" },
            { name: "Anjali Yadav", course: "Basic Computer", text: "Mujhe computer ka kuch nahi aata tha. Yahan se basic se start kiya aur ab MS Office, internet sab confidently use kar sakti hoon." },
          ].map((t) => (
            <div key={t.name} className="glass-panel p-10 hover:border-cyan-500/30 transition-all group relative">
              <div className="flex gap-1 mb-8 text-cyan-400">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="text-slate-400 italic mb-10 leading-relaxed text-lg">"{t.text}"</p>
              <div className="flex items-center gap-5 pt-8 border-t border-white/5">
                <div className="h-14 w-14 rounded-xl bg-gradient-primary text-slate-950 flex items-center justify-center font-bold text-xl shadow-neon group-hover:rotate-[360deg] transition-transform duration-700">{t.name[0]}</div>
                <div>
                  <div className="font-bold text-white text-lg">{t.name}</div>
                  <div className="text-[10px] text-emerald-400 uppercase tracking-widest font-bold">{t.course}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 overflow-hidden mx-4 my-20 rounded-[2rem] border border-cyan-500/20">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10"></div>
        <div className="relative mx-auto max-w-5xl px-4 text-center">
          <h2 className="font-display text-4xl sm:text-7xl font-bold text-white mb-6">Ready to <span className="neon-accent">initialize?</span></h2>
          <p className="text-slate-400 mb-12 text-xl max-w-2xl mx-auto">Secure your slot in the next batch today. The digital future waits for no one.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/admissions" className="btn-primary py-5 px-10 uppercase tracking-[0.2em] text-sm">
              Enroll System Now
            </Link>
            <a href="tel:+918199073036" className="inline-flex items-center justify-center px-10 py-5 border border-slate-800 text-white font-bold uppercase tracking-widest text-sm hover:bg-white/5 backdrop-blur-sm rounded-lg transition-all">
              <Phone className="mr-3 h-5 w-5" /> 81990-73036
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
