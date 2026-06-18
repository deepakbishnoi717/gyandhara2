import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { courses } from "@/lib/courses";
import { z } from "zod";
import { Download, CheckCircle2 } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(2, "Name required").max(100),
  phone: z.string().trim().regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile"),
  email: z.string().trim().email("Invalid email").max(255).optional().or(z.literal("")),
  course: z.string().min(1, "Select a course"),
  address: z.string().trim().max(300).optional().or(z.literal("")),
  message: z.string().trim().max(500).optional().or(z.literal("")),
});

const N8N_WEBHOOK = "https://deepaksihag.app.n8n.cloud/webhook/da4995f6-f1b5-421d-95b2-8451c28b622a";

export default function Admissions() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", course: "", address: "", message: "" });
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      toast.error(result.error.issues[0].message);
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(N8N_WEBHOOK, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=UTF-8" },
        body: JSON.stringify({ source: "admissions", submittedAt: new Date().toISOString(), ...form }),
      });
      if (!res.ok) throw new Error("Network");
      toast.success("Application submitted! We'll contact you shortly.");
      setForm({ name: "", phone: "", email: "", course: "", address: "", message: "" });
    } catch {
      toast.error("Submission failed. Please call 81990-73036.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <Helmet>
        <title>Admissions — Apply Online | Gyan Dhara Institute Tohana</title>
        <meta name="description" content="Apply online for HKCL certified computer courses at Gyan Dhara Institute Tohana." />
      </Helmet>
      
      <section className="relative py-24 bg-[#020817] overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 relative z-10">
          <Badge className="bg-emerald-500 text-slate-950 font-bold mb-6 uppercase tracking-[0.2em] text-[10px] py-1 px-3">Access Granted</Badge>
          <h1 className="font-display text-5xl sm:text-7xl font-bold text-white neon-heading">Initialize Your <br /><span className="neon-accent">Digital Protocol</span></h1>
          <p className="mt-6 text-slate-400 max-w-2xl text-xl border-l-2 border-cyan-500/30 pl-8 italic">Online enrollment is active. Join the next-gen learning environment in Tohana.</p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-20 grid lg:grid-cols-5 gap-16">
        <div className="lg:col-span-3 glass-panel p-10 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-cyan-500 to-emerald-500 shadow-neon"></div>
          <h2 className="font-display text-3xl font-bold mb-3 text-white">Enrollment Form</h2>
          <p className="text-[10px] text-slate-500 mb-12 font-bold uppercase tracking-[0.3em]">Submit your credentials to the mainframe</p>
          
          <form onSubmit={submit} className="grid gap-8">
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="grid gap-3 group">
                <Label htmlFor="name" className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 group-focus-within:text-cyan-400 transition-colors">Full Name *</Label>
                <input 
                  id="name" 
                  className="neon-input" 
                  value={form.name} 
                  onChange={(e) => setForm({ ...form, name: e.target.value })} 
                  placeholder="John Doe" 
                  required 
                />
              </div>
              <div className="grid gap-3 group">
                <Label htmlFor="phone" className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 group-focus-within:text-cyan-400 transition-colors">Secure Line *</Label>
                <input 
                  id="phone" 
                  className="neon-input" 
                  value={form.phone} 
                  onChange={(e) => setForm({ ...form, phone: e.target.value })} 
                  placeholder="10-digit mobile" 
                  required 
                />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="grid gap-3 group">
                <Label htmlFor="email" className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 group-focus-within:text-cyan-400 transition-colors">Digital Mail</Label>
                <input 
                  id="email" 
                  type="email" 
                  className="neon-input" 
                  value={form.email} 
                  onChange={(e) => setForm({ ...form, email: e.target.value })} 
                  placeholder="you@example.com" 
                />
              </div>
              <div className="grid gap-3 group">
                <Label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 group-focus-within:text-cyan-400 transition-colors">Neural Node Interest *</Label>
                <Select value={form.course} onValueChange={(v) => setForm({ ...form, course: v })}>
                  <SelectTrigger className="neon-input border-0 h-[48px] bg-slate-900/50">
                    <SelectValue placeholder="Select Module" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-900 border-cyan-500/20 text-slate-300">
                    {courses.map((c) => <SelectItem key={c.slug} value={c.title} className="focus:bg-cyan-500 focus:text-slate-950">{c.title}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid gap-3 group">
              <Label htmlFor="address" className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 group-focus-within:text-cyan-400 transition-colors">Physical Coordinates</Label>
              <input 
                id="address" 
                className="neon-input" 
                value={form.address} 
                onChange={(e) => setForm({ ...form, address: e.target.value })} 
                placeholder="Village / City, Tohana" 
              />
            </div>
            <div className="grid gap-3 group">
              <Label htmlFor="msg" className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 group-focus-within:text-cyan-400 transition-colors">Transmission Notes</Label>
              <textarea 
                id="msg" 
                className="neon-input min-h-[120px]" 
                value={form.message} 
                onChange={(e) => setForm({ ...form, message: e.target.value })} 
                placeholder="Any specific requirements?" 
              />
            </div>
            <button type="submit" disabled={loading} className="btn-primary py-5 mt-6 uppercase tracking-[0.3em] text-xs">
              {loading ? "Transmitting..." : "Execute Enrollment Protocol"}
            </button>
          </form>
        </div>

        <div className="lg:col-span-2 space-y-12">
          <div className="glass-panel p-10 border-white/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-cyan-500/10 transition-colors"></div>
            <h3 className="font-display font-bold text-xl mb-8 text-cyan-400 uppercase tracking-[0.2em]">Fee Protocols</h3>
            <div className="space-y-6">
              {courses.slice(0, 6).map((c) => (
                <div key={c.slug} className="flex justify-between border-b border-white/5 pb-4 group/item">
                  <span className="text-sm text-slate-400 group-hover/item:text-white transition-colors">{c.title}</span>
                  <span className="font-bold text-emerald-400 text-sm shadow-emerald-500/20">{c.fees}</span>
                </div>
              ))}
            </div>
            <p className="text-[10px] text-slate-500 mt-8 font-bold uppercase tracking-widest border-t border-white/5 pt-6 italic">* Multi-stage payment nodes available</p>
          </div>

          <div className="bg-gradient-to-br from-[#06b6d4] to-[#10b981] p-10 rounded-2xl shadow-neon group relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
            <h3 className="font-display font-bold text-xl mb-6 text-slate-950 uppercase tracking-[0.2em] relative z-10">Critical Cycles</h3>
            <ul className="space-y-5 text-sm font-bold text-slate-900 relative z-10">
              <li className="flex gap-4 items-center"><CheckCircle2 className="h-5 w-5 flex-none text-white/70 shadow-sm" /> New batches: 01 of every month</li>
              <li className="flex gap-4 items-center"><CheckCircle2 className="h-5 w-5 flex-none text-white/70 shadow-sm" /> HS-CIT Exam: Quarterly cycles</li>
              <li className="flex gap-4 items-center"><CheckCircle2 className="h-5 w-5 flex-none text-white/70 shadow-sm" /> Deadline: 25th of month</li>
            </ul>
          </div>

          <div className="glass-panel p-10 border-white/5 text-center group">
            <h3 className="font-display font-bold text-xl mb-3 text-white uppercase tracking-[0.1em]">Digital Brochure</h3>
            <p className="text-[10px] text-slate-500 mb-8 font-bold uppercase tracking-[0.2em]">System details & Curriculum</p>
            <button 
              className="w-full py-4 border border-slate-800 text-slate-400 font-bold uppercase tracking-widest text-[10px] hover:text-cyan-400 hover:bg-cyan-500/10 transition-all rounded-lg" 
              onClick={() => toast.info("Encryption active. Brochure coming soon.")}
            >
              <Download className="inline-block mr-3 h-4 w-4" /> ACCESS DATA
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
