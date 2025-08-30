import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const nav = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  return (
    <header className="sticky top-0 z-50 border-b bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="font-bold tracking-tight text-xl">
          <span className="bg-gradient-to-r from-primary to-fuchsia-500 bg-clip-text text-transparent">
            Tran Mai Phuong
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {nav.map((n) => (
            <a
              key={n.href}
              href={isHome ? n.href : `/${n.href}`}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild variant="outline" size="sm">
            <a href={isHome ? "#contact" : "/#contact"}>Get in touch</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
