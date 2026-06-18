import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Target, Eye, Heart, MapPin, Users } from "lucide-react";

export default function About() {
  return (
    <Layout>
      <Helmet>
        <title>About Us — Gyan Dhara Institute Tohana</title>
        <meta name="description" content="Founded in 2025, Gyan Dhara Institute Tohana is an HKCL-recognised computer training center in Tohana, Fatehabad." />
        <meta property="og:title" content="About Gyan Dhara Institute Tohana" />
        <meta property="og:description" content="HKCL recognised computer institute serving Tohana, Fatehabad. Our story, mission and vision." />
      </Helmet>
      <section className="bg-[#020817] text-white py-24 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 relative z-10">
          <Badge className="bg-cyan-500 text-slate-950 font-bold mb-6 uppercase tracking-[0.2em] text-[10px] py-1 px-3">Protocol Identity</Badge>
          <h1 className="font-display text-5xl sm:text-7xl font-bold max-w-4xl neon-heading leading-tight">Empowering Tohana with <span className="neon-accent">quality computer education</span></h1>
          <p className="mt-8 text-slate-400 max-w-2xl text-xl border-l-2 border-cyan-500/30 pl-8 italic">Since 2025, Gyan Dhara Institute has been Tohana's go-to destination for government-recognized computer training and career-ready IT courses.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24 grid lg:grid-cols-3 gap-10">
        {[
          { icon: Target, title: "Our Mission", text: "To make quality computer education accessible and affordable for every student in Tohana and surrounding areas, bridging the digital divide one batch at a time." },
          { icon: Eye, title: "Our Vision", text: "To become Haryana's most trusted computer training institute, producing skilled IT professionals who contribute to India's digital economy." },
          { icon: Heart, title: "Our Values", text: "Behind every student's success, there are teachers who believe in them. We commit to mentorship, integrity, and student-first learning." },
        ].map((b) => (
          <div key={b.title} className="glass-panel p-10 group relative overflow-hidden">
            <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <b.icon className="h-24 w-24" />
            </div>
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-primary text-slate-950 mb-8 shadow-neon group-hover:scale-110 transition-transform duration-500"><b.icon className="h-7 w-7" /></div>
            <h3 className="font-display text-2xl font-bold mb-4 text-white uppercase tracking-tight">{b.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed border-t border-white/5 pt-6">{b.text}</p>
          </div>
        ))}
      </section>

      <section className="bg-slate-950/40 border-y border-white/5">
        <div className="mx-auto max-w-7xl px-4 py-32">
          <h2 className="font-display text-4xl sm:text-6xl font-bold mb-4 text-white">Our <span className="text-emerald-500">Story</span></h2>
          <div className="grid lg:grid-cols-2 gap-20 mt-12">
            <div className="space-y-6 text-slate-400 leading-relaxed text-lg border-l-2 border-emerald-500/20 pl-10">
              <p>Gyan Dhara Institute was founded in 2025 with a single purpose: to make computer education accessible for the students of Tohana and surrounding villages of Fatehabad district.</p>
              <p>What started as a small initiative quickly grew into a trusted name in computer training, thanks to our affordable fee structure, dedicated faculty, and recognition by the <strong className="text-white">Haryana Knowledge Corporation Limited (HKCL)</strong> — a Government of Haryana enterprise.</p>
              <p>Today, we operate from our center in Tohana, offering everything from basic computer literacy to advanced web development and government-certified HS-CIT programs.</p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Award, n: "HKCL", l: "Government Recognised" },
                { icon: Users, n: "500+", l: "Students Trained" },
                { icon: MapPin, n: "Tohana", l: "Our Location" },
                { icon: Heart, n: "2025", l: "Founded" },
              ].map((s) => (
                <div key={s.l} className="glass-panel p-8 text-center group hover:border-cyan-500/50 transition-all">
                  <s.icon className="h-8 w-8 text-cyan-500 mx-auto mb-4 group-hover:text-emerald-400 transition-colors" />
                  <div className="font-display text-3xl font-bold text-white mb-2">{s.n}</div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-32">
        <h2 className="font-display text-4xl font-bold mb-12 text-white uppercase tracking-tight">Our Center <span className="text-cyan-400">Coordinates</span></h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass-panel p-10 border-white/5 group relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8 opacity-5">
               <MapPin className="h-32 w-32" />
             </div>
            <div className="flex items-start gap-5">
              <MapPin className="h-8 w-8 text-cyan-500 flex-none mt-1 group-hover:animate-bounce" />
              <div>
                <h3 className="font-display font-bold text-2xl text-white">Gyan Dhara Institute Tohana</h3>
                <p className="text-lg text-slate-400 mt-4 leading-relaxed italic border-l-2 border-cyan-500/20 pl-6">New Sabzi Mandi Road, near Bus Stand, Krishna Colony, Tohana, Haryana 125120</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950/40 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 py-32">
          <h2 className="font-display text-4xl sm:text-6xl font-bold mb-4 text-white">Affiliations & <span className="text-emerald-500">Recognition</span></h2>
          <p className="text-slate-400 mb-16 text-xl italic border-l-2 border-emerald-500/20 pl-8">Trusted by the government, recognised by the community.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "HKCL", desc: "Haryana Knowledge Corporation Limited — Government of Haryana" },
              { title: "HS-CIT Authorized", desc: "Authorized HS-CIT, HS-CIT (A) and HS-CIT (A+) examination center" },
              { title: "ISO Compliant", desc: "Operating with quality standards in education delivery" },
            ].map((a) => (
              <div key={a.title} className="glass-panel p-10 group relative overflow-hidden">
                <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Award className="h-24 w-24" />
                </div>
                <Award className="h-10 w-10 text-emerald-400 mb-8 group-hover:text-cyan-400 transition-colors" />
                <h3 className="font-display font-bold text-2xl mb-4 text-white uppercase tracking-tight">{a.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed border-t border-white/5 pt-6">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
