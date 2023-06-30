import Image from "next/image";
import styles from "@/styles/Home.module.scss";
import { poppins } from "../fonts/index";
import Layout from "@/components/Layout";
import Envelope from "@/components/icons/Envelope";
import astronaut from "../../public/img/astro.svg";

export default function Home() {
  return (
    <Layout>
      <section className={styles.section}>
        <div className={styles.hero}>
          <div className={styles.upper}>
            <h1 className={styles.intro} style={poppins.style}>
              Unleashing the art of Visual Storytelling
            </h1>
            <p className={styles.subtext}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Repudiandae ratione blanditiis provident! Perspiciatis sequi illum
              error, asperiores expedita quos fugiat esse sit eligendi quibusdam
              est perferendis aliquam porro adipisci facere.
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
    </Layout>
  );
}
