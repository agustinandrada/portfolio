import React from "react";
import { motion } from "framer-motion";
import { BsArrowUpRight } from "react-icons/bs";
import { fadeIn } from "../variants";

const jobs = [
  {
    company: "BancoBica S.A.",
    link: "https://www.bancobica.com.ar",
    role: "Full-stack Developer",
    period: "Dic 2025 — Actualidad",
    location: "Santa Fe, Argentina",
    current: true,
    summary:
      "Desarrollador full stack (back y front) en el diseño, desarrollo y mantenimiento del nuevo Home Banking, dentro de un equipo de 8 programadores. Co-desarrollé una versión exclusiva para mutuales y lideré la implementación de un chatbot.",
    bullets: [
      "Desarrollo y mantenimiento del nuevo home banking.",
      "Integración de APIs de terceros con productos propios.",
      "Creación y mantenimiento de un chatbot.",
      "Soporte activo y mantenimiento de todo el ecosistema de aplicaciones y servicios.",
    ],
    tech: ["C#", "React", "TypeScript", "JavaScript", "Visual Basic", "SQL Server"],
  },
  {
    company: "ArgDG — Estudio de Diseño y Desarrollo",
    link: "https://www.argdg.com",
    role: "Full-stack Developer / Líder de equipo",
    period: "Jul 2024 — Actualidad",
    location: "Buenos Aires, Argentina",
    current: true,
    summary:
      "Rol clave como socio tecnológico, liderando proyectos en paralelo a mi trabajo principal. Mi aporte fortaleció la estructura del equipo y optimizó la gestión de recursos.",
    bullets: [
      "Desarrollo y soporte de software a medida para distintos clientes.",
      "Administración de servidores y bases de datos.",
      "Liderazgo del equipo web: asignación de tareas, code review y entrevistas técnicas.",
    ],
    tech: ["PHP", "Laravel", "Livewire", "React", "Node.js", "MySQL", "Docker", "Bootstrap"],
  },
  {
    company: "Fidelitytools",
    link: "https://www.fidelitytools.com",
    role: "Full-stack Developer",
    period: "May 2024 — Dic 2025",
    location: "Córdoba, Argentina",
    summary:
      "Alto nivel de autonomía y resolución, mejorando la calidad de código y los tiempos de entrega. Soporte y desarrollo en más de 15 proyectos activos, principalmente como Backend Developer.",
    bullets: [
      "APIs y sistemas de scraping en Node.js y Python.",
      "Configuración, despliegue y administración de servidores Apache, Linux, Windows y Docker.",
      "Desarrollo y puesta en producción de sistemas en Laravel y Yii.",
      "Integración de Big Data en MongoDB y SQL con soluciones a medida.",
      "Gestión de proyectos con Kanban.",
    ],
    tech: ["PHP", "Laravel", "Yii", "Symfony", "Livewire", "MongoDB", "MySQL", "Docker"],
  },
  {
    company: "UNBCollections",
    link: "https://unbcollections.com.ar",
    role: "Full-stack Developer",
    period: "Oct 2023 — May 2024",
    location: "Chile / Argentina",
    summary:
      "Desarrollo y despliegue de sistemas a medida para clientes de distintas industrias, adaptándome rápido a Scrum con Jira, Git y despliegues en cPanel.",
    bullets: [
      "Sistema de reservas deportivas (fútbol 5, 7 y 9) con usuarios y pagos online.",
      "Plataforma de evaluación de instituciones educativas con reportes PDF y envíos automáticos.",
      "Trazabilidad de productos por lotes integrada a la API de Laudus.",
    ],
    tech: ["PHP", "Laravel", "TailwindCSS", "Bootstrap", "MySQL", "Livewire", "Docker"],
  },
];

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-14 max-w-2xl"
        >
          <span className="eyebrow">Experiencia</span>
          <h2 className="h2">
            Dónde estuve <span className="text-gradient">construyendo</span>.
          </h2>
          <p className="text-cream-muted">
            Banca, estudios de diseño, SaaS de inteligencia comercial y software a
            medida para clientes de Argentina y Chile.
          </p>
        </motion.div>

        <ol className="relative space-y-8 border-l border-cream/10 pl-6 sm:pl-10">
          {jobs.map((job, i) => (
            <motion.li
              key={job.company}
              variants={fadeIn("up", 0.05 * i)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="relative"
            >
              <span
                className={`absolute -left-[31px] top-8 h-3 w-3 rounded-full ring-4 ring-cocoa-950 sm:-left-[47px] ${
                  job.current ? "bg-topaz" : "bg-cocoa-500"
                }`}
              />
              <article className="card group p-6 transition hover:border-topaz/30 sm:p-8">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <a
                      href={job.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 font-primary text-xl font-bold text-cream transition hover:text-topaz sm:text-2xl"
                    >
                      {job.company}
                      <BsArrowUpRight className="text-base opacity-50 transition group-hover:opacity-100" />
                    </a>
                    <div className="mt-1 text-topaz-light">{job.role}</div>
                  </div>
                  <div className="shrink-0 sm:text-right">
                    <div className="font-mono text-sm text-cream">
                      {job.period}
                      {job.current && (
                        <span className="ml-2 rounded-full bg-noonday/15 px-2 py-0.5 text-[10px] uppercase tracking-wider text-noonday">
                          Actual
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-cream-dim">{job.location}</div>
                  </div>
                </div>

                <p className="mt-5 text-cream-muted">{job.summary}</p>

                <ul className="mt-4 space-y-1.5 text-sm text-cream-muted">
                  {job.bullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span className="mt-2.5 h-1 w-3 shrink-0 rounded-full bg-topaz/70" />
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {job.tech.map((t) => (
                    <span key={t} className="chip chip-blue">
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Work;
