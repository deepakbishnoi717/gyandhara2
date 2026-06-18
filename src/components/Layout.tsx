import { Link, NavLink } from "react-router-dom";
import { useState, type ReactNode } from "react";
import { Menu, X, Phone, MapPin, Mail, Instagram, Facebook, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/courses", label: "Courses" },
  { to: "/admissions", label: "Admissions" },
  { to: "/contact", label: "Contact" },
];

const WHATSAPP = "918199073036";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full glass-panel !rounded-none border-x-0 border-t-0 border-b border-cyan-500/15 backdrop-blur-xl">
      <div className="bg-gradient-primary text-slate-950 text-[10px] font-bold uppercase tracking-[0.2em] shadow-neon">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-1.5">
          <span className="hidden sm:inline">📍 Tohana, Haryana · HKCL Recognized Institute</span>
          <div className="flex items-center gap-4">
            <a href="tel:+918199073036" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="h-3 w-3" /> 81990-73036
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4">
        <Link to="/" className="flex items-center gap-4 group">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary text-slate-950 font-display font-bold text-xl shadow-neon group-hover:rotate-[360deg] transition-transform duration-700">
            GD
          </div>
          <div className="leading-tight">
            <div className="font-display text-lg font-bold text-white group-hover:text-cyan-400 transition-colors uppercase tracking-tight">Gyan Dhara Institute</div>
            <div className="text-[10px] text-slate-500 group-hover:text-cyan-500 transition-colors uppercase tracking-[0.2em] font-bold">Tohana · HKCL Certified</div>
          </div>
        </Link>
        <nav className="hidden lg:flex items-center gap-2">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.to === "/"}
              className={({ isActive }) =>
                `px-5 py-2 text-[11px] font-bold uppercase tracking-[0.2em] rounded-lg transition-all duration-500 ${
                  isActive 
                    ? "text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 shadow-[0_0_20px_rgba(6,182,212,0.2)] text-shadow-neon" 
                    : "text-slate-400 hover:text-cyan-400 hover:bg-white/5"
                }`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link to="/admissions" className="btn-primary hidden sm:inline-flex py-3 px-6 text-[10px] uppercase tracking-widest">
            Enroll Now
          </Link>
          <button className="lg:hidden p-2 text-slate-400 hover:text-cyan-400 transition-colors" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-cyan-500/10 bg-[#020817]/95 backdrop-blur-2xl">
          <nav className="mx-auto flex flex-col px-4 py-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-4 text-xs font-bold uppercase tracking-[0.3em] border-b border-white/5 last:border-0 text-slate-400 hover:text-cyan-400 transition-all"
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
      <style>{`
        .text-shadow-neon {
          text-shadow: 0 0 10px rgba(6, 182, 212, 0.8);
        }
      `}</style>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#020817] text-slate-400 mt-32 border-t border-cyan-500/10 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
      <div className="mx-auto max-w-7xl px-4 py-20 grid gap-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary font-display font-bold text-slate-950 shadow-neon">GD</div>
            <div className="font-display font-bold text-xl text-white uppercase tracking-tight">Gyan Dhara</div>
          </div>
          <p className="text-sm leading-relaxed opacity-70 mb-8 italic border-l-2 border-cyan-500/20 pl-4">
            Architecting the future of tech education in Tohana. HKCL recognized computer training hub since 2025.
          </p>
          <div className="flex gap-4">
            <a href="https://instagram.com/gyandharainstitutetohana" target="_blank" rel="noreferrer" className="p-3 rounded-lg glass-panel hover:border-cyan-500/50 transition-all duration-500 group">
              <Instagram className="h-5 w-5 group-hover:text-cyan-400" />
            </a>
            <a href="https://facebook.com/gyandharainstitutetohana" target="_blank" rel="noreferrer" className="p-3 rounded-lg glass-panel hover:border-emerald-500/50 transition-all duration-500 group">
              <Facebook className="h-5 w-5 group-hover:text-emerald-400" />
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-display font-bold mb-8 text-cyan-400 uppercase tracking-[0.3em] text-[10px]">Active Nodes</h4>
          <ul className="space-y-4 text-xs font-bold uppercase tracking-[0.1em]">
            {nav.map((n) => (
              <li key={n.to}><Link to={n.to} className="hover:text-cyan-400 transition-colors flex items-center gap-2 group"><div className="w-1 h-1 bg-cyan-500/30 group-hover:bg-cyan-400 rounded-full transition-colors"></div>{n.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display font-bold mb-8 text-cyan-400 uppercase tracking-[0.3em] text-[10px]">Coordinates</h4>
          <ul className="space-y-6 text-sm opacity-80">
            <li className="flex gap-4"><MapPin className="h-5 w-5 mt-1 flex-none text-emerald-500" /> <span className="leading-relaxed">New Sabzi Mandi Road, near Bus Stand, Krishna Colony, Tohana, Haryana 125120</span></li>
            <li className="flex gap-4"><Phone className="h-5 w-5 mt-1 flex-none text-emerald-500" /> <span className="font-bold">81990-73036, 97051-06001</span></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-bold mb-8 text-cyan-400 uppercase tracking-[0.3em] text-[10px]">Operational Hours</h4>
          <p className="text-sm opacity-80 mb-8 border-l-2 border-emerald-500/20 pl-4">Mon – Sat: 09:00 – 17:00<br/>Sunday: Offline</p>
          <h4 className="font-display font-bold mb-4 text-cyan-400 uppercase tracking-[0.3em] text-[10px]">Legal Protocol</h4>
          <ul className="space-y-2 text-xs font-bold uppercase tracking-[0.1em]">
            <li><a href="#" className="hover:text-cyan-400 transition-colors">Privacy_Policy.exe</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition-colors">Terms_of_Service.sys</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5 bg-black/40">
        <div className="mx-auto max-w-7xl px-4 py-8 text-[9px] uppercase tracking-[0.4em] opacity-40 text-center font-bold">
          © 2025 Gyan Dhara Institute Tohana. All Systems Operational.
        </div>
      </div>
    </footer>
  );
}

export function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP}?text=Hi%20Gyan%20Dhara%20Institute,%20I%20want%20course%20info.`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-emerald-500 text-white px-5 py-3 shadow-[0_0_20px_rgba(16,185,129,0.5)] hover:scale-110 transition-all duration-300"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline text-sm font-bold tracking-wide">WHATSAPP</span>
    </a>
  );
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col selection:bg-cyan-500/30">
      <Header />
      <main className="flex-1 relative z-10">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
