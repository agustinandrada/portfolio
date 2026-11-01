import React from "react";
import Image from "../assets/mia1.png";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { fadeIn } from "../variants";

const socials = [
  { href: "https://github.com/agustinandrada", icon: <FaGithub />, label: "GitHub" },
  { href: "https://www.linkedin.com/in/agustinandrada-fwd", icon: <FaLinkedin />, label: "LinkedIn" },
  { href: "mailto:agustinandrada1@gmail.com", icon: <HiOutlineMail />, label: "Email" },
  { href: "https://wa.me/5493425387517", icon: <FaWhatsapp />, label: "WhatsApp" },
];

const Banner = () => {
  return (
    <section id="home" className="relative flex min-h-screen items-center pt-28 pb-16">
      <div className="container mx-auto">
        <div className="grid items-center gap-14 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Texto */}
          <div className="text-center lg:text-left">
            <motion.div
              variants={fadeIn("up", 0.1)}
              initial="hidden"
              animate="show"
              className="mb-6 inline-flex flex-wrap items-center justify-center gap-3"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-noonday/30 bg-noonday/10 px-3 py-1 text-xs text-noonday-light">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-noonday opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-noonday" />
                </span>
                Abierto a nuevos desafíos
              </span>
              <span className="inline-flex items-center gap-1 text-xs text-cream-dim">
                <HiOutlineLocationMarker /> Santa Fe, Argentina
              </span>
            </motion.div>

            <motion.h1
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              className="h1 text-5xl leading-[0.95] sm:text-6xl lg:text-[88px]"
            >
              Agustín
              <br />
              <span className="text-gradient">Andrada</span>
            </motion.h1>

            <motion.div
              variants={fadeIn("up", 0.35)}
              initial="hidden"
              animate="show"
              className="mt-6 font-primary text-2xl font-medium text-cream-muted sm:text-3xl"
            >
              <TypeAnimation
                sequence={[
                  "Full-stack Developer",
                  2200,
                  "Back-end Developer",
                  2200,
                  "Líder de equipo",
                  2200,
                  "Code reviewer",
                  2200,
                ]}
                speed={50}
                wrapper="span"
                repeat={Infinity}
                className="text-cream"
              />
              <span className="text-topaz">_</span>
            </motion.div>

            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              animate="show"
              className="mx-auto mt-6 max-w-xl text-lg text-cream-muted lg:mx-0"
            >
              Construyo soluciones técnicas eficientes y de alta calidad, con foco
              en el Back-end. Hoy desarrollo el nuevo home banking de{" "}
              <span className="text-cream">BancoBica</span> y lidero el equipo web
              de <span className="text-cream">ArgDG</span>.
            </motion.p>

            <motion.div
              variants={fadeIn("up", 0.65)}
              initial="hidden"
              animate="show"
              className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
            >
              <Link to="projects" smooth offset={-80} duration={600} className="btn btn-primary btn-lg cursor-pointer">
                Ver proyectos
              </Link>
              <Link to="contact" smooth offset={-80} duration={600} className="btn btn-ghost btn-lg cursor-pointer">
                Contactame
              </Link>
            </motion.div>

            <motion.div
              variants={fadeIn("up", 0.8)}
              initial="hidden"
              animate="show"
              className="mt-10 flex items-center justify-center gap-3 lg:justify-start"
            >
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="grid h-11 w-11 place-items-center rounded-full border border-cream/10 bg-cocoa-800/60 text-lg text-cream-muted transition hover:-translate-y-0.5 hover:border-topaz hover:text-topaz"
                >
                  {s.icon}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Foto */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            animate="show"
            className="relative mx-auto w-full max-w-[340px] lg:max-w-[400px]"
          >
            <div className="absolute -inset-6 rounded-[48%] bg-topaz/20 blur-3xl" />
            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full border border-noonday/40" />
            <div className="absolute -bottom-6 -left-6 h-16 w-16 rounded-full bg-noonday/20 blur-md" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-t-full rounded-b-[2.5rem] border border-cream/10 bg-gradient-to-b from-topaz via-topaz-dark to-cocoa-700">
              <img
                src={Image}
                alt="Agustín Andrada"
                className="absolute bottom-0 left-1/2 h-[92%] w-auto max-w-none -translate-x-1/2 object-contain drop-shadow-[0_20px_30px_rgba(20,12,8,0.5)]"
              />
            </div>
            <div className="card absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-3 whitespace-nowrap px-5 py-3 shadow-xl">
              <span className="font-primary text-2xl font-bold text-topaz">C1</span>
              <span className="text-xs leading-tight text-cream-muted">
                Nivel de
                <br />
                inglés
              </span>
            </div>
          </motion.div>
        </div>

        <p className="mx-auto mt-20 max-w-2xl text-center font-mono text-xs text-cream-dim">
          “Dejad este mundo en mejores condiciones que como lo encontraron.” — Robert Baden-Powell
        </p>
      </div>
    </section>
  );
};

export default Banner;
