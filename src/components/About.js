import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { fadeIn } from "../variants";
import ProfileImg from "../assets/mia-perfil-crop.jpg";

const stats = [
  { end: 4, prefix: "+", label: "Años de experiencia" },
  { end: 30, prefix: "+", label: "Proyectos en producción" },
  // { end: 8, prefix: "", label: "Devs en el equipo de home banking" },
];

const skills = [
  {
    title: "Back-end",
    items: ["C#", "Visual Basic", "PHP", "Laravel", "Symfony", "Yii", "Node.js", "Express", "Python", "Django"],
  },
  {
    title: "Front-end",
    items: ["React", "Redux", "TypeScript", "JavaScript", "HTML / CSS", "Livewire", "Tailwind", "Bootstrap", "AJAX"],
  },
  {
    title: "Datos",
    items: ["SQL Server", "MySQL", "PostgreSQL", "MongoDB", "Big Data"],
  },
  {
    title: "DevOps & flujo",
    items: ["Docker", "Git", "Linux", "Apache", "XAMPP", "cPanel", "Scrum", "Kanban", "Jira"],
  },
];

const education = [
  {
    place: "Henry",
    title: "Bootcamp Full Stack — Programador Full Stack",
    where: "Buenos Aires, Argentina",
  },
  {
    place: "UNL · FIQ",
    title: "Ingeniería de Materiales (hasta 4.º año)",
    where: "Santa Fe, Argentina · 2018 – 2022",
  },
  {
    place: "E.E.T. Ntra. Sra. de Lourdes",
    title: "Técnico Químico",
    where: "Santa Fe, Argentina · 2015",
  },
];

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.4, triggerOnce: true });

  return (
    <section id="about" className="section">
      <div className="container mx-auto">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          {/* Bio */}
          <motion.div
            variants={fadeIn("right", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <span className="eyebrow">Sobre mí</span>
            <h2 className="h2">
              Código sólido, <span className="text-gradient">equipos</span> que funcionan.
            </h2>
            <div className="space-y-4 text-cream-muted">
              <p>
                Soy un programador full-stack apasionado, con una sólida formación en
                desarrollo web y antecedentes en <span className="text-cream">ingeniería de materiales,
                química y liderazgo scout</span>. Eso me enseñó a trabajar en equipo, analizar
                datos masivos, gestionar grupos y resolver problemas.
              </p>
              <p>
                Mi foco es entregar soluciones técnicas de alta calidad y eficientes,
                especializándome en <span className="text-cream">Back-end</span>: arquitectura de datos,
                APIs e integraciones con servicios de terceros.
              </p>
              <p>
                Lidero equipos de <span className="text-cream">revisión de código</span> previo al despliegue
                en producción y me encargo de la implementación de{" "}
                <span className="text-cream">Docker</span> en servidores para gestionar proyectos de
                distintas tecnologías.
              </p>
            </div>

            {/* Stats */}
            <div ref={ref} className="mt-10 grid grid-cols-3 gap-3">
              {stats.map((s) => (
                <div key={s.label} className="card p-4 sm:p-5">
                  <div className="font-primary text-3xl font-bold text-topaz sm:text-4xl">
                    {s.prefix}
                    {inView ? <CountUp start={0} end={s.end} duration={2.5} /> : 0}
                  </div>
                  <div className="mt-1 text-xs leading-snug text-cream-dim sm:text-sm">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Skills + educación */}
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-6"
          >
            <figure className="card relative overflow-hidden">
              <img
                src={ProfileImg}
                alt="Agustín Andrada"
                loading="lazy"
                className="aspect-[16/10] w-full object-cover object-[30%_25%] saturate-[0.9] sepia-[0.15]"
              />
              <figcaption className="border-t border-cream/10 bg-cocoa-950 p-5 sm:p-6">
                <div className="font-primary text-lg font-semibold text-topaz">
                  Ingeniería, química y scouting
                </div>
                <div className="text-sm text-cream">
                  Lo que aprendí fuera del código también lo aplico al liderar equipos.
                </div>
              </figcaption>
            </figure>

            <div className="card p-6 sm:p-8">
              <h3 className="h3 mb-6">Stack técnico</h3>
              <div className="space-y-5">
                {skills.map((g) => (
                  <div key={g.title}>
                    <div className="mb-2 font-mono text-xs uppercase tracking-widest text-noonday">
                      {g.title}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {g.items.map((i) => (
                        <span key={i} className="chip">
                          {i}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card p-6 sm:p-8">
              <h3 className="h3 mb-6 flex items-center gap-2">
                <HiOutlineAcademicCap className="text-topaz" /> Educación
              </h3>
              <ul className="space-y-5">
                {education.map((e) => (
                  <li key={e.place} className="border-l-2 border-topaz/40 pl-4">
                    <div className="font-primary font-semibold text-cream">{e.title}</div>
                    <div className="text-sm text-cream-muted">{e.place}</div>
                    <div className="text-xs text-cream-dim">{e.where}</div>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
