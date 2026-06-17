import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Award, CheckCircle2, Clock, Phone, Star, Users } from "lucide-react";
import { courses } from "@/lib/courses";
import heroImg from "@/assets/hero-students.jpg";

export default function Home() {
  const featured = courses.filter((c) => c.featured);
  return (
    <Layout>
      <Helmet>
        <title>Gyan Dhara Institute Tohana — HKCL Certified Computer Courses</title>
        <meta name="description" content="Computer Sikhna Ab Hua Aasan! HKCL recognized computer training in Tohana — HS-CIT, web development, basic & advanced courses. Enroll today." />
        <meta name="keywords" content="computer course Tohana, HKCL Tohana, HS-CIT Tohana, web development Tohana, computer training Fatehabad, HTML CSS course Tohana" />
        <meta property="og:title" content="Gyan Dhara Institute Tohana — HKCL Certified Computer Courses" />
        <meta property="og:description" content="Government-recognised computer training in Tohana. HS-CIT, web development, basic to advanced. Enroll now." />
        <meta property="og:type" content="website" />
      </Helmet>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, white 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 lg:grid-cols-2 lg:py-24 items-center">
          <div>
            <Badge className="bg-accent text-accent-foreground hover:bg-accent mb-5">🏆 HKCL Government Recognized</Badge>
            <h1 className="font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Computer Sikhna Ab Hua <span className="text-accent">Aasan!</span>
            </h1>
            <p className="mt-5 text-lg opacity-90 max-w-xl">
              Basic se Advanced training — HS-CIT, web development, Tally & more. Tohana's trusted computer training institute, building careers since 2025.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-elegant">
                <Link to="/admissions">Enroll Now <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white/40 text-white hover:bg-white/10">
                <Link to="/courses">View Courses</Link>
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent" /> HKCL Certified</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent" /> Expert Faculty</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent" /> Located in Tohana</div>
            </div>
          </div>
          <div className="relative">
            <img src={heroImg} alt="Students learning computers at Gyan Dhara Institute Tohana" width={1536} height={1024} className="rounded-2xl shadow-elegant ring-1 ring-white/20" />
            <div className="absolute -bottom-5 -left-5 hidden sm:block bg-card text-card-foreground rounded-xl shadow-elegant px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground"><Users className="h-5 w-5" /></div>
                <div>
                  <div className="font-display font-bold text-xl">500+</div>
                  <div className="text-xs text-muted-foreground">Happy Students</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 py-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { n: "500+", l: "Students Trained" },
            { n: "31+", l: "Courses Offered" },
            { n: "5★", l: "Student Rated" },
            { n: "HKCL", l: "Govt. Recognised" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-display text-3xl font-bold text-primary">{s.n}</div>
              <div className="text-sm text-muted-foreground mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About brief */}
      <section className="mx-auto max-w-7xl px-4 py-16 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <Badge variant="secondary" className="mb-4">About Us</Badge>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">Building careers, one student at a time</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Gyan Dhara Institute is Tohana's trusted training center for government-certified computer education. We bring affordable, practical, industry-relevant courses to students, job seekers and professionals across Fatehabad district.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            "Behind every student's success, there are teachers who believe in them." Our experienced faculty mentors you from your first class to your first job.
          </p>
          <Button asChild variant="outline"><Link to="/about">Learn more about us <ArrowRight className="ml-1 h-4 w-4" /></Link></Button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { icon: Award, title: "HKCL Recognised", text: "Government-approved certifications" },
            { icon: Users, title: "Expert Faculty", text: "Industry-experienced trainers" },
            { icon: Clock, title: "Flexible Timing", text: "Morning, afternoon & evening batches" },
            { icon: Star, title: "Modern Lab", text: "Latest hardware & software" },
          ].map((f) => (
            <Card key={f.title} className="border-border shadow-soft">
              <CardContent className="p-5">
                <f.icon className="h-7 w-7 text-primary mb-3" />
                <div className="font-semibold mb-1">{f.title}</div>
                <div className="text-sm text-muted-foreground">{f.text}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Featured Courses */}
      <section className="bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <div>
              <Badge variant="secondary" className="mb-3">Popular Courses</Badge>
              <h2 className="font-display text-3xl sm:text-4xl font-bold">Featured Programs</h2>
            </div>
            <Button asChild variant="ghost"><Link to="/courses">View all courses <ArrowRight className="ml-1 h-4 w-4" /></Link></Button>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((c) => (
              <Card key={c.slug} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-border bg-card">
                <CardContent className="p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-primary text-primary-foreground mb-4 shadow-soft">
                    <c.icon className="h-6 w-6" />
                  </div>
                  <Badge variant="outline" className="mb-2 text-xs">{c.category}</Badge>
                  <h3 className="font-display font-semibold text-lg mb-2">{c.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{c.description}</p>
                  <div className="flex items-center justify-between text-sm mb-4">
                    <span className="text-muted-foreground"><Clock className="inline h-3 w-3 mr-1" /> {c.duration}</span>
                    <span className="font-semibold text-primary">{c.fees}</span>
                  </div>
                  <Button asChild className="w-full bg-gradient-primary hover:opacity-95" size="sm">
                    <Link to="/admissions">Enroll Now</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-3">Testimonials</Badge>
          <h2 className="font-display text-3xl sm:text-4xl font-bold">What our students say</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "Priya Sharma", course: "HS-CIT", text: "Bohot accha experience raha! Teachers ne har concept clearly samjhaya. Government certification mil gaya, ab job ke liye apply kar rahi hoon." },
            { name: "Rahul Verma", course: "Web Development", text: "Best institute in Tohana for web development. Practical training milti hai jo industry me actually use hoti hai. Highly recommended!" },
            { name: "Anjali Yadav", course: "Basic Computer", text: "Mujhe computer ka kuch nahi aata tha. Yahan se basic se start kiya aur ab MS Office, internet sab confidently use kar sakti hoon." },
          ].map((t) => (
            <Card key={t.name} className="border-border shadow-soft">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-3 text-accent">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">"{t.text}"</p>
                <div className="flex items-center gap-3 pt-3 border-t border-border">
                  <div className="h-10 w-10 rounded-full bg-gradient-primary text-primary-foreground flex items-center justify-center font-semibold">{t.name[0]}</div>
                  <div>
                    <div className="font-semibold text-sm">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.course}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-hero text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-14 flex flex-wrap items-center justify-between gap-6">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold">Ready to start your computer journey?</h2>
            <p className="opacity-90 mt-2">Call us today or visit our center in Tohana.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90"><Link to="/admissions">Enroll Now</Link></Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-white/40 text-white hover:bg-white/10">
              <a href="tel:+918199073036"><Phone className="mr-1 h-4 w-4" /> 81990-73036</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
