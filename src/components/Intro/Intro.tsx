import { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
          <span>Meshach Arinze</span>
          <span className="text-md text-black">
            An experienced Fullstack developer with over 3 years of front-end and 1 year of back-end development expertise. Currently, one of the backend developers for Zormor, contributing to building scalable and efficient backend services using NestJS and TypeORM. My role involves creating robust features for the Event management system, ensuring seamless user experiences, and integrating various backend technologies.
            Previously, I worked as a frontend and open-source engineer at FuelMyHustle, where I played a key role in developing and maintaining the community website TechClarity using JavaScript, Next.js, and TypeScript. My experience also includes an internship at Trochah as a front-end engineer, where I honed my skills in building responsive web applications. Earlier in my career, I was part of Team Eloquent as a frontend developer, collaborating closely with the backend team to deliver high-quality web solutions.
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
        <button type="button"
        className="px-5 py-2.5 rounded-lg text-sm tracking-wider font-medium border border-orange-700 outline-none bg-transparent hover:bg-orange-700 text-orange-700 hover:text-white transition-all duration-300">Hire Me</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
          <a href="http://github.com/meshach567">
            <img src={Github} alt="" />
          </a>
          <a href="http://linkedin..com/in/meshach-ekene">
          <img src={LinkedIn} alt="" />
          </a>
          <a href="http://instagram.com/arinzemeshach">
          <img src={Instagram} alt="" />
          </a>
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Web" text2="Developer" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={thumbup} text1="Best Design" text2="Award" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
