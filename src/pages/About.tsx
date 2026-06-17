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
      <section className="bg-gradient-hero text-primary-foreground py-16">
        <div className="mx-auto max-w-7xl px-4">
          <Badge className="bg-accent text-accent-foreground mb-4">About Us</Badge>
          <h1 className="font-display text-4xl sm:text-5xl font-bold max-w-3xl">Empowering Tohana with quality computer education</h1>
          <p className="mt-4 opacity-90 max-w-2xl">Since 2025, Gyan Dhara Institute has been Tohana's go-to destination for government-recognized computer training and career-ready IT courses.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 grid lg:grid-cols-3 gap-8">
        {[
          { icon: Target, title: "Our Mission", text: "To make quality computer education accessible and affordable for every student in Tohana and surrounding areas, bridging the digital divide one batch at a time." },
          { icon: Eye, title: "Our Vision", text: "To become Haryana's most trusted computer training institute, producing skilled IT professionals who contribute to India's digital economy." },
          { icon: Heart, title: "Our Values", text: "Behind every student's success, there are teachers who believe in them. We commit to mentorship, integrity, and student-first learning." },
        ].map((b) => (
          <Card key={b.title} className="shadow-soft border-border">
            <CardContent className="p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-primary text-primary-foreground mb-4"><b.icon className="h-6 w-6" /></div>
              <h3 className="font-display text-xl font-bold mb-2">{b.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{b.text}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="font-display text-3xl font-bold mb-2">Our Story</h2>
          <div className="grid lg:grid-cols-2 gap-10 mt-6">
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>Gyan Dhara Institute was founded in 2025 with a single purpose: to make computer education accessible for the students of Tohana and surrounding villages of Fatehabad district.</p>
              <p>What started as a small initiative quickly grew into a trusted name in computer training, thanks to our affordable fee structure, dedicated faculty, and recognition by the <strong className="text-foreground">Haryana Knowledge Corporation Limited (HKCL)</strong> — a Government of Haryana enterprise.</p>
              <p>Today, we operate from our center in Tohana, offering everything from basic computer literacy to advanced web development and government-certified HS-CIT programs.</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Award, n: "HKCL", l: "Government Recognised" },
                { icon: Users, n: "500+", l: "Students Trained" },
                { icon: MapPin, n: "Tohana", l: "Our Location" },
                { icon: Heart, n: "2025", l: "Founded" },
              ].map((s) => (
                <Card key={s.l} className="shadow-soft border-border">
                  <CardContent className="p-5 text-center">
                    <s.icon className="h-7 w-7 text-primary mx-auto mb-2" />
                    <div className="font-display text-2xl font-bold">{s.n}</div>
                    <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="font-display text-3xl font-bold mb-8">Our Center</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="shadow-soft border-border">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <MapPin className="h-6 w-6 text-primary flex-none mt-1" />
                <div>
                  <h3 className="font-display font-bold text-lg">Gyan Dhara Institute Tohana</h3>
                  <p className="text-sm text-muted-foreground mt-1">New Sabzi Mandi Road, near Bus Stand, Krishna Colony, Tohana, Haryana 125120</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="font-display text-3xl font-bold mb-2">Affiliations & Recognition</h2>
          <p className="text-muted-foreground mb-8">Trusted by the government, recognised by the community.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "HKCL", desc: "Haryana Knowledge Corporation Limited — Government of Haryana" },
              { title: "HS-CIT Authorized", desc: "Authorized HS-CIT, HS-CIT (A) and HS-CIT (A+) examination center" },
              { title: "ISO Compliant", desc: "Operating with quality standards in education delivery" },
            ].map((a) => (
              <Card key={a.title} className="shadow-soft border-border">
                <CardContent className="p-6">
                  <Award className="h-8 w-8 text-accent mb-3" />
                  <h3 className="font-display font-bold mb-1">{a.title}</h3>
                  <p className="text-sm text-muted-foreground">{a.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
