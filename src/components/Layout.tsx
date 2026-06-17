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
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="bg-gradient-primary text-primary-foreground text-xs">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-1.5">
          <span className="hidden sm:inline">📍 Tohana, Haryana · HKCL Recognized Institute</span>
          <div className="flex items-center gap-4">
            <a href="tel:+918199073036" className="flex items-center gap-1 hover:opacity-90">
              <Phone className="h-3 w-3" /> 81990-73036
            </a>
            <a href="mailto:info@gyandharatohana.com" className="hidden md:flex items-center gap-1 hover:opacity-90">
              <Mail className="h-3 w-3" /> info@gyandharatohana.com
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-primary text-primary-foreground font-display font-bold text-lg shadow-soft">
            GD
          </div>
          <div className="leading-tight">
            <div className="font-display text-base font-bold text-foreground sm:text-lg">Gyan Dhara Institute</div>
            <div className="text-[11px] text-muted-foreground">Tohana · HKCL Certified</div>
          </div>
        </Link>
        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.to === "/"}
              className={({ isActive }) =>
                `px-3 py-2 text-sm font-medium rounded-md transition-colors hover:bg-secondary hover:text-primary ${
                  isActive ? "text-primary bg-secondary" : "text-foreground/80"
                }`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden sm:inline-flex bg-gradient-primary hover:opacity-95 shadow-soft">
            <Link to="/admissions">Enroll Now</Link>
          </Button>
          <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-2">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-3 text-sm font-medium border-b border-border/50 last:border-0"
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
    <footer className="bg-foreground text-background mt-20">
      <div className="mx-auto max-w-7xl px-4 py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-primary font-display font-bold">GD</div>
            <div className="font-display font-bold text-lg">Gyan Dhara Institute</div>
          </div>
          <p className="text-sm opacity-75 leading-relaxed">
            Computer Sikhna Ab Hua Aasan! HKCL recognized computer training & coaching center serving Tohana since 2025.
          </p>
          <div className="flex gap-3 mt-4">
            <a href="https://instagram.com/gyandharainstitutetohana" target="_blank" rel="noreferrer" className="p-2 rounded-md bg-background/10 hover:bg-background/20 transition">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="https://facebook.com/gyandharainstitutetohana" target="_blank" rel="noreferrer" className="p-2 rounded-md bg-background/10 hover:bg-background/20 transition">
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm opacity-80">
            {nav.map((n) => (
              <li key={n.to}><Link to={n.to} className="hover:opacity-100 hover:text-accent">{n.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm opacity-80">
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 flex-none text-accent" /> New Sabzi Mandi Road, near Bus Stand, Krishna Colony, Tohana, Haryana 125120</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 flex-none text-accent" /> 81990-73036, 97051-06001, 81686-33782</li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-4">Hours</h4>
          <p className="text-sm opacity-80">Mon – Sat: 9:00 AM – 5:00 PM<br/>Sunday: Closed</p>
          <h4 className="font-display font-semibold mt-6 mb-2">Legal</h4>
          <ul className="space-y-1 text-sm opacity-80">
            <li><a href="#" className="hover:text-accent">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-accent">Terms & Conditions</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-background/10">
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
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[oklch(0.7_0.18_145)] text-white px-4 py-3 shadow-elegant hover:scale-105 transition-transform"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline text-sm font-medium">WhatsApp</span>
    </a>
  );
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
