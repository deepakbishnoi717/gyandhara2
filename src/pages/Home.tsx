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
      <section className="relative overflow-hidden min-h-[90vh] flex items-center bg-slate-950">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(#06b6d4 1px, transparent 1px), linear-gradient(90deg, #06b6d4 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 lg:grid-cols-2 lg:py-24 items-center">
          <div className="z-10">
            <Badge className="bg-cyan-500 text-slate-950 font-bold mb-5 shadow-[0_0_15px_#06b6d4]">🏆 HKCL Government Recognized</Badge>
            <h1 className="font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-7xl text-white">
              Tech Education <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">Redefined.</span>
            </h1>
            <p className="mt-5 text-lg text-slate-400 max-w-xl">
              Master the future with Tohana's elite computer institute. From HS-CIT to Advanced Web Architectures, we build the pioneers of tomorrow.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-cyan-500 text-slate-950 hover:bg-cyan-400 shadow-neon border-0 font-bold">
                <Link to="/admissions">Join the Matrix <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-slate-800 text-white hover:bg-white/5 backdrop-blur-sm">
                <Link to="/courses">Explore Hub</Link>
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-6 text-xs font-bold uppercase tracking-widest text-slate-500">
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-500" /> HKCL Certified</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-500" /> Expert Faculty</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-500" /> Tohana Center</div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-2xl blur opacity-25"></div>
            <img src={heroImg} alt="Students learning" className="relative rounded-2xl shadow-2xl border border-white/10" />
            <div className="absolute -bottom-5 -left-5 hidden sm:block glass-panel rounded-xl px-5 py-4 shadow-neon">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500 text-slate-950 shadow-neon"><Users className="h-5 w-5" /></div>
                <div>
                  <div className="font-display font-bold text-xl text-white">500+</div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-widest">Digital Pioneers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-white/5 bg-slate-900/30 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 py-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { n: "500+", l: "Digital Pioneers" },
            { n: "31+", l: "Core Modules" },
            { n: "5★", l: "User Rating" },
            { n: "HKCL", l: "Certified Hub" },
          ].map((s) => (
            <div key={s.l} className="group">
              <div className="font-display text-4xl font-bold text-cyan-400 group-hover:scale-110 transition-transform">{s.n}</div>
              <div className="text-[10px] text-slate-500 mt-1 uppercase tracking-widest font-bold">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About brief */}
      <section className="mx-auto max-w-7xl px-4 py-24 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <Badge variant="secondary" className="mb-4 bg-emerald-500/10 text-emerald-400 border-emerald-500/20 uppercase tracking-widest text-[10px] font-bold">The Vision</Badge>
          <h2 className="font-display text-3xl sm:text-5xl font-bold mb-6 text-white">Architecting Digital Careers</h2>
          <p className="text-slate-400 leading-relaxed mb-6 text-lg">
            Gyan Dhara Institute isn't just a training center; it's a launchpad. We bridge the gap between classroom theory and industry reality, serving the Fatehabad district with high-octane technical education.
          </p>
          <Button asChild variant="outline" className="border-slate-800 hover:bg-cyan-500/10 hover:text-cyan-400 font-bold uppercase tracking-widest text-xs px-6 py-5"><Link to="/about">Our Protocol <ArrowRight className="ml-1 h-4 w-4" /></Link></Button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { icon: Award, title: "Certified", text: "Govt. Validated" },
            { icon: Users, title: "Elite Mentors", text: "Industry Experts" },
            { icon: Clock, title: "Dynamic", text: "Flexible Batches" },
            { icon: Star, title: "Next-Gen Lab", text: "High-End Gear" },
          ].map((f) => (
            <div key={f.title} className="glass-panel p-6 rounded-xl hover:border-cyan-500/50 transition-all group">
              <f.icon className="h-8 w-8 text-emerald-500 mb-4 group-hover:text-cyan-400 transition-colors" />
              <div className="font-bold mb-1 text-white">{f.title}</div>
              <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">{f.text}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Courses */}
      <section className="relative py-24 bg-slate-900/20 border-y border-white/5">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
            <div>
              <Badge variant="secondary" className="mb-3 bg-cyan-500/10 text-cyan-400 border-cyan-500/20 uppercase tracking-widest text-[10px] font-bold">Active Modules</Badge>
              <h2 className="font-display text-3xl sm:text-5xl font-bold text-white">Neural Pathways</h2>
            </div>
            <Button asChild variant="ghost" className="text-slate-500 hover:text-cyan-400 uppercase tracking-widest text-[10px] font-bold"><Link to="/courses">Access All Nodes <ArrowRight className="ml-1 h-4 w-4" /></Link></Button>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featured.map((c) => (
              <div key={c.slug} className="glass-panel group p-8 rounded-2xl hover:bg-slate-900 transition-all duration-500 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-cyan-500/10 transition-colors"></div>
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-primary text-slate-950 mb-6 shadow-neon group-hover:scale-110 transition-transform">
                  <c.icon className="h-7 w-7" />
                </div>
                <Badge variant="outline" className="mb-3 text-[10px] border-slate-700 text-slate-500 uppercase tracking-widest font-bold">{c.category}</Badge>
                <h3 className="font-display font-bold text-xl mb-3 text-white">{c.title}</h3>
                <p className="text-sm text-slate-400 mb-6 line-clamp-2 leading-relaxed">{c.description}</p>
                <div className="flex items-center justify-between text-[10px] mb-6 font-bold uppercase tracking-widest text-slate-500">
                  <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5 text-emerald-500" /> {c.duration}</span>
                  <span className="text-cyan-400">{c.fees}</span>
                </div>
                <Button asChild className="w-full bg-white/5 hover:bg-cyan-500 hover:text-slate-950 border border-white/10 transition-all duration-300 font-bold py-6 uppercase tracking-widest text-xs">
                  <Link to="/admissions">Initialize</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-4 py-24">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-3 bg-emerald-500/10 text-emerald-400 border-emerald-500/20 uppercase tracking-widest text-[10px] font-bold">Feedback Loop</Badge>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white">Student Core Responses</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: "Priya Sharma", course: "HS-CIT", text: "Bohot accha experience raha! Teachers ne har concept clearly samjhaya. Government certification mil gaya, ab job ke liye apply kar rahi hoon." },
            { name: "Rahul Verma", course: "Web Development", text: "Best institute in Tohana for web development. Practical training milti hai jo industry me actually use hoti hai. Highly recommended!" },
            { name: "Anjali Yadav", course: "Basic Computer", text: "Mujhe computer ka kuch nahi aata tha. Yahan se basic se start kiya aur ab MS Office, internet sab confidently use kar sakti hoon." },
          ].map((t) => (
            <div key={t.name} className="glass-panel p-8 rounded-2xl border-white/5 hover:border-cyan-500/30 transition-all group">
              <div className="flex gap-1 mb-6 text-cyan-400">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="text-slate-400 italic mb-8 leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                <div className="h-12 w-12 rounded-xl bg-gradient-primary text-slate-950 flex items-center justify-center font-bold shadow-neon group-hover:rotate-12 transition-transform">{t.name[0]}</div>
                <div>
                  <div className="font-bold text-white">{t.name}</div>
                  <div className="text-[10px] text-emerald-400 uppercase tracking-widest font-bold">{t.course}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
        <div className="relative mx-auto max-w-7xl px-4 flex flex-wrap items-center justify-between gap-8">
          <div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-white">Ready to initialize?</h2>
            <p className="text-slate-400 mt-4 text-lg">Secure your slot in the next batch today.</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-cyan-500 text-slate-950 hover:bg-cyan-400 shadow-neon border-0 font-bold uppercase tracking-widest text-xs px-8 py-7"><Link to="/admissions">Enroll System</Link></Button>
            <Button asChild size="lg" variant="outline" className="border-slate-800 text-white hover:bg-white/5 font-bold uppercase tracking-widest text-xs px-8 py-7">
              <a href="tel:+918199073036"><Phone className="mr-2 h-4 w-4" /> 81990-73036</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
