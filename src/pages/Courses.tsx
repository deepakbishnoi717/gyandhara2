import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Clock, GraduationCap, IndianRupee, Search, Star } from "lucide-react";
import { courses } from "@/lib/courses";
import { useState, useMemo } from "react";

export default function Courses() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const cats = useMemo(() => ["All", ...Array.from(new Set(courses.map((c) => c.category)))], []);
  const featured = useMemo(() => courses.filter((c) => c.featured), []);

  const filtered = useMemo(() => {
    return courses.filter((c) => {
      const matchesCategory = activeCategory === "All" || c.category === activeCategory;
      const matchesSearch =
        search.trim() === "" ||
        c.title.toLowerCase().includes(search.toLowerCase()) ||
        c.category.toLowerCase().includes(search.toLowerCase()) ||
        c.description.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  const grouped = useMemo(() => {
    const map = new Map<string, typeof courses>();
    for (const c of filtered) {
      if (!map.has(c.category)) map.set(c.category, []);
      map.get(c.category)!.push(c);
    }
    return map;
  }, [filtered]);

  return (
    <Layout>
      <Helmet>
        <title>Courses — Gyan Dhara Institute Tohana | HKCL & Skill Development</title>
        <meta name="description" content="Explore all 31+ skill development courses at Gyan Dhara Institute Tohana — HKCL certified, accounting, programming, design, web development & more." />
        <meta property="og:title" content="Courses at Gyan Dhara Institute Tohana" />
        <meta property="og:description" content="Government-certified HKCL courses, programming, design, accounting & computer training in Tohana." />
      </Helmet>
      <section className="bg-gradient-hero text-primary-foreground py-14">
        <div className="mx-auto max-w-7xl px-4">
          <Badge className="bg-accent text-accent-foreground mb-3">Our Courses</Badge>
          <h1 className="font-display text-4xl sm:text-5xl font-bold">31+ Professional Courses</h1>
          <p className="mt-3 opacity-90 max-w-2xl">
            Government-certified HKCL programs, programming, design, accounting & soft skills — all at Gyan Dhara Institute Tohana.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 pt-10 pb-4">
        <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search courses..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9 bg-background border-border"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {cats.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {activeCategory === "All" && search.trim() === "" && (
        <div className="mx-auto max-w-7xl px-4 pb-8">
          <h2 className="font-display text-2xl font-bold mb-4 flex items-center gap-2">
            <Star className="h-5 w-5 text-accent fill-accent" />
            Featured Courses
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((c) => (
              <CourseCard key={c.slug} course={c} />
            ))}
          </div>
        </div>
      )}

      <div className="mx-auto max-w-7xl px-4 py-8 space-y-12">
        {activeCategory === "All" && search.trim() === "" ? (
          Array.from(grouped.entries()).map(([cat, list]) => (
            <section key={cat}>
              <h2 className="font-display text-2xl sm:text-3xl font-bold mb-6 flex items-center gap-3">
                <span className="h-1 w-10 rounded-full bg-gradient-primary" />
                {cat}
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {list.map((c) => (
                  <CourseCard key={c.slug} course={c} />
                ))}
              </div>
            </section>
          ))
        ) : (
          <section>
            <h2 className="font-display text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="h-1 w-10 rounded-full bg-gradient-primary" />
              {activeCategory === "All" ? `Search Results (${filtered.length})` : activeCategory}
            </h2>
            {filtered.length === 0 ? (
              <p className="text-muted-foreground">No courses found. Try a different search term.</p>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((c) => (
                  <CourseCard key={c.slug} course={c} />
                ))}
              </div>
            )}
          </section>
        )}
      </div>
    </Layout>
  );
}

function CourseCard({ course: c }: { course: (typeof courses)[number] }) {
  return (
    <Card className="border-border hover:shadow-elegant hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
      <CardContent className="p-6 flex flex-col flex-1">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-primary text-primary-foreground mb-4 shadow-soft">
          <c.icon className="h-6 w-6" />
        </div>
        <h3 className="font-display font-semibold text-lg mb-2">{c.title}</h3>
        <p className="text-sm text-muted-foreground mb-4 flex-1">{c.description}</p>
        <div className="grid grid-cols-2 gap-2 text-xs mb-4">
          <div className="flex items-center gap-1 text-muted-foreground">
            <Clock className="h-3 w-3 shrink-0" /> {c.duration}
          </div>
          <div className="flex items-center gap-1 text-primary font-semibold">
            <IndianRupee className="h-3 w-3 shrink-0" /> {c.fees.replace("₹", "")}
          </div>
          <div className="col-span-2 flex items-center gap-1 text-muted-foreground">
            <GraduationCap className="h-3 w-3 shrink-0" /> Eligibility: {c.eligibility}
          </div>
        </div>
        <Button asChild className="w-full bg-gradient-primary hover:opacity-95" size="sm">
          <Link to="/admissions">Enroll Now</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
