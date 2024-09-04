import { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from './meshach_arinze_software_engineer .pdf';

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>Services</span>
        <div>
          <p>

          • SaaS Development
          </p>
          <p>

          • Application Development
          </p>
          <p>

          • Enterprise Content Management
          </p>
          <p>

          • Web Development
          </p>

          <p>
          • Custom Software Development
          </p>
        </div>
        <a className="w-[2.5rem]" href={Resume} download>
        <button type="button"
        className="px-5 py-2.5 rounded-lg text-sm tracking-wider font-medium border border-orange-700 outline-none bg-transparent hover:bg-orange-700 text-orange-700 hover:text-white transition-all duration-300">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading="Design"
            detail="Figma, Sketch, Photoshop, Adobe Illustrator, Adobe XD"
            color=""
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading="Developer"
            detail="HTML, CSS, JavaScript, React, Node.js, Express.js, Nest.js, Python"
            color=""
          />
        </motion.div>
        {/* third card */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading="UI/UX"
            detail="User testing, User Interface."
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div className="blur s-blur2" style={{ background: "var(--purple)" }}></div>
      </div>
    </div>
  );
};

export default Services;
