import React from "react";
import { motion } from "framer-motion";
import { BsArrowUpRight } from "react-icons/bs";
import { fadeIn } from "../variants";

import ImgPuerto from "../assets/puerto.png";
import ImgLiga from "../assets/liga.png";
import ImgForo from "../assets/foro.png";
import ImgIngreso from "../assets/ingreso.png";
import ImgPortal from "../assets/portal.png";

// Si un proyecto no tiene `img`, se muestra una portada generada con el dominio.
const projects = [
  {
    name: "iBica — Home Banking",
    tag: "Banca digital",
    link: "https://ibica.bancobica.com.ar",
    description:
      "Nuevo home banking de Banco Bica, desarrollado en un equipo de 8 programadores. Incluye integraciones con APIs de terceros y una versión exclusiva para mutuales.",
    tech: ["C#", "React", "TypeScript", "SQL Server"],
    featured: true,
  },
  {
    name: "Banco Bica",
    tag: "Sitio institucional",
    link: "https://bancobica.com.ar",
    description:
      "Sitio institucional del banco, parte del ecosistema de aplicaciones y servicios que mantengo y doy soporte.",
    tech: ["C#", "JavaScript", "SQL Server"],
  },
  {
    name: "Puerto Gestión",
    tag: "Sistema de gestión",
    img: ImgPuerto,
    link: "https://puertogestion.com",
    description:
      "Plataforma de gestión con acceso privado para el rubro inmobiliario: usuarios, propiedades y operaciones.",
    tech: ["Laravel", "PHP", "MySQL"],
  },
  {
    name: "Liga Argentina",
    tag: "Deportes",
    img: ImgLiga,
    link: "https://www.ligargentina.com.ar",
    description:
      "Sitio de la Liga Argentina de Fútbol Infantil y Juvenil de Buenos Aires: torneos, posiciones, fixture, noticias y Tribunal de Disciplina.",
    tech: ["Laravel", "PHP", "MySQL"],
  },
  {
    name: "Trade y Retail",
    tag: "Medio periodístico",
    link: "https://tradeyretail.com",
    description:
      "Portal de noticias, informes y videos sobre el canal moderno, el retail y la industria de consumo masivo.",
    tech: ["PHP", "MySQL"],
  },
  {
    name: "Foro Cadenas Regionales",
    tag: "Eventos",
    img: ImgForo,
    link: "https://forocadenasregionales.com",
    extraLinks: [{ label: ".com.ar", href: "https://forocadenasregionales.com.ar" }],
    description:
      "Sitio de la convención de negocios que conecta a las cadenas regionales de todo el país con la industria proveedora.",
    tech: ["PHP", "MySQL"],
  },
  {
    name: "Portal de Noticias",
    tag: "Contenidos",
    img: ImgPortal,
    link: "https://portal.fidelitytools.net",
    description: "Portal de noticias y eventos con integración a una API de clima.",
    tech: ["Laravel", "PHP", "Bootstrap", "API REST"],
  },
  {
    name: "Ingreso Domselaar",
    tag: "Control de acceso",
    img: ImgIngreso,
    link: "https://ingresodomselaar.com.ar/estancias/login/",
    description:
      "Sistema de ingreso a un barrio privado, pensado para el personal de seguridad.",
    tech: ["Laravel 11", "PHP", "Bootstrap"],
  },
];

const domainOf = (url) => url.replace(/^https?:\/\/(www\.)?/, "").split("/")[0];

// Portada para sitios sin captura: ventana de navegador estilizada con el dominio
const Cover = ({ name, link }) => (
  <div className="relative flex h-full w-full flex-col bg-gradient-to-br from-cocoa-600 via-cocoa-700 to-cocoa-900">
    <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-topaz/30 blur-2xl" />
    <div className="absolute -bottom-12 -left-8 h-36 w-36 rounded-full bg-noonday/20 blur-2xl" />
    <div className="relative flex items-center gap-1.5 border-b border-cream/10 bg-cocoa-950/40 px-4 py-2.5">
      <span className="h-2.5 w-2.5 rounded-full bg-topaz/80" />
      <span className="h-2.5 w-2.5 rounded-full bg-topaz-light/60" />
      <span className="h-2.5 w-2.5 rounded-full bg-noonday/60" />
      <span className="ml-3 truncate rounded-md bg-cocoa-950/50 px-3 py-0.5 font-mono text-[11px] text-cream-dim">
        {domainOf(link)}
      </span>
    </div>
    <div className="relative flex flex-1 items-center justify-center px-6 text-center">
      <span className="font-primary text-2xl font-bold tracking-tight text-cream sm:text-3xl">
        {name.split(" — ")[0]}
      </span>
    </div>
  </div>
);

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-2xl">
            <span className="eyebrow">Proyectos</span>
            <h2 className="h2 mb-0">
              Trabajo <span className="text-gradient">destacado</span>.
            </h2>
          </div>
          <a
            href="https://github.com/agustinandrada"
            target="_blank"
            rel="noreferrer"
            className="btn btn-ghost btn-sm self-start md:self-auto"
          >
            Ver GitHub <BsArrowUpRight />
          </a>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.name}
              variants={fadeIn("up", 0.08 * (i % 3))}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className={`card group flex flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-topaz/40 hover:shadow-[0_20px_60px_-20px_rgba(242,140,56,0.35)] ${
                p.featured ? "xl:col-span-2" : ""
              }`}
            >
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className={`relative block overflow-hidden bg-cocoa-700 ${
                  p.featured ? "aspect-[16/10] xl:aspect-auto xl:min-h-[260px] xl:flex-1" : "aspect-[16/10]"
                }`}
              >
                {p.img ? (
                  <img
                    src={p.img}
                    alt={p.name}
                    loading="lazy"
                    className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 transition duration-500 group-hover:scale-105">
                    <Cover name={p.name} link={p.link} />
                  </div>
                )}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-cocoa-900/70 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 rounded-full bg-cocoa-950/70 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-topaz-light backdrop-blur">
                  {p.tag}
                </span>
                <span className="absolute bottom-4 right-4 grid h-9 w-9 place-items-center rounded-full bg-topaz text-cocoa-950 opacity-0 transition group-hover:opacity-100">
                  <BsArrowUpRight />
                </span>
              </a>

              <div className="flex flex-col p-6">
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="h3 transition hover:text-topaz"
                >
                  {p.name}
                </a>
                <div className="mt-1 flex flex-wrap gap-x-3 font-mono text-xs text-noonday">
                  <span>{domainOf(p.link)}</span>
                  {p.extraLinks?.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      className="underline-offset-2 hover:text-topaz hover:underline"
                    >
                      + {l.label}
                    </a>
                  ))}
                </div>
                <p className="mt-3 text-sm text-cream-muted">{p.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
