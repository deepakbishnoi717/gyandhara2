import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";
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
      <section className="bg-gradient-hero text-primary-foreground py-14">
        <div className="mx-auto max-w-7xl px-4">
          <Badge className="bg-accent text-accent-foreground mb-3">Get in Touch</Badge>
          <h1 className="font-display text-4xl sm:text-5xl font-bold">We'd love to hear from you</h1>
          <p className="mt-3 opacity-90 max-w-2xl">Visit, call or message us — our team is happy to answer any questions.</p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-14 grid lg:grid-cols-3 gap-6">
        {[
          { icon: Phone, title: "Phone", lines: ["81990-73036", "97051-06001", "81686-33782"] },
          { icon: Mail, title: "Email", lines: ["info@gyandharatohana.com"] },
          { icon: Clock, title: "Hours", lines: ["Mon – Sat: 9 AM – 5 PM", "Sunday: Closed"] },
        ].map((b) => (
          <Card key={b.title} className="shadow-soft border-border">
            <CardContent className="p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-primary text-primary-foreground mb-3"><b.icon className="h-5 w-5" /></div>
              <h3 className="font-display font-bold mb-2">{b.title}</h3>
              {b.lines.map((l) => <div key={l} className="text-sm text-muted-foreground">{l}</div>)}
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-14">
        <Card className="shadow-soft border-border overflow-hidden">
          <iframe
            src="https://maps.google.com/maps?q=Gyan+Dhara+Institute+Tohana+Sabzi+Mandi+Road&output=embed"
            className="w-full h-80 border-0"
            loading="lazy"
            title="Gyan Dhara Institute Tohana"
          />
          <CardContent className="p-6">
            <h3 className="font-display font-bold mb-2 flex items-center gap-2"><MapPin className="h-5 w-5 text-primary" />Gyan Dhara Institute Tohana</h3>
            <p className="text-sm text-muted-foreground">New Sabzi Mandi Road, near Bus Stand, Krishna Colony, Tohana, Haryana 125120</p>
          </CardContent>
        </Card>
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-20 grid lg:grid-cols-2 gap-10 items-start">
        <Card className="shadow-elegant border-border">
          <CardContent className="p-7">
            <h2 className="font-display text-2xl font-bold mb-4">Send us a message</h2>
            <form onSubmit={submit} className="grid gap-4">
              <div className="grid gap-1.5"><Label>Name *</Label><Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required /></div>
              <div className="grid gap-1.5"><Label>Phone *</Label><Input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required /></div>
              <div className="grid gap-1.5"><Label>Email</Label><Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} /></div>
              <div className="grid gap-1.5"><Label>Message *</Label><Textarea rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required /></div>
              <Button type="submit" size="lg" disabled={loading} className="bg-gradient-primary hover:opacity-95">{loading ? "Sending..." : "Send Message"}</Button>
            </form>
          </CardContent>
        </Card>
        <div className="space-y-6">
          <Card className="shadow-soft border-border bg-gradient-primary text-primary-foreground">
            <CardContent className="p-7">
              <h3 className="font-display text-xl font-bold mb-3">Follow Us</h3>
              <p className="text-sm opacity-90 mb-4">Stay updated with new batches, student success stories and tips.</p>
              <div className="flex gap-3">
                <a href="https://instagram.com/gyandharainstitutetohana" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-md bg-white/15 hover:bg-white/25 transition text-sm">
                  <Instagram className="h-4 w-4" /> @gyandharainstitutetohana
                </a>
                <a href="https://facebook.com/gyandharainstitutetohana" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-md bg-white/15 hover:bg-white/25 transition text-sm">
                  <Facebook className="h-4 w-4" /> Facebook
                </a>
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-soft border-border">
            <CardContent className="p-7">
              <h3 className="font-display text-xl font-bold mb-2">Quick Call</h3>
              <p className="text-sm text-muted-foreground mb-4">Prefer to talk? Reach us directly.</p>
              <div className="grid gap-2">
                <Button asChild variant="outline" className="justify-start"><a href="tel:+918199073036"><Phone className="mr-2 h-4 w-4" /> 81990-73036</a></Button>
                <Button asChild variant="outline" className="justify-start"><a href="tel:+919705106001"><Phone className="mr-2 h-4 w-4" /> 97051-06001</a></Button>
                <Button asChild variant="outline" className="justify-start"><a href="tel:+918168633782"><Phone className="mr-2 h-4 w-4" /> 81686-33782</a></Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
