import styles from "@/styles/Home.module.scss";
import world from "../../../public/img/world.svg";
import Image from "next/image";
import { poppins } from "@/fonts";

const About = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.aboutWrapper}>
        <div className={styles.upper}>
          <p className="badge">About</p>
          <div className={styles.boy}>
            <Image src={world} alt="Kid with imaginations" />
          </div>
        </div>
        <div className={styles.lower}>
          <div>
            <h2 className={styles.intro} style={poppins.style}>
              A deep love for minimal design, pixel & coffee
            </h2>
            <p className={styles.subtext}>
              I thrive on the challenge of finding the perfect balance between
              creativity and practicality, ensuring that every website I create
              not only looks impressive but also provides intuitive user
              experiences.
            </p>
          </div>

          <div className={styles.stats}>
            <div className={styles.top}>
              <div>
                <h3>4 years</h3>
                <p>Experience</p>
              </div>

              <div>
                <h3>643 </h3>
                <p>Books</p>
              </div>
            </div>

            <div className={styles.bottom}>
              <div>
                <h3>64+</h3>
                <p>Authors</p>
              </div>

              <div>
                <h3>140k</h3>
                <p>Followers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
