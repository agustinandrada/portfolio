import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import { fadeIn } from "../variants";

const contacts = [
  {
    icon: <HiOutlineMail />,
    label: "Email",
    value: "agustinandrada1@gmail.com",
    href: "mailto:agustinandrada1@gmail.com",
  },
  {
    icon: <FaWhatsapp />,
    label: "WhatsApp",
    value: "+54 9 342 538-7517",
    href: "https://wa.me/5493425387517",
  },
  {
    icon: <FaLinkedin />,
    label: "LinkedIn",
    value: "in/agustinandrada-fwd",
    href: "https://www.linkedin.com/in/agustinandrada-fwd",
  },
  {
    icon: <FaGithub />,
    label: "GitHub",
    value: "github.com/agustinandrada",
    href: "https://github.com/agustinandrada",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="section pb-32 lg:pb-16">
      <div className="container mx-auto">
        <div className="card relative overflow-hidden p-6 sm:p-10 lg:p-14">
          <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-topaz/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-noonday/10 blur-3xl" />

          <div className="relative grid gap-12 lg:grid-cols-2">
            <motion.div
              variants={fadeIn("right", 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              <span className="eyebrow">Contacto</span>
              <h2 className="h2 text-4xl md:text-6xl">
                Trabajemos <span className="text-gradient">juntos</span>.
              </h2>
              <p className="max-w-md text-cream-muted">
                ¿Tenés un proyecto, una vacante o una idea? Escribime y te respondo a la
                brevedad.
              </p>
              <p className="mt-3 inline-flex items-center gap-1 text-sm text-cream-dim">
                <HiOutlineLocationMarker /> Santa Fe, Argentina · Remoto
              </p>

              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {contacts.map((c) => (
                  <li key={c.label}>
                    <a
                      href={c.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center gap-3 rounded-2xl border border-cream/10 bg-cocoa-900/50 p-3 transition hover:border-topaz/40"
                    >
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-topaz/15 text-lg text-topaz">
                        {c.icon}
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xs text-cream-dim">{c.label}</span>
                        <span className="block truncate text-sm text-cream group-hover:text-topaz-light">
                          {c.value}
                        </span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.form
              variants={fadeIn("left", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col gap-4"
              action="https://formsubmit.co/agustinandrada1@gmail.com"
              method="POST"
            >
              <input type="hidden" name="_subject" value="Nuevo mensaje desde el portfolio" />
              <input className="field" type="text" placeholder="Nombre" name="name" required />
              <input className="field" type="email" placeholder="Email" name="email" required />
              <textarea
                className="field min-h-[180px] resize-none"
                placeholder="Contame en qué puedo ayudarte…"
                name="message"
                required
              />
              <button className="btn btn-primary btn-lg self-start" type="submit">
                Enviar mensaje
              </button>
            </motion.form>
          </div>
        </div>

        <footer className="mt-12 flex flex-col items-center justify-between gap-2 text-sm text-cream-dim sm:flex-row">
          <span>© {new Date().getFullYear()} Agustín Andrada</span>
          <span className="font-mono text-xs">Hecho con React + Tailwind · Santa Fe, AR</span>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
