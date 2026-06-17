import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
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
        <meta name="description" content="Apply online for HKCL certified computer courses at Gyan Dhara Institute Tohana. View fee structure, important dates and download brochure." />
        <meta property="og:title" content="Admissions Open — Gyan Dhara Institute Tohana" />
        <meta property="og:description" content="Online enrollment, fee structure and brochure download for Tohana's trusted computer institute." />
      </Helmet>
      <section className="bg-gradient-hero text-primary-foreground py-14">
        <div className="mx-auto max-w-7xl px-4">
          <Badge className="bg-accent text-accent-foreground mb-3">Admissions Open</Badge>
          <h1 className="font-display text-4xl sm:text-5xl font-bold">Begin your journey today</h1>
          <p className="mt-3 opacity-90 max-w-2xl">Apply online in less than a minute. We'll get back to you within 24 hours.</p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-14 grid lg:grid-cols-5 gap-10">
        <Card className="lg:col-span-3 shadow-elegant border-border">
          <CardContent className="p-7">
            <h2 className="font-display text-2xl font-bold mb-1">Enrollment Form</h2>
            <p className="text-sm text-muted-foreground mb-6">Fill in your details and our team will reach out.</p>
            <form onSubmit={submit} className="grid gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="grid gap-1.5">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" required />
                </div>
                <div className="grid gap-1.5">
                  <Label htmlFor="phone">Phone *</Label>
                  <Input id="phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="10-digit mobile" required />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="grid gap-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" />
                </div>
                <div className="grid gap-1.5">
                  <Label>Course Interest *</Label>
                  <Select value={form.course} onValueChange={(v) => setForm({ ...form, course: v })}>
                    <SelectTrigger><SelectValue placeholder="Select a course" /></SelectTrigger>
                    <SelectContent>
                      {courses.map((c) => <SelectItem key={c.slug} value={c.title}>{c.title}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="address">Address</Label>
                <Input id="address" value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} placeholder="Village / City, Tohana" />
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="msg">Message</Label>
                <Textarea id="msg" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Any questions?" rows={3} />
              </div>
              <Button type="submit" disabled={loading} size="lg" className="bg-gradient-primary hover:opacity-95">
                {loading ? "Submitting..." : "Submit Application"}
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="lg:col-span-2 space-y-6">
          <Card className="shadow-soft border-border">
            <CardContent className="p-6">
              <h3 className="font-display font-bold text-lg mb-3">Fee Structure</h3>
              <div className="space-y-2 text-sm">
                {courses.slice(0, 6).map((c) => (
                  <div key={c.slug} className="flex justify-between border-b border-border last:border-0 py-2">
                    <span className="text-muted-foreground">{c.title}</span>
                    <span className="font-semibold text-primary">{c.fees}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-3">* EMI & installment options available</p>
            </CardContent>
          </Card>

          <Card className="shadow-soft border-border bg-gradient-primary text-primary-foreground">
            <CardContent className="p-6">
              <h3 className="font-display font-bold text-lg mb-3">Important Dates</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-accent flex-none" /> New batch starts: 1st of every month</li>
                <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-accent flex-none" /> HS-CIT exam cycle: Quarterly</li>
                <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-accent flex-none" /> Admission deadline: 25th of every month</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-soft border-border">
            <CardContent className="p-6">
              <h3 className="font-display font-bold text-lg mb-2">Payment Options</h3>
              <p className="text-sm text-muted-foreground mb-4">Cash, UPI, Bank Transfer, EMI</p>
              <Button variant="outline" className="w-full" onClick={() => toast.info("Brochure coming soon. Call 81990-73036 for details.")}>
                <Download className="mr-2 h-4 w-4" /> Download Brochure
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
