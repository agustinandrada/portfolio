import React from "react";

//* Images
import Image from "../assets/mia.png";

//*icons
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

//*type animation
import { TypeAnimation } from "react-type-animation";

//*motion
import { motion } from "framer-motion";

//*variants
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section
      id="home"
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
    >
      <div className="container mx-auto">
        <div
          className="flex flex-col gap-y-8 lg:flex-row lg:items-center
        lg:gap-x-8"
        >
          {/* Text */}
          <div
            className="felx-1 text-center font-secondary
          lg:text-left"
          >
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[80px] font-bold leading-[0.8] lg:text-
            [110px]"
            >
              AGUSTIN<span> ANDRADA</span>{" "}
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary 
            font-semibold uppercase leading-[1]"
            >
              <span className="mr-4 text-white">Soy</span>
              <TypeAnimation
                sequence={[
                  "Desarrollador",
                  2000,
                  "Diseñador",
                  2000,
                  "Scout",
                  2000,
                  "Full Stack",
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.div
              variants={fadeIn("up", 1.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12
            mx-auto lg:mx-0"
            >
              <h2 className="text-white font-bold btn-link flex text-[18px]">
                "Dejad este mundo en mejores condiciones que como lo encontraron." ~ Robert
                Baden-Powell
              </h2>
            </motion.div>
            {/* socials */}
            <motion.div
              variants={fadeIn("up", 1.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto
            lg:mx-0"
            >
              <a href="https://github.com/agustinandrada" target="_blank">
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/agustinandrada-fwd"
                target="_blank"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.youtube.com/@NoPasaNadaOficial-ow8ci"
                target="_blank"
              >
                <FaYoutube />
              </a>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12
            mx-auto lg:mx-0 py-5"
            >
              <a
                href="https://wa.me/5493424286655"
                className="text-gradient btn-link flex text-[18px]"
                target="_blank"
              >
                Contactame
              </a>
            </motion.div>
          </div>
          {/*image*/}
          <motion.div
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]"
          >
            <img src={Image} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
