import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, ArrowRight } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(2).max(100),
  phone: z.string().trim().regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile"),
  email: z.string().trim().email().max(255).optional().or(z.literal("")),
  message: z.string().trim().min(5).max(1000),
});

const N8N_WEBHOOK = "https://deepaksihag.app.n8n.cloud/webhook/da4995f6-f1b5-421d-95b2-8451c28b622a";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse(form);
    if (!r.success) return toast.error(r.error.issues[0].message);
    setLoading(true);
    try {
      await fetch(N8N_WEBHOOK, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=UTF-8" },
        body: JSON.stringify({ source: "contact", submittedAt: new Date().toISOString(), ...form }),
      });
      toast.success("Message sent! We'll get back to you soon.");
      setForm({ name: "", phone: "", email: "", message: "" });
    } catch {
      toast.error("Couldn't send. Please try again or call us.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <Helmet>
        <title>Contact Us — Gyan Dhara Institute Tohana</title>
        <meta name="description" content="Visit Gyan Dhara Institute in Tohana, Haryana — New Sabzi Mandi Road. Call 81990-73036." />
        <meta property="og:title" content="Contact Gyan Dhara Institute Tohana" />
        <meta property="og:description" content="Address, phone, map and contact form for Tohana's trusted computer institute." />
      </Helmet>
      <section className="bg-[#020817] text-white py-24 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 relative z-10">
          <Badge className="bg-cyan-500 text-slate-950 font-bold mb-6 uppercase tracking-[0.2em] text-[10px] py-1 px-3">Sync Protocol</Badge>
          <h1 className="font-display text-5xl sm:text-7xl font-bold max-w-4xl neon-heading leading-tight">We'd love to <span className="neon-accent">hear from you</span></h1>
          <p className="mt-8 text-slate-400 max-w-2xl text-xl border-l-2 border-cyan-500/30 pl-8 italic">Visit, call or message us — our team is happy to answer any questions.</p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-20 grid lg:grid-cols-3 gap-8">
        {[
          { icon: Phone, title: "Phone", lines: ["81990-73036", "97051-06001", "81686-33782"] },
          { icon: Mail, title: "Email", lines: ["info@gyandharatohana.com"] },
          { icon: Clock, title: "Hours", lines: ["Mon – Sat: 9 AM – 5 PM", "Sunday: Closed"] },
        ].map((b) => (
          <div key={b.title} className="glass-panel p-10 group relative overflow-hidden">
             <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
               <b.icon className="h-24 w-24" />
             </div>
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-primary text-slate-950 mb-8 shadow-neon group-hover:scale-110 transition-transform duration-500"><b.icon className="h-7 w-7" /></div>
            <h3 className="font-display font-bold text-2xl mb-4 text-white uppercase tracking-tight">{b.title}</h3>
            {b.lines.map((l) => <div key={l} className="text-sm text-slate-400 font-bold tracking-wide mb-1">{l}</div>)}
          </div>
        ))}
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-20">
        <div className="glass-panel overflow-hidden group">
          <iframe
            src="https://maps.google.com/maps?q=Gyan+Dhara+Institute+Tohana+Sabzi+Mandi+Road&output=embed"
            className="w-full h-96 border-0 grayscale group-hover:grayscale-0 transition-all duration-700 opacity-60 group-hover:opacity-90"
            loading="lazy"
            title="Gyan Dhara Institute Tohana"
          />
          <div className="p-10 border-t border-white/5">
            <h3 className="font-display font-bold text-2xl flex items-center gap-4 text-white uppercase tracking-tight"><MapPin className="h-6 w-6 text-cyan-500" />Gyan Dhara Institute Tohana</h3>
            <p className="text-lg text-slate-400 mt-4 leading-relaxed italic border-l-2 border-cyan-500/20 pl-6">New Sabzi Mandi Road, near Bus Stand, Krishna Colony, Tohana, Haryana 125120</p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-32 grid lg:grid-cols-2 gap-16 items-start">
        <div className="glass-panel p-10 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-cyan-500 to-emerald-500 shadow-neon"></div>
          <h2 className="font-display text-3xl font-bold mb-3 text-white">Send us a message</h2>
          <p className="text-[10px] text-slate-500 mb-10 font-bold uppercase tracking-[0.3em]">Direct transmission to support</p>
          <form onSubmit={submit} className="grid gap-6">
            <div className="grid gap-2.5 group">
              <Label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 group-focus-within:text-cyan-400 transition-colors">Name *</Label>
              <input className="neon-input" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
            </div>
            <div className="grid gap-2.5 group">
              <Label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 group-focus-within:text-cyan-400 transition-colors">Phone *</Label>
              <input className="neon-input" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required />
            </div>
            <div className="grid gap-2.5 group">
              <Label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 group-focus-within:text-cyan-400 transition-colors">Email</Label>
              <input type="email" className="neon-input" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            </div>
            <div className="grid gap-2.5 group">
              <Label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 group-focus-within:text-cyan-400 transition-colors">Message *</Label>
              <textarea className="neon-input min-h-[150px]" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required />
            </div>
            <button type="submit" disabled={loading} className="btn-primary py-5 mt-6 uppercase tracking-[0.3em] text-xs">
              {loading ? "Transmitting..." : "Send Secure Message"}
            </button>
          </form>
        </div>
        <div className="space-y-10">
          <div className="bg-gradient-to-br from-[#06b6d4] to-[#10b981] p-10 rounded-2xl shadow-neon group relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
            <h3 className="font-display font-bold text-2xl mb-4 text-slate-950 uppercase tracking-[0.2em] relative z-10">Follow Us</h3>
            <p className="text-slate-950 font-bold opacity-80 mb-8 relative z-10">Stay updated with new batches, student success stories and tips.</p>
            <div className="flex flex-col gap-4 relative z-10">
              <a href="https://instagram.com/gyandharainstitutetohana" target="_blank" rel="noreferrer" className="flex items-center gap-4 px-6 py-4 rounded-xl bg-black/20 hover:bg-black/40 transition-all text-sm font-bold text-slate-950 border border-white/10 uppercase tracking-widest">
                <Instagram className="h-5 w-5" /> @gyandharainstitutetohana
              </a>
              <a href="https://facebook.com/gyandharainstitutetohana" target="_blank" rel="noreferrer" className="flex items-center gap-4 px-6 py-4 rounded-xl bg-black/20 hover:bg-black/40 transition-all text-sm font-bold text-slate-950 border border-white/10 uppercase tracking-widest">
                <Facebook className="h-5 w-5" /> Facebook Protocol
              </a>
            </div>
          </div>
          <div className="glass-panel p-10 border-white/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-cyan-500/10 transition-colors"></div>
            <h3 className="font-display font-bold text-xl mb-4 text-white uppercase tracking-[0.2em]">Quick Call</h3>
            <p className="text-slate-400 mb-8 italic border-l-2 border-cyan-500/20 pl-6">Prefer to talk? Reach us directly via secure line.</p>
            <div className="grid gap-4">
              <a href="tel:+918199073036" className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/5 hover:border-cyan-500/50 transition-all group/item">
                 <div className="flex items-center gap-3">
                   <Phone className="h-4 w-4 text-cyan-500" />
                   <span className="text-sm font-bold text-slate-300">81990-73036</span>
                 </div>
                 <ArrowRight className="h-4 w-4 text-slate-600 group-hover/item:translate-x-1 transition-transform" />
              </a>
              <a href="tel:+919705106001" className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/5 hover:border-cyan-500/50 transition-all group/item">
                 <div className="flex items-center gap-3">
                   <Phone className="h-4 w-4 text-cyan-500" />
                   <span className="text-sm font-bold text-slate-300">97051-06001</span>
                 </div>
                 <ArrowRight className="h-4 w-4 text-slate-600 group-hover/item:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
