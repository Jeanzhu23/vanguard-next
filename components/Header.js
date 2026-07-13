"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV, WHOOSH } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const path = usePathname();

  return (
    <header className="site-header">
      <div className="wrap">
        <Link href="/" className="brand" aria-label="Vanguard Golf Club home">
          <img src="/img/logo.png" alt="Vanguard Golf Club" />
        </Link>

        <nav className="nav-links">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className={path === n.href ? "active" : ""}>
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="header-cta">
          <a href={WHOOSH.login} target="_blank" rel="noopener" className="btn btn-outline">
            Member Login
          </a>
          <a href={WHOOSH.book} target="_blank" rel="noopener" className="btn btn-primary">
            Book Now
          </a>
          <button
            className="nav-toggle"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      <nav className={`mobile-nav${open ? " open" : ""}`}>
        {NAV.map((n) => (
          <Link key={n.href} href={n.href} onClick={() => setOpen(false)}>
            {n.label}
          </Link>
        ))}
        <a href={WHOOSH.book} target="_blank" rel="noopener">Book Now →</a>
      </nav>
    </header>
  );
}
