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
      <section className="bg-[#020817] text-white py-24 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 relative z-10">
          <Badge className="bg-cyan-500 text-slate-950 font-bold mb-6 uppercase tracking-[0.2em] text-[10px] py-1 px-3">Active Modules</Badge>
          <h1 className="font-display text-5xl sm:text-7xl font-bold max-w-4xl neon-heading leading-tight">31+ Professional <span className="neon-accent">Neural Nodes</span></h1>
          <p className="mt-8 text-slate-400 max-w-2xl text-xl border-l-2 border-cyan-500/30 pl-8 italic">
            Government-certified HKCL programs, programming, design, accounting & soft skills — all at Gyan Dhara Institute Tohana.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8 items-stretch lg:items-center justify-between glass-panel p-6">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
            <input
              placeholder="Search courses..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="neon-input pl-12 w-full h-12 bg-slate-900/50"
            />
          </div>
          <div className="flex gap-3 flex-wrap">
            {cats.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-lg text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-500 border ${
                  activeCategory === cat
                    ? "bg-cyan-500 text-slate-950 border-cyan-400 shadow-neon"
                    : "text-slate-400 border-white/5 hover:border-cyan-500/50 hover:bg-white/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {activeCategory === "All" && search.trim() === "" && (
        <div className="mx-auto max-w-7xl px-4 pb-16">
          <h2 className="font-display text-2xl font-bold mb-10 text-white flex items-center gap-4 uppercase tracking-[0.2em]">
            <Star className="h-6 w-6 text-cyan-400 shadow-neon animate-pulse" />
            Featured Protocols
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featured.map((c) => (
              <CourseCard key={c.slug} course={c} />
            ))}
          </div>
        </div>
      )}

      <div className="mx-auto max-w-7xl px-4 py-16 space-y-24">
        {activeCategory === "All" && search.trim() === "" ? (
          Array.from(grouped.entries()).map(([cat, list]) => (
            <section key={cat}>
              <h2 className="font-display text-2xl sm:text-4xl font-bold mb-10 text-white flex items-center gap-4 uppercase tracking-tight">
                <span className="h-0.5 w-12 bg-gradient-to-r from-cyan-500 to-transparent" />
                {cat}
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {list.map((c) => (
                  <CourseCard key={c.slug} course={c} />
                ))}
              </div>
            </section>
          ))
        ) : (
          <section>
            <h2 className="font-display text-2xl font-bold mb-10 text-white flex items-center gap-4 uppercase tracking-tight">
              <span className="h-0.5 w-12 bg-gradient-to-r from-cyan-500 to-transparent" />
              {activeCategory === "All" ? `Search Results (${filtered.length})` : activeCategory}
            </h2>
            {filtered.length === 0 ? (
              <p className="text-slate-500 italic text-lg border-l-2 border-slate-800 pl-6">No courses found in the mainframe. Try a different search term.</p>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
    <div className="course-card p-10 group h-full flex flex-col">
      <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-primary text-slate-950 mb-8 shadow-neon group-hover:scale-110 transition-transform duration-500">
        <c.icon className="h-8 w-8" />
      </div>
      <Badge variant="outline" className="mb-4 text-[10px] border-slate-700 text-slate-500 uppercase tracking-[0.2em] font-bold py-0.5 px-2 w-fit">{c.category}</Badge>
      <h3 className="font-display font-bold text-2xl mb-4 text-white group-hover:text-cyan-400 transition-colors">{c.title}</h3>
      <p className="text-slate-400 mb-8 line-clamp-2 leading-relaxed text-sm flex-1">{c.description}</p>
      <div className="grid grid-cols-2 gap-4 text-[11px] mb-8 font-bold uppercase tracking-[0.2em] text-slate-500">
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4 text-emerald-500 shrink-0" /> {c.duration}
        </div>
        <div className="flex items-center gap-2 text-cyan-400">
          <IndianRupee className="h-4 w-4 shrink-0" /> {c.fees.replace("₹", "")}
        </div>
        <div className="col-span-2 flex items-center gap-2 border-t border-white/5 pt-4">
          <GraduationCap className="h-4 w-4 text-emerald-500 shrink-0" /> <span className="text-[9px]">Eligibility: {c.eligibility}</span>
        </div>
      </div>
      <Link to="/admissions" className="w-full flex items-center justify-center py-4 bg-white/5 hover:bg-cyan-500 hover:text-slate-950 border border-white/10 rounded-lg transition-all duration-500 font-bold uppercase tracking-widest text-xs">
        Initialize
      </Link>
    </div>
  );
}
