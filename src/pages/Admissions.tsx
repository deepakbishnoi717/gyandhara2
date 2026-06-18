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
      
      <section className="relative py-20 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 50% 50%, #10b981 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
        <div className="mx-auto max-w-7xl px-4 relative z-10">
          <Badge className="bg-emerald-500 text-slate-950 font-bold mb-4 uppercase tracking-widest text-[10px]">Access Granted</Badge>
          <h1 className="font-display text-4xl sm:text-6xl font-bold text-white">Initialize Your <br /><span className="text-cyan-400">Digital Protocol</span></h1>
          <p className="mt-4 text-slate-400 max-w-2xl text-lg">Online enrollment is active. Join the next-gen learning environment in Tohana.</p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-16 grid lg:grid-cols-5 gap-12">
        <div className="lg:col-span-3 glass-panel p-8 rounded-2xl relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyan-500 to-emerald-500"></div>
          <h2 className="font-display text-2xl font-bold mb-2 text-white">Enrollment Form</h2>
          <p className="text-sm text-slate-500 mb-8 font-bold uppercase tracking-widest">Submit your credentials below</p>
          
          <form onSubmit={submit} className="grid gap-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="grid gap-2">
                <Label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-slate-400">Full Name *</Label>
                <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="John Doe" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone" className="text-xs font-bold uppercase tracking-widest text-slate-400">Secure Line *</Label>
                <Input id="phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="10-digit mobile" required />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-slate-400">Digital Mail</Label>
                <Input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" />
              </div>
              <div className="grid gap-2">
                <Label className="text-xs font-bold uppercase tracking-widest text-slate-400">Neural Node Interest *</Label>
                <Select value={form.course} onValueChange={(v) => setForm({ ...form, course: v })}>
                  <SelectTrigger className="bg-slate-900/50 border-slate-800 text-slate-300"><SelectValue placeholder="Select Module" /></SelectTrigger>
                  <SelectContent className="bg-slate-900 border-slate-800 text-slate-300">
                    {courses.map((c) => <SelectItem key={c.slug} value={c.title} className="focus:bg-cyan-500 focus:text-slate-950">{c.title}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="address" className="text-xs font-bold uppercase tracking-widest text-slate-400">Physical Coordinates</Label>
              <Input id="address" value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} placeholder="Village / City, Tohana" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="msg" className="text-xs font-bold uppercase tracking-widest text-slate-400">Transmission Notes</Label>
              <Textarea id="msg" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Any specific requirements?" rows={4} />
            </div>
            <Button type="submit" disabled={loading} size="lg" className="bg-gradient-primary hover:opacity-90 text-slate-950 font-bold uppercase tracking-[0.2em] py-7 shadow-neon border-0 mt-4">
              {loading ? "Transmitting..." : "Execute Enrollment"}
            </Button>
          </form>
        </div>

        <div className="lg:col-span-2 space-y-8">
          <div className="glass-panel p-8 rounded-2xl border-white/5">
            <h3 className="font-display font-bold text-lg mb-6 text-cyan-400 uppercase tracking-widest">Fee Protocols</h3>
            <div className="space-y-4">
              {courses.slice(0, 6).map((c) => (
                <div key={c.slug} className="flex justify-between border-b border-white/5 pb-3 group">
                  <span className="text-sm text-slate-400 group-hover:text-white transition-colors">{c.title}</span>
                  <span className="font-bold text-emerald-400 text-sm">{c.fees}</span>
                </div>
              ))}
            </div>
            <p className="text-[10px] text-slate-500 mt-6 font-bold uppercase tracking-widest">* Multi-stage payment nodes available</p>
          </div>

          <div className="bg-gradient-to-br from-cyan-600 to-emerald-600 p-8 rounded-2xl shadow-neon group">
            <h3 className="font-display font-bold text-lg mb-4 text-slate-950 uppercase tracking-widest">Critical Cycles</h3>
            <ul className="space-y-4 text-sm font-bold text-slate-900">
              <li className="flex gap-3"><CheckCircle2 className="h-5 w-5 flex-none text-white/50" /> New batches: 01 of every month</li>
              <li className="flex gap-3"><CheckCircle2 className="h-5 w-5 flex-none text-white/50" /> HS-CIT Exam: Quarterly cycles</li>
              <li className="flex gap-3"><CheckCircle2 className="h-5 w-5 flex-none text-white/50" /> Deadline: 25th of month</li>
            </ul>
          </div>

          <div className="glass-panel p-8 rounded-2xl border-white/5 text-center group">
            <h3 className="font-display font-bold text-lg mb-2 text-white">Digital Brochure</h3>
            <p className="text-xs text-slate-500 mb-6 font-bold uppercase tracking-widest">System details & Curriculum</p>
            <Button variant="outline" className="w-full border-slate-800 text-slate-400 hover:text-cyan-400 hover:bg-cyan-500/10 py-6" onClick={() => toast.info("Encryption active. Brochure coming soon.")}>
              <Download className="mr-2 h-4 w-4" /> ACCESS DATA
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
