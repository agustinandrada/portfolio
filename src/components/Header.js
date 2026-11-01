import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";

const links = [
  { to: "about", label: "Sobre mí" },
  { to: "work", label: "Experiencia" },
  { to: "projects", label: "Proyectos" },
  { to: "contact", label: "Contacto" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-cream/10 bg-cocoa-950/75 backdrop-blur-xl py-3"
          : "py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link
          to="home"
          smooth
          duration={600}
          className="group flex cursor-pointer items-center gap-3"
        >
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-topaz font-primary text-lg font-bold text-cocoa-950 transition-transform group-hover:-rotate-6">
            AA
          </span>
          <span className="hidden font-primary text-base font-semibold tracking-tight sm:block">
            Agustín Andrada
          </span>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-cream/10 bg-cocoa-800/50 p-1 backdrop-blur lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              spy
              smooth
              offset={-80}
              duration={600}
              activeClass="active"
              className="nav-link cursor-pointer rounded-full px-4 py-2 text-sm text-cream-muted transition hover:text-cream"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <a href="mailto:agustinandrada1@gmail.com" className="btn btn-primary btn-sm">
          Trabajemos juntos
        </a>
      </div>
    </header>
  );
};

export default Header;
