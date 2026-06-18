import { Link, NavLink } from "react-router-dom";
import { useState, type ReactNode } from "react";
import { Menu, X, Phone, MapPin, Mail, Instagram, Facebook, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import MatrixBackground from "./MatrixBackground";
import RippleEffect from "./RippleEffect";

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
    <header className="sticky top-0 z-50 w-full border-b border-cyan-500/20 bg-background/70 backdrop-blur-xl">
      <div className="bg-gradient-primary text-primary-foreground text-xs shadow-[0_0_15px_rgba(6,182,212,0.3)]">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-1.5">
          <span className="hidden sm:inline">📍 Tohana, Haryana · HKCL Recognized Institute</span>
          <div className="flex items-center gap-4">
            <a href="tel:+918199073036" className="flex items-center gap-1 hover:text-cyan-400 transition-colors">
              <Phone className="h-3 w-3" /> 81990-73036
            </a>
            <a href="mailto:info@gyandharatohana.com" className="hidden md:flex items-center gap-1 hover:text-cyan-400 transition-colors">
              <Mail className="h-3 w-3" /> info@gyandharatohana.com
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-primary text-primary-foreground font-display font-bold text-lg shadow-[0_0_20px_rgba(6,182,212,0.4)] group-hover:scale-110 transition-transform duration-300">
            GD
          </div>
          <div className="leading-tight">
            <div className="font-display text-base font-bold text-foreground sm:text-lg group-hover:text-cyan-400 transition-colors">Gyan Dhara Institute</div>
            <div className="text-[11px] text-muted-foreground group-hover:text-cyan-500/80 transition-colors">Tohana · HKCL Certified</div>
          </div>
        </Link>
        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.to === "/"}
              className={({ isActive }) =>
                `px-3 py-2 text-sm font-medium rounded-md transition-all duration-300 hover:text-cyan-400 hover:shadow-[0_0_10px_rgba(6,182,212,0.2)] ${
                  isActive ? "text-cyan-400 bg-cyan-500/10 shadow-[inset_0_0_10px_rgba(6,182,212,0.1)]" : "text-foreground/80"
                }`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden sm:inline-flex bg-gradient-primary hover:opacity-95 shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] transition-all duration-300">
            <Link to="/admissions">Enroll Now</Link>
          </Button>
          <button className="lg:hidden p-2 text-foreground/80 hover:text-cyan-400 transition-colors" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-cyan-500/20 bg-background/95 backdrop-blur-md">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-2">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-3 text-sm font-medium border-b border-cyan-500/10 last:border-0 hover:text-cyan-400 transition-colors"
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-black/90 text-background mt-20 border-t border-cyan-500/20">
      <div className="mx-auto max-w-7xl px-4 py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-primary font-display font-bold shadow-[0_0_15px_rgba(6,182,212,0.4)]">GD</div>
            <div className="font-display font-bold text-lg">Gyan Dhara Institute</div>
          </div>
          <p className="text-sm opacity-75 leading-relaxed">
            Computer Sikhna Ab Hua Aasan! HKCL recognized computer training & coaching center serving Tohana since 2025.
          </p>
          <div className="flex gap-3 mt-4">
            <a href="https://instagram.com/gyandharainstitutetohana" target="_blank" rel="noreferrer" className="p-2 rounded-md bg-white/5 border border-white/10 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="https://facebook.com/gyandharainstitutetohana" target="_blank" rel="noreferrer" className="p-2 rounded-md bg-white/5 border border-white/10 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300">
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-4 text-cyan-400">Quick Links</h4>
          <ul className="space-y-2 text-sm opacity-80">
            {nav.map((n) => (
              <li key={n.to}><Link to={n.to} className="hover:text-cyan-400 transition-colors">{n.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-4 text-cyan-400">Contact</h4>
          <ul className="space-y-3 text-sm opacity-80">
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 flex-none text-cyan-500" /> New Sabzi Mandi Road, near Bus Stand, Krishna Colony, Tohana, Haryana 125120</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 flex-none text-cyan-500" /> 81990-73036, 97051-06001, 81686-33782</li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-4 text-cyan-400">Hours</h4>
          <p className="text-sm opacity-80">Mon – Sat: 9:00 AM – 5:00 PM<br/>Sunday: Closed</p>
          <h4 className="font-display font-semibold mt-6 mb-2 text-cyan-400">Legal</h4>
          <ul className="space-y-1 text-sm opacity-80">
            <li><a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition-colors">Terms & Conditions</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 py-5 text-xs opacity-70 text-center">
          © 2025 Gyan Dhara Institute Tohana. All Rights Reserved.
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
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-emerald-500 text-white px-4 py-3 shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:scale-110 transition-all duration-300"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline text-sm font-medium">WhatsApp</span>
    </a>
  );
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col selection:bg-cyan-500/30">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
