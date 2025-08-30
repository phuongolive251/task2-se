import { DemoResponse } from "@shared/api";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Index() {
  // optional demo fetch retained (no UI dependency)
  useEffect(() => {
    // prewarm server in the background (no UI coupling)
    fetch("/api/demo").catch(() => {});
  }, []);

  return (
    <div>
      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(60rem_60rem_at_70%_-10%,hsl(var(--accent)/0.12),transparent_50%),radial-gradient(40rem_40rem_at_-10%_20%,hsl(var(--primary)/0.12),transparent_50%)]" />
        <div className="container py-24 md:py-32 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-sm uppercase tracking-widest text-muted-foreground">Portfolio</p>
            <h1 className="mt-3 text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
              <span className="block">Tran Mai Phuong</span>
              <span className="mt-2 block bg-gradient-to-r from-primary to-fuchsia-500 bg-clip-text text-transparent">Designing and building modern web experiences</span>
            </h1>
            <p className="mt-6 text-muted-foreground text-lg">
              I craft responsive, accessible interfaces with clean code, thoughtful motion, and a focus on performance.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg" asChild>
                <a href="#projects">View projects</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#contact">Contact me</a>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className={cn(
              "mx-auto h-48 w-48 md:h-60 md:w-60 rounded-2xl",
              "bg-gradient-to-br from-primary/20 via-fuchsia-400/20 to-primary/10",
              "ring-1 ring-border shadow-[0_10px_50px_-15px_hsl(var(--ring)/0.25)]",
              "flex items-center justify-center"
            )}>
              <span className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-primary to-fuchsia-500 bg-clip-text text-transparent">TP</span>
            </div>
            <div className="absolute -right-6 -bottom-6 hidden md:block">
              <div className="rounded-xl border bg-card text-card-foreground p-4 shadow-sm">
                <p className="text-sm text-muted-foreground">Based in</p>
                <p className="font-medium">Vietnam</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="container py-20 md:py-28">
        <div className="grid md:grid-cols-3 gap-10 items-start">
          <h2 className="text-2xl md:text-3xl font-semibold">About me</h2>
          <div className="md:col-span-2 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I’m Tran Mai Phuong, a developer who blends engineering and design to deliver polished digital products. My work centers on clarity, consistency, and delightful interactions.
            </p>
            <p>
              I care deeply about craft: design systems, accessibility, performance budgets, and code quality. I work across the stack with a focus on React, TypeScript, Node.js, and modern tooling.
            </p>
            <ul className="grid sm:grid-cols-2 gap-2 !mt-6">
              <li className="rounded-md border p-3">React, TypeScript, Vite</li>
              <li className="rounded-md border p-3">TailwindCSS, Design Systems</li>
              <li className="rounded-md border p-3">Node.js, Express</li>
              <li className="rounded-md border p-3">Testing, CI/CD, Performance</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Experience / Services */}
      <section id="experience" className="border-t bg-muted/30">
        <div className="container py-20 md:py-28">
          <h2 className="text-2xl md:text-3xl font-semibold">What I do</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Frontend Engineering",
                desc: "Pixel-perfect UI, accessible components, and smooth animations with React + TypeScript.",
              },
              {
                title: "Product & Design",
                desc: "Design systems, prototyping, and thoughtful UX to align business and user needs.",
              },
              {
                title: "Performance & Quality",
                desc: "Measure, optimize, and ship fast sites with robust testing and CI/CD.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border bg-card p-6 shadow-sm">
                <h3 className="font-medium text-lg">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="container py-20 md:py-28">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl md:text-3xl font-semibold">Selected work</h2>
          <a href="#contact" className="text-sm text-primary hover:underline">Need something similar?</a>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Modern Portfolio",
              tag: "Design • Frontend",
              desc: "A fast, responsive portfolio with rich motion and dark mode.",
            },
            {
              title: "E‑commerce UI",
              tag: "Frontend • Systems",
              desc: "Component-driven storefront with cart, filters, and theming.",
            },
            {
              title: "Analytics Dashboard",
              tag: "Full‑stack",
              desc: "Real-time charts, role-based access, and crisp data viz.",
            },
          ].map((p) => (
            <article key={p.title} className="group rounded-2xl border bg-card text-card-foreground overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-40 bg-gradient-to-br from-primary/15 via-fuchsia-400/15 to-primary/10" />
              <div className="p-5">
                <p className="text-xs uppercase tracking-wide text-muted-foreground">{p.tag}</p>
                <h3 className="mt-1 font-semibold text-lg">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                <div className="mt-4">
                  <Button variant="ghost" size="sm">Details</Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t bg-muted/30">
        <div className="container py-20 md:py-28 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">Let’s work together</h2>
            <p className="mt-4 text-muted-foreground">
              Have a project in mind or just want to say hello? I’d love to hear from you.
            </p>
          </div>
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Thanks for reaching out! I'll get back to you soon."); }}>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1">Name</label>
                <input required name="name" className="w-full rounded-md border bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-ring" />
              </div>
              <div>
                <label className="block text-sm mb-1">Email</label>
                <input required type="email" name="email" className="w-full rounded-md border bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-ring" />
              </div>
            </div>
            <div>
              <label className="block text-sm mb-1">Message</label>
              <textarea required name="message" rows={5} className="w-full rounded-md border bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-ring" />
            </div>
            <Button type="submit" size="lg">Send message</Button>
          </form>
        </div>
      </section>
    </div>
  );
}
