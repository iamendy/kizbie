import styles from "@/styles/Home.module.scss";
import testimonials from "../../../public/img/testimonials.svg";
import user from "../../../public/img/user.webp";
import Image from "next/image";
import { poppins } from "@/fonts";
import { Star2 } from "@/components/icons";

const Testimonial = () => {
  return (
    <section className={styles.testSection}>
      <div className={styles.testWrapper}>
        <div className={styles.left}>
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

        <div className={styles.right}>
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
                  <div>
                    <b className={styles.authorName}>John Smith</b>
                    <p className={styles.authorRole}>FitRevolution CEO</p>
                  </div>
                  <Star2 />
                </div>
              </div>
            </div>

            <div className={styles.card}>
              <p className={styles.review}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
                ratione. Autem laboriosam omnis voluptates! Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Excepturi, dolor.
              </p>

              <div className={styles.author}>
                <div className={styles.authorDp}>
                  <Image src={user} alt="user" />
                </div>
                <div className={styles.authorDetail}>
                  <div>
                    <b className={styles.authorName}>John Smith</b>
                    <p className={styles.authorRole}>FitRevolution CEO</p>
                  </div>
                  <Star2 />
                </div>
              </div>
            </div>

            <div className={styles.card}>
              <p className={styles.review}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
                ratione. Autem laboriosam omnis voluptates! Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Cumque ullam ipsa atque
                tenetur iusto velit?
              </p>

              <div className={styles.author}>
                <div className={styles.authorDp}>
                  <Image src={user} alt="user" />
                </div>
                <div className={styles.authorDetail}>
                  <div>
                    <b className={styles.authorName}>John Smith</b>
                    <p className={styles.authorRole}>FitRevolution CEO</p>
                  </div>
                  <Star2 />
                </div>
              </div>
            </div>

            <div className={styles.card}>
              <p className={styles.review}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
                ratione. Autem laboriosam omnis voluptates! Lorem ipsum dolor
                sit amet.
              </p>

              <div className={styles.author}>
                <div className={styles.authorDp}>
                  <Image src={user} alt="user" />
                </div>
                <div className={styles.authorDetail}>
                  <div>
                    <b className={styles.authorName}>John Smith</b>
                    <p className={styles.authorRole}>FitRevolution CEO</p>
                  </div>
                  <Star2 />
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
