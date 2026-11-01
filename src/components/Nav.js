import React from "react";
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsBriefcase, BsChatSquare, BsCodeSlash } from "react-icons/bs";
import { Link } from "react-scroll";

const items = [
  { to: "home", icon: <BiHomeAlt />, label: "Inicio" },
  { to: "about", icon: <BiUser />, label: "Sobre mí" },
  { to: "work", icon: <BsBriefcase />, label: "Experiencia" },
  { to: "projects", icon: <BsCodeSlash />, label: "Proyectos" },
  { to: "contact", icon: <BsChatSquare />, label: "Contacto" },
];

// Barra inferior flotante (solo mobile / tablet)
const Nav = () => {
  return (
    <nav className="fixed inset-x-0 bottom-4 z-50 lg:hidden">
      <div className="container mx-auto">
        <div className="mx-auto flex h-16 max-w-[360px] items-center justify-between rounded-full border border-cream/10 bg-cocoa-900/80 px-2 text-xl text-cream-muted shadow-2xl backdrop-blur-xl">
          {items.map((it) => (
            <Link
              key={it.to}
              to={it.to}
              aria-label={it.label}
              spy
              smooth
              offset={-80}
              duration={600}
              activeClass="active"
              className="nav-link flex h-12 w-12 cursor-pointer items-center justify-center rounded-full transition"
            >
              {it.icon}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
