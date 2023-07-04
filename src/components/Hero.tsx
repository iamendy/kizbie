import Envelope from "@/components/icons/Envelope";
import astronaut from "../../public/img/astro.svg";
import Image from "next/image";
import styles from "@/styles/Home.module.scss";
import { poppins } from "../fonts/index";

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.hero}>
        <div className={styles.upper}>
          <h1 className={styles.intro} style={poppins.style}>
            Unleashing the art of Visual Storytelling
          </h1>
          <p className={styles.subtext}>
            I am a passionate web designer dedicated to bringing your visions to
            life. With a keen eye for aesthetics and a deep understanding of
            user experience, I strive to create captivating websites that leave
            a lasting impression.
          </p>
          <button className={styles.get}>
            <Envelope />
            <span>Let's get started</span>
          </button>
        </div>

        <div className={styles.lower}>
          <div className={styles.astro}>
            <Image
              src={astronaut}
              alt="A young astronaut"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
