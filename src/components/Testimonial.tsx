import styles from "../styles/Home.module.scss";
import testimonials from "../../public/img/testimonials.svg";
import user from "../../public/img/user.webp";

import Image from "next/image";
import { poppins } from "@/fonts";
const Testimonial = () => {
  return (
    <section className={styles.testSection}>
      <div className={styles.testWrapper}>
        <div>
          <div className="badge">
            <span>Testimonials</span>
          </div>

          <h1 className={styles.header} style={poppins.style}>
            What our readers say?
          </h1>

          <div className={styles.clients}>
            <Image src={testimonials} alt="what our clients say" />
          </div>
        </div>

        <div>
          <div className={styles.cardWrapper}>
            <div className={styles.card}>
              <p className={styles.review}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
                ratione. Autem laboriosam omnis voluptates!
              </p>

              <div className={styles.author}>
                <div className={styles.authorDp}>
                  <Image src={user} alt="user" />
                </div>
                <div className={styles.authorDetail}>
                  <b className={styles.authorName}>John Smith</b>
                  <p className={styles.authorRole}>FitRevolution CEO</p>
                </div>
              </div>
            </div>

            <div className={styles.card}>
              <p className={styles.review}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
                ratione. Autem laboriosam omnis voluptates!
              </p>

              <div className={styles.author}>
                <div className={styles.authorDp}>
                  <Image src={user} alt="user" />
                </div>
                <div className={styles.authorDetail}>
                  <b className={styles.authorName}>John Smith</b>
                  <p className={styles.authorRole}>FitRevolution CEO</p>
                </div>
              </div>
            </div>

            <div className={styles.card}>
              <p className={styles.review}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
                ratione. Autem laboriosam omnis voluptates!
              </p>

              <div className={styles.author}>
                <div className={styles.authorDp}>
                  <Image src={user} alt="user" />
                </div>
                <div className={styles.authorDetail}>
                  <b className={styles.authorName}>John Smith</b>
                  <p className={styles.authorRole}>FitRevolution CEO</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Testimonial;
